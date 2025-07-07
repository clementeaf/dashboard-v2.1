import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { OrganizationSearch } from '../OrganizationSearch';

describe('OrganizationSearch', () => {
  it('renderiza el input y permite escribir', () => {
    const handleChange = vi.fn();
    render(<OrganizationSearch value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/Buscar organización/i);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Cabal' } });
    expect(handleChange).toHaveBeenCalledWith('Cabal');
  });
}); 