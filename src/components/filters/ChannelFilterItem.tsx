import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ChannelFilterItemProps {
  label: string;
  icon: LucideIcon;
  color: string; // tailwind color base, ej: 'violet', 'blue', 'gray'
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  online?: boolean;
  tooltip?: string;
}

export const ChannelFilterItem: React.FC<ChannelFilterItemProps> = ({
  label,
  icon: Icon,
  color,
  checked,
  onChange,
  disabled = false,
  online = false,
  tooltip,
}) => {
  const baseColor = color || 'violet';
  return (
    <div className="relative group">
      <label
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold select-none transition-all duration-150
          ${checked ? `bg-${baseColor}-500 border-${baseColor}-500 text-white shadow-md` : 'bg-gray-100 border-gray-200 text-gray-400'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg hover:brightness-95'}
          min-w-[100px]`}
        tabIndex={0}
        aria-checked={checked}
        title={tooltip}
        style={{ boxShadow: checked ? '0 2px 8px 0 rgba(80, 56, 255, 0.12)' : undefined }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          disabled={disabled}
          className="hidden"
        />
        <Icon className={`w-5 h-5 ${checked ? 'text-white' : 'text-gray-400'}`} />
        <span className="flex-1 truncate">{label}</span>
        {typeof online === 'boolean' && (
          <span className={`ml-2 w-2 h-2 rounded-full ${online ? 'bg-green-400' : 'bg-gray-300'}`}></span>
        )}
      </label>
      {tooltip && (
        <span className="absolute z-20 left-1/2 -translate-x-1/2 -top-9 px-3 py-1 rounded bg-slate-900 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap shadow-lg font-normal">
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default ChannelFilterItem; 