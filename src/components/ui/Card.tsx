import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
}) => {
  const baseClasses = 'rounded-2xl shadow-2xl bg-slate-800/80';
  
  const variantClasses = {
    default: '',
    elevated: 'shadow-2xl',
  };
  
  const paddingClasses = {
    sm: 'p-6',
    md: 'p-10',
    lg: 'p-16',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}; 