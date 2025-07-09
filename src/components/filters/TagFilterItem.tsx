import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface TagFilterItemProps {
  label: string;
  icon?: LucideIcon;
  color?: string; // tailwind color base, ej: 'blue', 'violet'
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const TagFilterItem: React.FC<TagFilterItemProps> = ({
  label,
  icon: Icon,
  color = 'blue',
  checked,
  onChange,
  disabled = false,
}) => (
  <label
    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold select-none transition-all duration-150
      ${checked ? `bg-${color}-50 border-${color}-300 text-${color}-700` : 'bg-gray-100 border-gray-200 text-gray-400'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow hover:brightness-95'} min-w-[120px]`}
    tabIndex={0}
    aria-checked={checked}
    style={{ boxShadow: checked ? '0 2px 8px 0 rgba(37, 99, 235, 0.10)' : undefined }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      disabled={disabled}
      className="hidden"
    />
    {Icon && <Icon className={`w-5 h-5 ${checked ? `text-${color}-600` : 'text-gray-400'}`} />}
    <span className="flex-1 truncate">{label}</span>
  </label>
);

export default TagFilterItem; 