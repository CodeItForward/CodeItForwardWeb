import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import { Button } from '../ui/Button';

interface HeaderProps {
  className?: string;
  transparent?: boolean;
  logo?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  transparent = false,
  logo,
  ...props
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation items
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Changemakers Lab', href: '#changemakers-lab' },
    { label: 'Empowerment Lab', href: '#empowerment-lab' },
    { label: 'Contact', href: '#contact' },
  ];
  
  // Header styling based on scroll position and transparency setting
  const headerBg = !transparent || isScrolled
    ? 'bg-white shadow-sm'
    : 'bg-transparent';
    
  const textColor = !transparent || isScrolled
    ? 'text-neutral-800'
    : 'text-white';
    
  const transition = 'transition-all duration-300 ease-in-out';
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        headerBg,
        transition,
        className
      )}
      {...props}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className={cn('font-heading font-bold text-2xl', textColor, transition)}>
            {logo || 'Code It Forward'}
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'font-medium hover:text-primary-500',
                  textColor,
                  transition
                )}
              >
                {item.label}
              </a>
            ))}
            
            <Button variant="charcoal" size="sm">Get Started</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className={cn('md:hidden', textColor)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute w-full bg-white shadow-lg py-4',
          isMobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        <Container>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-neutral-800 hover:text-primary-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="charcoal" fullWidth>Get Started</Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Header