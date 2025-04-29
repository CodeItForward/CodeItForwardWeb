import React from 'react';
import { cn } from '@/lib/utils';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColsResponsive = {
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  '2xl'?: Cols;
};

interface GridProps {
  children: React.ReactNode;
  cols?: Cols | ColsResponsive;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 3,
  gap = 'md',
  className,
  ...props
}) => {
  // Gap classes
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  // Helper to convert cols to grid template classes
  const getColsClass = (cols: Cols) => {
    const colsMap: Record<Cols, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    };
    return colsMap[cols];
  };

  // Handle responsive cols
  let colClasses = '';
  if (typeof cols === 'number') {
    colClasses = getColsClass(cols);
  } else {
    // Default mobile is always 1 column
    colClasses = 'grid-cols-1';
    
    // Add responsive classes if specified
    if (cols.sm) colClasses += ` sm:${getColsClass(cols.sm)}`;
    if (cols.md) colClasses += ` md:${getColsClass(cols.md)}`;
    if (cols.lg) colClasses += ` lg:${getColsClass(cols.lg)}`;
    if (cols.xl) colClasses += ` xl:${getColsClass(cols.xl)}`;
    if (cols['2xl']) colClasses += ` 2xl:${getColsClass(cols['2xl'])}`;
  }

  return (
    <div
      className={cn('grid', colClasses, gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;