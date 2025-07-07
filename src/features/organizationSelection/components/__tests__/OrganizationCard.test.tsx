import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { OrganizationCard } from '../OrganizationCard';

describe('OrganizationCard', () => {
  it('muestra el nombre y responde al click', () => {
    const handleClick = vi.fn();
    render(<OrganizationCard name="Cabal" onClick={handleClick} />);
    const card = screen.getByText('Cabal');
    expect(card).toBeInTheDocument();
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalled();
  });
}); 