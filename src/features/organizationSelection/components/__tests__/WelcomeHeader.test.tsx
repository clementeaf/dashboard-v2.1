import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WelcomeHeader } from '../WelcomeHeader';

describe('WelcomeHeader', () => {
  it('muestra el saludo con el nombre', () => {
    render(<WelcomeHeader name="Ludmi" />);
    expect(screen.getByText(/¡Hola Ludmi!/i)).toBeInTheDocument();
    expect(screen.getByText(/Selecciona tu organización/i)).toBeInTheDocument();
  });
}); 