import React from 'react';
import { Search } from 'lucide-react';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  dataTestId?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Buscar...',
  className = '',
  dataTestId,
}) => (
  <div className={`relative ${className}`}>
    <input
      type="text"
      className="bg-slate-700/60 text-white rounded-lg px-4 py-2 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder:text-slate-400 transition"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-testid={dataTestId}
    />
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
  </div>
); 