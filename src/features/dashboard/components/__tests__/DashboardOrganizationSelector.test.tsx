import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DashboardOrganizationSelector } from '../DashboardOrganizationSelector';
import { Organization } from '@/features/organizationSelection/data/type';

describe('DashboardOrganizationSelector', () => {
  const organizations: Organization[] = [
    { id: '1', name: 'Org Uno' },
    { id: '2', name: 'Org Dos' },
  ];

  it('renderiza las opciones y permite seleccionar', () => {
    const onSelect = vi.fn();
    render(
      <DashboardOrganizationSelector
        organizations={organizations}
        selectedOrganizationId="1"
        onSelect={onSelect}
      />
    );
    expect(screen.getByDisplayValue('Org Uno')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });
    expect(onSelect).toHaveBeenCalledWith('2');
  });
}); 