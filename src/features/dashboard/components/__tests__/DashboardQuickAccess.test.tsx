import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DashboardQuickAccess, QuickAccessItem } from '../DashboardQuickAccess';
import { MessageCircle } from 'lucide-react';

describe('DashboardQuickAccess', () => {
  const items: QuickAccessItem[] = [
    {
      label: 'Conversaciones',
      description: 'Gestiona tus chats',
      icon: MessageCircle,
      onClick: vi.fn(),
    },
  ];

  it('renderiza los accesos rápidos y responde al click', () => {
    render(<DashboardQuickAccess items={items} />);
    expect(screen.getByText('Conversaciones')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Conversaciones'));
    expect(items[0].onClick).toHaveBeenCalled();
  });
}); 