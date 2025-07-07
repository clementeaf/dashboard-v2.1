import React from 'react';
import { LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui';
import { BottomActionsProps } from './type';

export const BottomActions: React.FC<BottomActionsProps> = ({ onSettings, onLogout }) => (
  <div className="flex gap-4 mt-10">
    <Button
      variant="secondary"
      icon={Settings}
      onClick={onSettings}
      className="bg-white/10 hover:bg-white/20 text-white rounded-xl px-6 py-3 text-base font-semibold shadow transition"
      dataTestId="settings-btn"
    >
      Configuración
    </Button>
    <Button
      variant="outline"
      icon={LogOut}
      onClick={onLogout}
      className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-xl px-6 py-3 text-base font-semibold shadow transition"
      dataTestId="logout-btn"
    >
      Cerrar Sesión
    </Button>
  </div>
); 