import React from 'react';
import { Button } from '@/components/ui';
import { OrganizationCardProps } from './type';

export const OrganizationCard: React.FC<OrganizationCardProps> = ({ name, onClick }) => (
  <Button
    variant="outline"
    onClick={onClick}
    className="w-full text-left mb-3 bg-white/10 hover:bg-violet-600/80 shadow rounded-xl px-4 py-3 font-semibold text-white text-lg transition border border-white/10"
    dataTestId="org-card"
  >
    {name}
  </Button>
); 