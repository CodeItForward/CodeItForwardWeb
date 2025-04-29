// Theme configuration for the Code It Forward design system
// This file contains the central theme values that will be used across the application

export const theme = {
  // Color Palette
  colors: {
    // Primary colors - vibrant blue representing technology and innovation
    primary: {
      50: '#e6f1ff',
      100: '#cce3ff',
      200: '#99c8ff',
      300: '#66adff',
      400: '#3392ff',
      500: '#0077ff', // Primary base color
      600: '#005fcc',
      700: '#004799',
      800: '#002f66',
      900: '#001833',
    },
    // Secondary colors - teal representing creativity and growth
    secondary: {
      50: '#e6faf7',
      100: '#ccf5ef',
      200: '#99ebdf',
      300: '#66e0cf',
      400: '#33d6bf',
      500: '#00ccaf', // Secondary base color
      600: '#00a38c',
      700: '#007a69',
      800: '#005246',
      900: '#002923',
    },
    // Accent colors - warm orange representing energy and enthusiasm
    accent: {
      50: '#fff1e6',
      100: '#ffe3cc',
      200: '#ffc799',
      300: '#ffab66',
      400: '#ff8f33',
      500: '#ff7300', // Accent base color
      600: '#cc5c00',
      700: '#994500',
      800: '#662e00',
      900: '#331700',
    },
    // Dark blue for important elements and contrast
    dark: {
      50: '#e6eaf0',
      100: '#ccd5e0',
      200: '#99abc2',
      300: '#6682a3',
      400: '#335885',
      500: '#002e66',
      600: '#002551',
      700: '#001c3d',
      800: '#001228',
      900: '#000914',
    },
    // Neutral gray tones for text and backgrounds
    neutral: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    // Success, warning, and error states
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  
  // Typography
  fonts: {
    heading: 'Quicksand, system-ui, sans-serif', // Modern, slightly rounded font for headings
    body: 'Inter, sans-serif', // Clean, highly readable font for body text
  },
  
  // Font sizes with a clear hierarchy
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '4rem',    // 64px
  },
  
  // Spacing system based on 8px increments
  spacing: {
    0: '0',
    1: '0.25rem',     // 4px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    32: '8rem',       // 128px
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    default: '0.5rem', // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',
  },
  
  // Box shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 6px 10px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Containers and layout
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Transition speeds
  transitions: {
    fast: '150ms',
    default: '300ms',
    slow: '500ms',
  },
};

// Export specific theme elements for easy use in components
export const colors = theme.colors;
export const fonts = theme.fonts;
export const fontSizes = theme.fontSizes;
export const spacing = theme.spacing;
export const borderRadius = theme.borderRadius;
export const boxShadow = theme.boxShadow;
export const containers = theme.containers;
export const transitions = theme.transitions;