import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const navigateTo = useCallback(async (href: string) => {
    setIsNavigating(true);
    try {
      router.push(href);
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      // Pequeño delay para mostrar el estado de carga
      setTimeout(() => setIsNavigating(false), 300);
    }
  }, [router]);

  const navigateWithLoading = useCallback(async (href: string, callback?: () => void) => {
    setIsNavigating(true);
    try {
      await router.push(href);
      if (callback) callback();
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setTimeout(() => setIsNavigating(false), 300);
    }
  }, [router]);

  return {
    isNavigating,
    navigateTo,
    navigateWithLoading,
    router
  };
}; 