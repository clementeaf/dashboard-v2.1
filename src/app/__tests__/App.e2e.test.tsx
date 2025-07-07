import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { User } from '@/types/user';
import type { Organization } from '@/features/organizationSelection/data/type';

// Mocks globales para router y Zustand
let path = '/login';
let user: User | null = null;
let token: string | null = null;
let selectedOrganization: Organization | null = null;

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: (p: string) => { path = p; },
    push: (p: string) => { path = p; },
    get path() { return path; },
  }),
  usePathname: () => '/',
}));

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

import LoginPage from '../login/page';
import Home from '../page';
import { OrganizationSelectionPage } from '@/features/organizationSelection/components/OrganizationSelectionPage';

describe('App E2E (flujo completo)', () => {
  beforeEach(() => {
    path = '/login';
    user = null;
    token = null;
    selectedOrganization = null;
    vi.clearAllMocks();
  });

  it('flujo: login → selección de organización → dashboard → logout', () => {
    // 1. Usuario en /login
    render(<LoginPage />);
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    // 2. Login exitoso
    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), { target: { value: 'ludmi@ejemplo.com' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByText(/Iniciar sesión/i));
    expect(user).toEqual({ id: '1', name: 'ludmi', email: 'ludmi@ejemplo.com' });
    expect(token).toBe('mock-token');
    // 3. Redirige a selección de organización
    path = '/select-organization';
    render(<OrganizationSelectionPage />);
    expect(screen.getByText(/¡Hola ludmi!/i)).toBeInTheDocument();
    // 4. Selecciona una organización
    fireEvent.click(screen.getByText('Cabal'));
    // 5. Redirige al dashboard
    path = '/';
    render(<Home />);
    expect(screen.getByText(/Bienvenido al panel de administración de SmartUp/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Cabal/i).length).toBeGreaterThan(0);
    // 6. Logout
    const logoutButtons = screen.getAllByText(/Cerrar Sesión/i);
    fireEvent.click(logoutButtons[logoutButtons.length - 1]);
    // 7. Redirige a /login
    path = '/login';
    render(<LoginPage />);
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
  });
}); 