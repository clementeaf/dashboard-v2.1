import React from 'react';
import { Button } from '@/components/ui';

export const LoginActions: React.FC = () => (
  <div className="w-full flex flex-col gap-4">
    <Button
      type="submit"
      variant="primary"
      className="w-full mb-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3 font-semibold text-lg shadow-md transition"
    >
      Iniciar sesión
    </Button>
    <div className="text-center text-xs text-slate-400 mt-2">
      ¿Necesitas ayuda? Contacta con <a href="mailto:info@smartup.lat" className="underline text-violet-400 hover:text-violet-300">info@smartup.lat</a>
    </div>
  </div>
); 