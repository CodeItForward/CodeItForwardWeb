import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

type BackgroundType = 
  | 'primary-gradient'
  | 'secondary-gradient'
  | 'accent-gradient'
  | 'primary-light'
  | 'secondary-light'
  | 'accent-light'
  | 'dark'
  | 'light'
  | 'transparent'
  | 'charcoal';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  background?: BackgroundType;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  containerClass?: string;
  withContainer?: boolean;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  style,
  background = 'light',
  containerSize = 'xl',
  containerClass,
  withContainer = true,
  spacing = 'lg',
  ...props
}) => {
  const backgroundClasses: Record<BackgroundType, string> = {
    'primary-gradient': 'bg-gradient-to-br from-primary-400 to-primary-600 text-white',
    'secondary-gradient': 'bg-gradient-to-br from-secondary-400 to-secondary-600 text-white',
    'accent-gradient': 'bg-gradient-to-br from-accent-400 to-accent-600 text-white',
    'primary-light': 'bg-primary-50 text-neutral-800',
    'secondary-light': 'bg-secondary-50 text-neutral-800',
    'accent-light': 'bg-accent-50 text-neutral-800',
    'dark': 'bg-dark-800 text-white',
    'light': 'bg-white text-neutral-800',
    'transparent': 'bg-transparent',
    'charcoal': 'bg-charcoal text-white',
  };

  const spacingClasses: Record<NonNullable<SectionProps['spacing']>, string> = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
    '2xl': 'py-32',
  };

  const sectionContent = withContainer ? (
    <Container size={containerSize} className={containerClass}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
      style={style}
      {...props}
    >
      {sectionContent}
    </section>
  );
};



export default Section;
