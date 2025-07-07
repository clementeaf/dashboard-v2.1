"use client";

import React from 'react';
import Sidebar from './Sidebar';
import { useUserStore } from '@/store/userStore';
import { Breadcrumbs } from '@/components/ui';
import { usePathname } from 'next/navigation';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { label: 'Inicio', icon: '🏠' },
  { label: 'Conversaciones', icon: '💬' },
  { label: 'Métricas', icon: '📊' },
  { label: 'Feedback', icon: '📝' },
  { label: 'Agentes', icon: '🤖' },
  { label: 'Cuenta', icon: '👤' },
];

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const user = useUserStore((state) => state.user);
  const organization = useUserStore((state) => state.selectedOrganization);
  const pathname = usePathname();

  // Generar breadcrumbs basado en la ruta actual
  const getBreadcrumbs = () => {
    const segments = (pathname ?? '').split('/').filter(Boolean);
    return segments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: index === segments.length - 1 ? undefined : `/${segments.slice(0, index + 1).join('/')}`
    }));
  };

  return (
    <div className="flex min-h-screen bg-[#151c2c] p-6 lg:p-10">
      {/* Sidebar */}
      <Sidebar user={user} organization={organization} />
      {/* Main content */}
      <main className="flex-1 flex flex-col items-start justify-start p-6 lg:p-8 bg-stone-300 rounded-xl">
        <div className="w-full">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={getBreadcrumbs()} />
          </div>
          {/* Content */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout; 