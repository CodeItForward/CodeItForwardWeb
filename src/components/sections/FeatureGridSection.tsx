import React from 'react';
import { cn } from '@/lib/utils';
import Section from '../layout/Section';
import Grid from '../layout/Grid';
import { Card, CardContent, CardTitle, CardDescription } from '../layout/Card';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  cardVariant?: 'default' | 'elevated' | 'outlined' | 'filled';
  background?: 
    | 'primary-gradient'
    | 'secondary-gradient'
    | 'accent-gradient'
    | 'primary-light'
    | 'secondary-light'
    | 'accent-light'
    | 'dark'
    | 'light'
    | 'transparent';
}

export const FeatureGridSection: React.FC<FeatureGridProps> = ({
  title,
  subtitle,
  features,
  className,
  columns = 3,
  cardVariant = 'default',
  background = 'light',
  ...props
}) => {
  // Responsive columns configuration
  const responsiveColumns = {
    1: { sm: 1, md: 1, lg: 1 },
    2: { sm: 1, md: 2, lg: 2 },
    3: { sm: 1, md: 2, lg: 3 },
    4: { sm: 1, md: 2, lg: 4 },
  };

  // Determine if we should show decorative gradients
  const showGradients = background === 'primary-gradient' || background === 'secondary-gradient' || background === 'accent-gradient';

  return (
    <Section
      background={background}
      className={cn('relative overflow-hidden', className)}
      spacing="xl"
      {...props}
    >
      {/* Optional background decoration */}
      {showGradients && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-100 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary-100 to-transparent" />
        </div>
      )}

      {/* Content */}
      
    <div className="bg-red-500 text-white p-4">Tailwind is working</div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading animate-fade-in">
            {title}
          </h2>

          {subtitle && (
            <p className="text-xl max-w-3xl mx-auto opacity-80 animate-slide-up">
              {subtitle}
            </p>
          )}
        </div>

        <Grid cols={responsiveColumns[columns]} gap="lg">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant={cardVariant}
              hover={true}
              className="animate-slide-up backdrop-blur-sm bg-white/90"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {feature.icon && (
                  <div className="mb-4 text-primary-500">
                    {feature.icon}
                  </div>
                )}

                <CardTitle className="mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base flex-grow">
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
