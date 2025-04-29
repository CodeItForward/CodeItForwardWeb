import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = false,
  onClick,
  ...props
}) => {
  // Base card styles
  const baseStyles = 'rounded-lg overflow-hidden';
  
  // Variant styles
  const variantStyles = {
    default: 'bg-white shadow',
    elevated: 'bg-white shadow-lg',
    outlined: 'border border-neutral-200 bg-white',
    filled: 'bg-neutral-50',
  };
  
  // Hover styles
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
    : '';
  
  // Interactive styles
  const interactiveStyles = onClick
    ? 'cursor-pointer'
    : '';
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        interactiveStyles,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('p-6 pb-3', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn('text-xl font-semibold text-neutral-800 font-heading', className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn('text-sm text-neutral-600 mt-1', className)}
      {...props}
    >
      {children}
    </p>
  );
};

export const CardContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('p-6 pt-0', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('p-6 pt-0 flex items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;