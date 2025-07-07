import React from 'react';
import { render, screen } from '@testing-library/react';
import type { User } from '@/types/user';
import type { Organization } from '@/features/organizationSelection/data/type';

describe('Sidebar (resaltado y navegación)', () => {
  const user: User = { id: '1', name: 'Clemente', email: 'clemente@ejemplo.com' };
  const organization: Organization = { id: '2', name: 'Divya' };

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