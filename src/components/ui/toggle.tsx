"use client";

import { ReactNode } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  ariaLabel?: string;
  className?: string;
}

export default function Toggle({
  checked,
  onChange,
  disabled = false,
  size = 'md',
  leftIcon,
  rightIcon,
  ariaLabel = 'Toggle',
  className = ''
}: ToggleProps) {
  const sizeClasses = {
    sm: 'w-10 h-6',
    md: 'w-14 h-8',
    lg: 'w-18 h-10'
  };

  const knobSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const iconSizeClasses = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  };

  const positionClasses = {
    sm: checked ? 'left-4' : 'left-1',
    md: checked ? 'left-7' : 'left-1',
    lg: checked ? 'left-9' : 'left-1'
  };

  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`
        relative ${sizeClasses[size]} 
        bg-secondary-light recessed rounded-full p-1 
        transition-colors smooth
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      aria-label={ariaLabel}
      role="switch"
      aria-checked={checked}
    >
      <div 
        className={`
          absolute top-1
          ${knobSizeClasses[size]} 
          ${positionClasses[size]}
          bg-foreground elevated rounded-full 
          transition-all smooth
          flex items-center justify-center
        `}
      >
        {checked && rightIcon && (
          <div className={`${iconSizeClasses[size]} flex items-center justify-center`}>
            {rightIcon}
          </div>
        )}
        {!checked && leftIcon && (
          <div className={`${iconSizeClasses[size]} flex items-center justify-center`}>
            {leftIcon}
          </div>
        )}
      </div>
    </button>
  );
}
