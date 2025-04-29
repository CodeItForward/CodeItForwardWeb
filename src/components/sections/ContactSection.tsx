import React, { useState } from 'react';
import Section from '../layout/Section';
import { Button } from '../ui/Button';

interface ContactSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  background?: 'primary-gradient' | 'secondary-gradient' | 'accent-gradient' | 'primary-light' | 'secondary-light' | 'accent-light' | 'dark' | 'light' | 'transparent' | 'charcoal';
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  className,
  background = 'primary-light',
  ...props
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message (in a real app, this would be a toast or other UI feedback)
    alert('Thanks for your message! We will get back to you soon.');
  };

  return (
    <Section
      background={background}
      className={className}
      spacing="xl"
      {...props}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading animate-fade-in">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-xl opacity-80 animate-slide-up">
              {subtitle}
            </p>
          )}
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="space-y-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
              placeholder="What would you like to know?"
            />
          </div>
          
          <div className="text-center pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;