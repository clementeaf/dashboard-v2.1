import React from 'react';

export interface InputProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
  error,
  className = '',
}) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm text-slate-200 mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="bg-slate-700/60 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder:text-slate-400 transition"
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      data-testid={`${id}-input`}
    />
    {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
  </div>
); 