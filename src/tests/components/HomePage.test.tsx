import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { User } from '@/types/user';
import type { Organization } from '@/features/organizationSelection/data/type';

// Mock de next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => '/',
}));

// Mock de Zustand
let user: User = { id: '1', name: 'Ludmi', email: 'ludmi@ejemplo.com' };
let token: string = 'mock-token';
let selectedOrganization: Organization = { id: '1', name: 'Cabal' };
vi.mock('@/store/userStore', () => ({
  useUserStore: (selector: any) =>
    selector({
      user,
      token,
      selectedOrganization,
      setUser: (u: User | null) => { user = u as User; },
      setToken: (t: string | null) => { token = t as string; },
      setSelectedOrganization: (org: Organization | null) => { selectedOrganization = org as Organization; },
      logout: () => { user = null as any; token = null as any; selectedOrganization = null as any; },
    }),
}));

import Home from '@/app/page';

describe('HomePage', () => {
  beforeEach(() => {
    user = { id: '1', name: 'Ludmi', email: 'ludmi@ejemplo.com' };
    token = 'mock-token';
    selectedOrganization = { id: '1', name: 'Cabal' };
    vi.clearAllMocks();
  });

  it('muestra el dashboard con la organización seleccionada', () => {
    render(<Home />);
    expect(screen.getByText(/Bienvenido al panel de administración de SmartUp/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Cabal/i).length).toBeGreaterThan(0);
  });

  it('renderiza correctamente el botón de logout', () => {
    render(<Home />);
    expect(screen.getByText(/Cerrar Sesión/i)).toBeInTheDocument();
  });
});
