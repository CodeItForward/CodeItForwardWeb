import React from 'react';
import { cn } from '@/lib/utils';
import Section from '../layout/Section';

interface TextSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  content: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  background?: 'primary-gradient' | 'secondary-gradient' | 'accent-gradient' | 'primary-light' | 'secondary-light' | 'accent-light' | 'dark' | 'light' | 'transparent' | 'charcoal';
}

export const TextSection: React.FC<TextSectionProps> = ({
  title,
  subtitle,
  content,
  className,
  titleClassName,
  background = 'light',
  ...props
}) => {
  return (
    <Section
      background={background}
      className={className}
      {...props}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={cn(
          'text-3xl md:text-4xl font-bold mb-4 font-heading animate-fade-in',
          titleClassName
        )}>
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-xl mb-8 opacity-80 animate-slide-up">
            {subtitle}
          </p>
        )}
        
        <div className="prose prose-lg mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      </div>
    </Section>
  );
};

export default TextSection;