import React from 'react';
import { User as UserIcon } from 'lucide-react';
import { WelcomeHeaderProps } from './type';

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ name }) => (
  <div className="flex flex-col items-center mb-8 mt-2 w-full">
    <div className="bg-gradient-to-br from-violet-600 to-violet-400 rounded-full shadow-lg mb-6 flex items-center justify-center w-20 h-20">
      <UserIcon className="text-white w-14 h-14" />
    </div>
    <h1 className="text-3xl font-extrabold text-center text-white mb-2 tracking-tight">¡Hola {name}!</h1>
    <p className="text-base text-slate-300 text-center mb-8">Selecciona tu organización para continuar</p>
  </div>
); 