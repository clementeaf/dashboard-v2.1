import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DashboardWelcome } from '../DashboardWelcome';

describe('DashboardWelcome', () => {
  it('muestra el nombre del usuario y la organización', () => {
    render(<DashboardWelcome userName="Clemente" organizationName="Demo Org" />);
    expect(screen.getByText(/¡Hola Clemente!/i)).toBeInTheDocument();
    expect(screen.getByText(/Demo Org/i)).toBeInTheDocument();
  });
}); 