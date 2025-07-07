import React from 'react';
import { User as UserIcon } from 'lucide-react';

interface DashboardWelcomeProps {
  userName: string;
  organizationName: string;
}

export const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ userName, organizationName }) => (
  <div className="flex flex-col items-center w-full mb-8">
    <div className="bg-gradient-to-br from-violet-600 to-violet-400 rounded-full shadow-lg mb-6 flex items-center justify-center w-20 h-20">
      <UserIcon className="text-white w-14 h-14" />
    </div>
    <h1 className="text-3xl font-extrabold text-center text-slate-900 mb-2 tracking-tight">
      ¡Hola {userName}!
    </h1>
    <p className="text-base text-slate-600 text-center mb-4">
      Bienvenido al panel de administración de SmartUp
    </p>
    <div className="flex flex-col items-center mb-6">
      <span className="text-xs font-semibold text-violet-700 mb-1 uppercase tracking-widest">Organización actual</span>
      <span className="flex items-center gap-2 px-4 py-1 rounded-full bg-violet-100 text-violet-700 font-bold text-sm">
        <UserIcon className="w-4 h-4" /> {organizationName}
      </span>
    </div>
  </div>
);

export default DashboardWelcome; 