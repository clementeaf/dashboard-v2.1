import React from 'react';
import { LucideIcon, MessageCircle, BarChart2, Bot } from 'lucide-react';

export interface QuickAccessItem {
  label: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  color?: string;
}

interface DashboardQuickAccessProps {
  items: QuickAccessItem[];
}

export const DashboardQuickAccess: React.FC<DashboardQuickAccessProps> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
    {items.map((item, idx) => (
      <button
        key={item.label}
        onClick={item.onClick}
        className={`flex flex-col items-start p-6 rounded-2xl shadow bg-white hover:bg-violet-50 transition group border border-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-violet-400 ${item.color || ''}`}
        type="button"
      >
        <item.icon className="w-7 h-7 mb-3 text-violet-600 group-hover:scale-110 transition-transform" />
        <span className="font-bold text-lg text-slate-900 mb-1">{item.label}</span>
        <span className="text-sm text-slate-500">{item.description}</span>
      </button>
    ))}
  </div>
);

export default DashboardQuickAccess; 