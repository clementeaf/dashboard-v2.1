import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';
import type { User } from '@/types/user';
import type { Organization } from '@/features/organizationSelection/data/type';

describe('Sidebar', () => {
  const user: User = { id: '1', name: 'Clemente', email: 'clemente@ejemplo.com' };
  const organization: Organization = { id: '2', name: 'Divya' };

  it('renderiza avatar, nombre de usuario, organización y menú', () => {
    render(<Sidebar user={user} organization={organization} />);
    expect(screen.getByText('C')).toBeInTheDocument(); // Avatar
    expect(screen.getByText('Clemente')).toBeInTheDocument();
    expect(screen.getByText('Divya')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Conversaciones')).toBeInTheDocument();
    expect(screen.getByText('Métricas')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();
    expect(screen.getByText('Agentes')).toBeInTheDocument();
    expect(screen.getByText('Cuenta')).toBeInTheDocument();
    expect(screen.getByText('Cerrar Sesión')).toBeInTheDocument();
  });

  it('muestra valores por defecto si no hay usuario ni organización', () => {
    render(<Sidebar user={null} organization={null} />);
    expect(screen.getByText('C')).toBeInTheDocument(); // Avatar default
    expect(screen.getByText('Usuario')).toBeInTheDocument();
  });

  it('resalta el item activo y los enlaces navegan correctamente', async () => {
    vi.resetModules();
    vi.doMock('next/navigation', () => ({
      usePathname: () => '/agentes',
    }));
    const { Sidebar: SidebarWithMock } = await import('../Sidebar');
    render(<SidebarWithMock user={user} organization={organization} />);
    const agentesLink = screen.getByTestId('sidebar-link-agentes');
    expect(agentesLink).toHaveClass('bg-violet-700/40');
    expect(agentesLink).toHaveAttribute('href', '/agentes');
    const inicioLink = screen.getByTestId('sidebar-link-inicio');
    expect(inicioLink).toHaveAttribute('href', '/');
    vi.resetModules();
  });
}); 