import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LoginActions } from '../LoginActions';

describe('LoginActions', () => {
  it('renderiza los botones de login y Google', () => {
    render(<LoginActions />);
    expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
    expect(screen.getByText(/Continuar con Google/i)).toBeInTheDocument();
  });
}); 