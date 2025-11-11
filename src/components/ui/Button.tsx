'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  size = 'md',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center flex-col gap-[10px] rounded-[50px] transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed border border-[rgba(255,255,255,0.5)] bg-transparent text-white hover:border-transparent hover:text-white hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] hover:bg-[#b89d7e]';

  const sizeStyles: Record<string, {
    paddingY: string;
    paddingX: string;
    fontSize: string;
    width: string;
    height: string;
    fontWeight?: string;
    letterSpacing?: string;
  }> = {
    sm: {
      paddingY: 'clamp(10px, 0.97vw, 14px)',
      paddingX: 'clamp(20px, 2.78vw, 40px)',
      fontSize: 'clamp(12px, 1.11vw, 16px)',
      width: 'auto',
      height: 'auto',
    },
    md: {
      paddingY: 'clamp(12px, 1.25vw, 18px)',
      paddingX: 'clamp(24px, 3.47vw, 50px)',
      fontSize: 'clamp(14px, 1.39vw, 20px)',
      width: 'auto',
      height: 'auto',
    },
    lg: {
      paddingY: 'clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px)',
      paddingX: 'clamp(28px, calc(28px + (45 - 28) * ((100vw - 1024px) / (1440 - 1024))), 45px)',
      fontSize: 'clamp(15px, calc(15px + (20 - 15) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
      fontWeight: '400',
      letterSpacing: '-0.02em',
      width: 'clamp(220px, calc(220px + (354 - 220) * ((100vw - 1024px) / (1440 - 1024))), 354px)',
      height: 'clamp(50px, calc(50px + (55 - 50) * ((100vw - 1024px) / (1440 - 1024))), 55px)',
    }
  };

  const currentSize = sizeStyles[size];

  return (
    <button
      className={cn(baseClasses, className)}
      style={{
        paddingTop: currentSize.paddingY,
        paddingBottom: currentSize.paddingY,
        paddingLeft: currentSize.paddingX,
        paddingRight: currentSize.paddingX,
        fontSize: currentSize.fontSize,
        fontWeight: currentSize.fontWeight || 'normal',
        letterSpacing: currentSize.letterSpacing || 'normal',
        width: currentSize.width !== 'auto' ? currentSize.width : undefined,
        height: currentSize.height !== 'auto' ? currentSize.height : undefined,
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}