import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { OrganizationSelectionPage } from '../OrganizationSelectionPage';
import type { User } from '@/types/user';
import type { Organization } from '@/features/organizationSelection/data/type';
import Home from '@/app/page';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: vi.fn(), push: vi.fn() }),
  usePathname: () => '/',
}));

let user: User = { id: '1', name: 'TestUser', email: 'test@user.com' };
let token: string = 'mock-token';
let selectedOrganization: Organization | null = null;

vi.mock('@/store/userStore', () => ({
  useUserStore: (selector: any) =>
    selector({
      user,
      token,
      selectedOrganization,
      setUser: (u: User | null) => { user = u as User; },
      setToken: (t: string | null) => { token = t as string; },
      setSelectedOrganization: (org: Organization | null) => { selectedOrganization = org; },
      logout: () => { user = null as any; token = null as any; selectedOrganization = null; },
    }),
}));

describe('OrganizationSelectionPage integración', () => {
  beforeEach(() => {
    user = { id: '1', name: 'TestUser', email: 'test@user.com' };
    token = 'mock-token';
    selectedOrganization = null;
    vi.clearAllMocks();
  });

  it('renderiza el saludo, buscador, lista y botones', () => {
    render(<OrganizationSelectionPage />);
    expect(screen.getByText(/¡Hola TestUser!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Buscar organización/i)).toBeInTheDocument();
    expect(screen.getByText(/Configuración/i)).toBeInTheDocument();
    expect(screen.getByText(/Cerrar Sesión/i)).toBeInTheDocument();
  });

  it('filtra organizaciones al buscar', () => {
    render(<OrganizationSelectionPage />);
    const input = screen.getByPlaceholderText(/Buscar organización/i);
    fireEvent.change(input, { target: { value: 'Cabal' } });
    expect(screen.getByText('Cabal')).toBeInTheDocument();
    expect(screen.queryByText('Divya')).not.toBeInTheDocument();
  });

  it('llama a onLogout al hacer click en Cerrar Sesión', () => {
    render(<OrganizationSelectionPage />);
    const logoutBtn = screen.getByText(/Cerrar Sesión/i);
    fireEvent.click(logoutBtn);
    expect(user).toBeNull();
  });

  it('permite seleccionar una organización y navega al dashboard', () => {
    render(<OrganizationSelectionPage />);
    const orgBtn = screen.getByText('Cabal');
    fireEvent.click(orgBtn);
    render(<Home />);
    expect(screen.getByText(/Bienvenido al panel de administración de SmartUp/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Cabal/i).length).toBeGreaterThan(0);
  });
}); 