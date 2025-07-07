import React from 'react';
import { Organization } from '../data/type';
import { OrganizationCard } from './OrganizationCard';
import { OrganizationListProps } from './type';

export const OrganizationList: React.FC<OrganizationListProps> = ({ organizations, filter, onSelect }) => {
  const filtered = organizations.filter((org) =>
    org.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 mb-6" data-testid="org-list">
      {filtered.length === 0 && (
        <div className="text-slate-400 text-center py-4">No se encontraron organizaciones</div>
      )}
      {filtered.map((org) => (
        <OrganizationCard key={org.id} name={org.name} onClick={() => onSelect(org)} />
      ))}
    </div>
  );
}; 