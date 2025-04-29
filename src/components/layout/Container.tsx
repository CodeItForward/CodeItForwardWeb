import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  as?: React.ElementType;
  padding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className,
  as: Component = 'div',
  padding = true,
  ...props
}) => {
  const sizeClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 md:px-8' : '';

  return (
    <Component
      className={cn('mx-auto w-full', sizeClasses[size], paddingClasses, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;