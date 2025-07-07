import React from 'react';

export interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  dataTestId?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = '',
  dataTestId,
}) => (
  <label className={`flex items-center gap-2 text-xs text-slate-400 ${className}`}>
    <input
      id={id}
      type="checkbox"
      className="accent-violet-600"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      data-testid={dataTestId}
    />
    {label}
  </label>
); 