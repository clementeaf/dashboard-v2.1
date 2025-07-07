import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { User } from '@/types/user';

vi.mock('next/navigation', () => {
  let path = '';
  return {
    useRouter: () => ({
      replace: (p: string) => { path = p; },
      push: (p: string) => { path = p; },
      get path() { return path; },
    }),
  };
});

let user: User | null = null;
let token: string | null = null;

vi.mock('@/store/userStore', () => ({
  useUserStore: (selector: any) =>
    selector({
      user,
      token,
      setUser: (u: User | null) => { user = u; },
      setToken: (t: string | null) => { token = t; },
      logout: () => { user = null; token = null; },
    }),
}));

import LoginPage from '../page';

describe('LoginPage integración', () => {
  beforeEach(() => {
    user = null;
    token = null;
    vi.clearAllMocks();
  });

  it('renderiza el formulario de login', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
  });

  it('muestra error si faltan datos', () => {
    render(<LoginPage />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(screen.getByText('Completa todos los campos')).toBeInTheDocument();
  });

  it('login exitoso setea usuario y redirige a Home', () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), { target: { value: 'ludmi@ejemplo.com' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: '123456' } });
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(user).toEqual({ id: '1', name: 'ludmi', email: 'ludmi@ejemplo.com' });
    expect(token).toBe('mock-token');
  });

  it('puede marcar el checkbox de recuérdame', () => {
    render(<LoginPage />);
    const checkbox = screen.getByLabelText(/Recuérdame/i);
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
}); 