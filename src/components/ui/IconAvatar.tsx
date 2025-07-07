import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface IconAvatarProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const IconAvatar: React.FC<IconAvatarProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'p-2 w-8 h-8',
    md: 'p-4 w-16 h-16',
    lg: 'p-6 w-24 h-24',
  };
  
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  
  const variantClasses = {
    primary: 'bg-violet-700 text-violet-200',
    secondary: 'bg-slate-700 text-slate-200',
  };

  const classes = `rounded-full shadow-lg ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      <Icon className={iconSizes[size]} />
    </div>
  );
}; 