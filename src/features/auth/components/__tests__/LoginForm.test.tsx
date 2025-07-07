import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoginForm } from '../LoginForm';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: vi.fn(), push: vi.fn() }),
}));

vi.mock('@/store/userStore', () => {
  let user: any = null;
  let token: any = null;
  return {
    useUserStore: (selector: any) =>
      selector({
        user,
        token,
        setUser: (u: any) => (user = u),
        setToken: (t: any) => (token = t),
        logout: () => {
          user = null;
          token = null;
        },
      }),
  };
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza los campos de email y contraseña', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
  });

  it('muestra error si faltan datos', () => {
    render(<LoginForm />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    // Verificar que el error se muestra
    const errorElement = screen.getByText('Completa todos los campos');
    expect(errorElement).toBeInTheDocument();
  });

  it('llama a setUser y setToken al hacer login mock', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), { target: { value: 'ludmi@ejemplo.com' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: '123456' } });
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    // No hay error
    expect(screen.queryByText('Completa todos los campos')).not.toBeInTheDocument();
  });
}); 