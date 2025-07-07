import React from 'react';
import { FcGoogle } from 'react-icons/fc';
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
    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
      <div className="flex-1 border-t border-slate-700" />
      <span className="mx-2 text-slate-400">o continúa con</span>
      <div className="flex-1 border-t border-slate-700" />
    </div>
    <Button
      type="button"
      variant="outline"
      className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 font-semibold shadow transition flex items-center justify-center gap-2 mb-2"
    >
      <FcGoogle className="w-5 h-5" /> Continuar con Google
    </Button>
    <div className="text-center text-xs text-slate-400 mt-2">
      ¿Necesitas ayuda? Contacta con <a href="mailto:info@smartup.lat" className="underline text-violet-400 hover:text-violet-300">info@smartup.lat</a>
    </div>
  </div>
); 