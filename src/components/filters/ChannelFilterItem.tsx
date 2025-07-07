import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ChannelFilterItemProps {
  label: string;
  icon: LucideIcon;
  color: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  online?: boolean;
}

export const ChannelFilterItem: React.FC<ChannelFilterItemProps> = ({
  label,
  icon: Icon,
  color,
  checked,
  onChange,
  disabled = false,
  online = false,
}) => (
  <label
    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition cursor-pointer select-none text-sm font-medium shadow-sm
      ${checked ? color + ' bg-opacity-10 border-' + color + ' bg-' + color : 'bg-white border-slate-200'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    style={{ backgroundColor: checked ? color + '1A' : undefined }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      disabled={disabled}
      className="accent-violet-600 mr-1"
    />
    <Icon className={`w-4 h-4 ${checked ? '' : 'opacity-60'}`} />
    <span>{label}</span>
    {online !== undefined && (
      <span className={`ml-1 w-2 h-2 rounded-full ${online ? 'bg-green-400' : 'bg-gray-300'}`}></span>
    )}
  </label>
);

export default ChannelFilterItem; 