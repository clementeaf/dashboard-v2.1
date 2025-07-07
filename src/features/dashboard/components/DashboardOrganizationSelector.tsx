import React from 'react';
import { Building2 } from 'lucide-react';
import { Organization } from '@/features/organizationSelection/data/type';

interface DashboardOrganizationSelectorProps {
  organizations: Organization[];
  selectedOrganizationId: string;
  onSelect: (orgId: string) => void;
}

export const DashboardOrganizationSelector: React.FC<DashboardOrganizationSelectorProps> = ({
  organizations,
  selectedOrganizationId,
  onSelect,
}) => (
  <div className="flex flex-col items-center w-full mb-8">
    <div className="flex flex-col items-center mb-4">
      <Building2 className="w-8 h-8 text-violet-500 mb-2" />
      <span className="font-semibold text-violet-700 text-lg mb-1">Seleccionar Organización</span>
      <span className="text-xs text-slate-500">Elige una organización para comenzar</span>
    </div>
    <div className="w-full max-w-xs">
      <label htmlFor="org-select" className="sr-only">Seleccionar Organización</label>
      <select
        id="org-select"
        className="w-full px-4 py-2 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 text-slate-800 font-medium bg-white shadow"
        value={selectedOrganizationId}
        onChange={e => onSelect(e.target.value)}
      >
        {organizations.map(org => (
          <option key={org.id} value={org.id}>{org.name}</option>
        ))}
      </select>
    </div>
  </div>
);

export default DashboardOrganizationSelector; 