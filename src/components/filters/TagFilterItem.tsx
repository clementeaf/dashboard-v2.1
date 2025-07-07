import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface TagFilterItemProps {
  label: string;
  icon?: LucideIcon;
  color?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const TagFilterItem: React.FC<TagFilterItemProps> = ({
  label,
  icon: Icon,
  color = '#2563eb',
  checked,
  onChange,
  disabled = false,
}) => (
  <label
    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition cursor-pointer select-none text-xs font-medium shadow-sm
      ${checked ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-white border-slate-200 text-slate-700'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      disabled={disabled}
      className="accent-blue-600 mr-1"
    />
    {Icon && <Icon className="w-4 h-4" />}
    <span>{label}</span>
  </label>
);

export default TagFilterItem; 