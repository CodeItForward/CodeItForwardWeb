import React from 'react';
import { cn } from '@/lib/utils';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { Button } from '../ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundImage?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaAction,
  backgroundImage,
  className,
  alignment = 'center',
  ...props
}) => {
  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  // Background style if image is provided
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
    
  // Hero background
  const backgroundClasses = backgroundImage
    ? 'bg-cover bg-center bg-no-repeat relative'
    : '';
    
  // Overlay for background images
  const overlay = backgroundImage 
    ? <div className="absolute inset-0 bg-dark-800 opacity-60" />
    : null;
    
  return (
    <Section 
      className={cn(
        'min-h-[90vh] flex items-center justify-center',
        backgroundClasses,
        backgroundImage ? 'text-white' : '',
        className
      )}
      style={backgroundStyle}
      background={backgroundImage ? 'transparent' : 'primary-gradient'}
      spacing="xl"
      {...props}
    >
      {overlay}
      
      <Container className="relative z-10">
        <div className={cn(
          'max-w-3xl mx-auto',
          alignment === 'left' ? 'ml-0' : '',
          alignment === 'right' ? 'mr-0' : '',
          alignmentClasses[alignment]
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight animate-fade-in">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            {subtitle}
          </p>
          
          <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              onClick={ctaAction}
              variant="default"
              className="font-semibold"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection