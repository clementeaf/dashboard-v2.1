import React from 'react';
import { SearchInput } from '@/components/ui';
import { OrganizationSearchProps } from './type';

export const OrganizationSearch: React.FC<OrganizationSearchProps> = ({ value, onChange }) => (
  <SearchInput
    value={value}
    onChange={onChange}
    placeholder="Buscar organización..."
    className="mb-4"
    dataTestId="org-search-input"
  />
); 