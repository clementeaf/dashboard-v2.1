import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { mockOrganizations } from '../data/mockOrganizations';
import { Organization } from '../data/type';
import { WelcomeHeader } from './WelcomeHeader';
import { OrganizationSearch } from './OrganizationSearch';
import { OrganizationList } from './OrganizationList';
import { BottomActions } from './BottomActions';
import { Card } from '@/components/ui';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';

export const OrganizationSelectionPage: React.FC = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const setSelectedOrganization = useUserStore((state) => state.setSelectedOrganization);

  const [search, setSearch] = useState('');

  const handleSelectOrg = (org: Organization) => {
    setSelectedOrganization(org);
    router.replace('/');
  };

  const handleSettings = () => {
    router.push('/settings');
  };

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <AuthenticatedLayout>
      <main className="min-h-screen flex items-center justify-center bg-slate-900">
        <Card className="max-w-md w-full mx-auto bg-white/10 border border-white/10 shadow-2xl rounded-3xl p-10 md:p-12 backdrop-blur-md">
          <WelcomeHeader name={user?.name || ''} />
          <h2 className="text-lg font-bold text-white mb-4">Organizaciones</h2>
          <OrganizationSearch value={search} onChange={setSearch} />
          <OrganizationList organizations={mockOrganizations} filter={search} onSelect={handleSelectOrg} />
          <BottomActions onSettings={handleSettings} onLogout={handleLogout} />
        </Card>
      </main>
    </AuthenticatedLayout>
  );
}; 