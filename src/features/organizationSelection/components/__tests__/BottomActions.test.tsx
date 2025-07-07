import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BottomActions } from '../BottomActions';

describe('BottomActions', () => {
  it('renderiza ambos botones y responde a los clicks', () => {
    const onSettings = vi.fn();
    const onLogout = vi.fn();
    render(<BottomActions onSettings={onSettings} onLogout={onLogout} />);
    const settingsBtn = screen.getByText(/Configuración/i);
    const logoutBtn = screen.getByText(/Cerrar Sesión/i);
    expect(settingsBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
    fireEvent.click(settingsBtn);
    fireEvent.click(logoutBtn);
    expect(onSettings).toHaveBeenCalled();
    expect(onLogout).toHaveBeenCalled();
  });
}); 