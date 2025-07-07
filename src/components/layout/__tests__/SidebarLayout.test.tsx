import React from 'react';
import { render, screen } from '@testing-library/react';
import { SidebarLayout } from '../SidebarLayout';

describe('SidebarLayout', () => {
  it('renderiza el sidebar y el contenido hijo', () => {
    render(
      <SidebarLayout>
        <div>Contenido principal</div>
      </SidebarLayout>
    );
    // Sidebar
    expect(screen.getByText('Usuario')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Conversaciones')).toBeInTheDocument();
    expect(screen.getByText('Métricas')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();
    expect(screen.getByText('Agentes')).toBeInTheDocument();
    expect(screen.getByText('Cuenta')).toBeInTheDocument();
    expect(screen.getByText('Cerrar Sesión')).toBeInTheDocument();
    // Contenido principal
    expect(screen.getByText('Contenido principal')).toBeInTheDocument();
  });
}); 