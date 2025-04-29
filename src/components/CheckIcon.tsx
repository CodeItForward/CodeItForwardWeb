import React from 'react';

interface CheckIconProps {
  className?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({ className = '' }) => {
  return (
    <svg 
      className={`h-4 w-4 text-blue-600 mr-3 flex-shrink-0 ${className}`} 
      fill="none" 
      viewBox="0 0 20 20" 
      stroke="currentColor"
      style={{ maxWidth: '16px', maxHeight: '16px' }}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M5 13l4 4L19 7" 
      />
    </svg>
  );
};

export default CheckIcon; 