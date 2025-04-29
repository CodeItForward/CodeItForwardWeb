import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface FooterProps {
  className?: string;
  logo?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  className,
  logo,
  ...props
}) => {
  const currentYear = new Date().getFullYear();
  
  // Footer navigation items
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Changemakers Lab', href: '#changemakers-lab' },
    { label: 'Empowerment Lab', href: '#empowerment-lab' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy-policy' },
    { label: 'Terms of Service', href: '#terms-of-service' },
  ];
  
  return (
    <footer
      className={cn(
        'bg-charcoal text-white pt-16 pb-8',
        className
      )}
      {...props}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Mission */}
          <div>
            <div className="font-heading font-bold text-2xl mb-4">
              {logo || 'Code It Forward'}
            </div>
            <p className="text-neutral-300 mb-6">
              Empowering young minds through coding and AI education to build a 
              brighter, more equitable future.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-charcoal-600 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>© {currentYear} Code It Forward. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;