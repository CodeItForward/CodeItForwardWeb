import React from 'react';
import { cn } from '@/lib/utils';
import Section from '../layout/Section';
import Grid from '../layout/Grid';
import { Card, CardContent, CardTitle, CardDescription } from '../layout/Card';

// Import the Cols type from Grid or redefine it here
type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColsResponsive = {
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  '2xl'?: Cols;
};

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureGridProps {
  id?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  cardVariant?: 'default' | 'elevated' | 'outlined' | 'filled';
  cardBackground?: 'default' | 'white';
  background?: 
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
}

export const FeatureGridSection: React.FC<FeatureGridProps> = ({
  title,
  subtitle,
  features,
  className,
  columns = 3,
  cardVariant = 'default',
  cardBackground = 'default',
  background = 'light',
  ...props
}) => {
  // Responsive columns configuration based on the selected column count
  const getResponsiveColumns = (cols: number): Cols | ColsResponsive => {
    switch(cols) {
      case 1: 
        return 1 as Cols;
      case 2:
        return {
          sm: 1 as Cols,
          md: 2 as Cols,
          lg: 2 as Cols
        };
      case 3:
        return {
          sm: 1 as Cols,
          md: 2 as Cols,
          lg: 3 as Cols
        };
      case 4:
        return {
          sm: 1 as Cols,
          md: 2 as Cols,
          lg: 4 as Cols
        };
      default:
        return 3 as Cols;
    }
  };

  // Determine text color based on background
  const isDarkBg = background === 'dark' || 
                  background === 'primary-gradient' || 
                  background === 'secondary-gradient' || 
                  background === 'accent-gradient' ||
                  background === 'charcoal';

  const textColorClass = isDarkBg ? 'text-white' : 'text-neutral-800';

  // Determine card background class
  const cardBgClass = cardBackground === 'white' ? 
    "bg-white/90" : 
    (isDarkBg ? "bg-dark-800/50" : "bg-white/90");

  return (
    <Section
      background={background}
      className={cn('relative overflow-hidden', className)}
      spacing="xl"
      {...props}
    >
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4 font-heading animate-fade-in", textColorClass)}>
            {title}
          </h2>

          {subtitle && (
            <p className={cn("text-xl max-w-3xl mx-auto opacity-80 animate-slide-up", textColorClass)}>
              {subtitle}
            </p>
          )}
        </div>

        <Grid cols={getResponsiveColumns(columns)} gap="lg">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant={cardVariant}
              hover={true}
              className={cn(
                "animate-slide-up backdrop-blur-sm",
                cardBgClass
              )}
            >
              <CardContent className="p-6 flex flex-col h-full" style={{ animationDelay: `${0.1 * index}s` }}>
                {feature.icon && (
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                )}

                <CardTitle className={cn("mb-2", cardBackground === 'white' ? "text-neutral-800" : (isDarkBg ? "text-white" : "text-neutral-800"))}>
                  {feature.title}
                </CardTitle>
                <CardDescription className={cn("text-base flex-grow", cardBackground === 'white' ? "text-neutral-600" : (isDarkBg ? "text-neutral-200" : "text-neutral-600"))}>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
};

export default FeatureGridSection;