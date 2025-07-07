"use client";

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationEvent {
  from: string;
  to: string;
  timestamp: number;
  duration?: number;
}

export const useNavigationAnalytics = () => {
  const pathname = usePathname();

  const trackNavigation = useCallback((event: NavigationEvent) => {
    // Aquí puedes enviar los datos a tu servicio de analytics
    console.log('Navigation Event:', event);
    
    // Ejemplo con Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: event.to,
        page_location: event.to,
        custom_parameter: {
          navigation_duration: event.duration
        }
      });
    }
  }, []);

  const trackPageLoad = useCallback((duration: number) => {
    trackNavigation({
      from: 'unknown',
      to: pathname,
      timestamp: Date.now(),
      duration
    });
  }, [pathname, trackNavigation]);

  useEffect(() => {
    const startTime = performance.now();
    
    const handleLoad = () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      trackPageLoad(duration);
    };

    // Track cuando la página está completamente cargada
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [pathname, trackPageLoad]);

  return {
    trackNavigation,
    trackPageLoad
  };
}; 