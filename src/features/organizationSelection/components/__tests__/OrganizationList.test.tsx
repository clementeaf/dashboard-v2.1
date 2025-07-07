import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { OrganizationList } from '../OrganizationList';
import { mockOrganizations } from '../../data/mockOrganizations';

describe('OrganizationList', () => {
  it('muestra todas las organizaciones por defecto', () => {
    render(
      <OrganizationList organizations={mockOrganizations} filter="" onSelect={vi.fn()} />
    );
    mockOrganizations.forEach((org) => {
      expect(screen.getByText(org.name)).toBeInTheDocument();
    });
  });

  it('filtra correctamente por nombre', () => {
    render(
      <OrganizationList organizations={mockOrganizations} filter="Cabal" onSelect={vi.fn()} />
    );
    expect(screen.getByText('Cabal')).toBeInTheDocument();
    expect(screen.queryByText('Divya')).not.toBeInTheDocument();
  });

  it('muestra mensaje si no hay resultados', () => {
    render(
      <OrganizationList organizations={mockOrganizations} filter="NoExiste" onSelect={vi.fn()} />
    );
    expect(screen.getByText(/No se encontraron organizaciones/i)).toBeInTheDocument();
  });
}); 