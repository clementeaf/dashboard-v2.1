"use client";
import React, { useCallback } from 'react';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { mockOrganizations } from '@/features/organizationSelection/data/mockOrganizations';
import {
  DashboardWelcome,
  DashboardOrganizationSelector,
  DashboardQuickAccess,
  QuickAccessItem,
} from '@/features/dashboard/components';

const DashboardPage: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const selectedOrganization = useUserStore((state) => state.selectedOrganization);
  const setSelectedOrganization = useUserStore((state) => state.setSelectedOrganization);
  const router = useRouter();

  React.useEffect(() => {
    if (!selectedOrganization) {
      router.replace('/select-organization');
    }
  }, [selectedOrganization, router]);

  if (!selectedOrganization || !user) return null;

  const handleSelectOrganization = useCallback(
    (orgId: string) => {
      const org = mockOrganizations.find((o) => o.id === orgId);
      if (org) setSelectedOrganization(org);
    },
    [setSelectedOrganization]
  );

  const quickAccessItems: QuickAccessItem[] = [
    {
      label: 'Conversaciones',
      description: 'Revisa y administra todas las conversaciones de tus agentes de IA.',
      icon: require('lucide-react').MessageCircle,
      onClick: () => router.push('/conversaciones'),
    },
    {
      label: 'Métricas',
      description: 'Visualiza estadísticas y métricas de rendimiento de tus agentes.',
      icon: require('lucide-react').BarChart2,
      onClick: () => router.push('/metricas'),
    },
    {
      label: 'Agentes',
      description: 'Crea y configura agentes de IA para tu organización.',
      icon: require('lucide-react').Bot,
      onClick: () => router.push('/agentes'),
    },
  ];

  return (
    <SidebarLayout>
      <div className="flex flex-1 items-center justify-center w-full h-full">
        <div className="w-full max-w-4xl mx-auto p-6 md:p-12 bg-transparent flex flex-col items-center justify-center">
          <DashboardWelcome userName={user.name} organizationName={selectedOrganization.name} />
          <DashboardOrganizationSelector
            organizations={mockOrganizations}
            selectedOrganizationId={selectedOrganization.id}
            onSelect={handleSelectOrganization}
          />
          <DashboardQuickAccess items={quickAccessItems} />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default DashboardPage;
