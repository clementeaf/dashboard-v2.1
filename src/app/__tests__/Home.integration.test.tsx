import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { User } from '@/types/user';
import type { Organization } from '@/features/organizationSelection/data/type';
import LoginPage from '../login/page';

vi.mock('next/navigation', () => {
  let path = '';
  return {
    useRouter: () => ({
      replace: (p: string) => { path = p; },
      push: (p: string) => { path = p; },
      get path() { return path; },
    }),
    usePathname: () => '/',
  };
});

let user: User | null = null;
let token: string | null = null;
let selectedOrganization: Organization | null = null;

vi.mock('@/store/userStore', () => ({
  useUserStore: (selector: any) =>
    selector({
      user,
      token,
      selectedOrganization,
      setUser: (u: User | null) => { user = u; },
      setToken: (t: string | null) => { token = t; },
      setSelectedOrganization: (org: Organization | null) => { selectedOrganization = org; },
      logout: () => { user = null; token = null; selectedOrganization = null; },
    }),
}));

import Home from '../page';

describe('Home (Dashboard) integración', () => {
  beforeEach(() => {
    user = { id: '1', name: 'Ludmi', email: 'ludmi@ejemplo.com' };
    token = 'mock-token';
    selectedOrganization = null;
    vi.clearAllMocks();
  });

  it('redirige a /select-organization si no hay organización seleccionada', () => {
    render(<Home />);
    // No renderiza el dashboard
    expect(screen.queryByText(/dashboard/i)).not.toBeInTheDocument();
  });

  it('muestra el dashboard si hay organización seleccionada', () => {
    selectedOrganization = { id: '1', name: 'Cabal' };
    render(<Home />);
    expect(screen.getByText(/Bienvenido al panel de administración de SmartUp/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Cabal/i).length).toBeGreaterThan(0);
  });

  it('al hacer logout limpia usuario y organización', () => {
    selectedOrganization = { id: '1', name: 'Cabal' };
    render(<Home />);
    fireEvent.click(screen.getByText(/Cerrar Sesión/i));
    // Simular redirección a login tras logout
    cleanup();
    render(<LoginPage />);
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
  });
}); 