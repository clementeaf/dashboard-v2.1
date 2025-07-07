"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { navItems } from './sidebarNavItems';
import type { SidebarProps } from './Sidebar.types';

export const Sidebar: React.FC<SidebarProps> = ({ user, organization }) => {
  const pathname = usePathname();
  return (
    <aside className="w-64 text-white flex flex-col py-6 px-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center text-lg font-bold">
          {user?.name?.[0]?.toUpperCase() || 'C'}
        </div>
        <div>
          <div className="font-semibold text-sm truncate">{user?.name || 'Usuario'}</div>
          <div className="text-xs text-gray-300 truncate">{organization?.name || ''}</div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              prefetch={true}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ease-in-out transform hover:scale-105 ${isActive ? 'bg-violet-700/40 text-white shadow-lg' : 'hover:bg-[#232b43] focus:bg-[#232b43] text-slate-300 hover:text-white'}`}
              data-testid={`sidebar-link-${item.label.toLowerCase()}`}
            >
              <item.icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <button 
        className="mt-8 flex items-center gap-2 text-red-400 hover:text-red-500 text-sm font-medium transition-all duration-200 hover:bg-red-500/10 px-3 py-2 rounded-lg"
        onClick={() => {
          // Aquí puedes agregar la lógica de logout
          console.log('Logout clicked');
        }}
      >
        <LogOut className="w-5 h-5 transition-transform duration-200 hover:scale-110" /> 
        Cerrar Sesión
      </button>
    </aside>
  );
};

export default Sidebar; 