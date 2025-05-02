import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { Button } from '../ui/button';
import { Card, CardContent } from '../layout/Card';

interface ClassDetailProps {
  id?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  learningPoints: string[];
  imageUrl: string;
  ageRange: string;
  sessionDates: string;
  cost: string;
  className?: string;
}

export const ClassDetailSection: React.FC<ClassDetailProps> = ({
  title,
  description,
  learningPoints,
  imageUrl,
  ageRange,
  sessionDates,
  cost,
  className,
  ...props
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <>
      {/* Hero Banner */}
      <Section
        background="primary-gradient"
        className="flex items-center p-0 h-[300px]"
        {...props}
      >
        <Container className="p-0 h-full w-full">
          <div className="flex items-center justify-center h-full w-full">
            {title}
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="light" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Course Info */}
            <div className="space-y-8">
              {/* Description */}
              <div className="prose max-w-none">
                <p className="text-lg text-neutral-700">{description}</p>
              </div>

              {/* Learning Points */}
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4">What You'll Learn</h2>
                <ul className="space-y-3">
                  {learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-neutral-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title as string}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Column - Registration */}
            <div>
              {/* Course Details Card */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4">Course Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-medium text-neutral-600">Age Range</dt>
                      <dd className="text-lg">{ageRange}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-neutral-600">Session Dates</dt>
                      <dd className="text-lg">{sessionDates}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-neutral-600">Cost</dt>
                      <dd className="text-2xl font-bold text-primary-600">{cost}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              {/* Registration Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-6">Register Now</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
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
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="gradeLevel" className="block text-sm font-medium mb-1">
                        Grade Level
                      </label>
                      <select
                        id="gradeLevel"
                        name="gradeLevel"
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                      >
                        <option value="">Select Grade Level</option>
                        <option value="3">3rd Grade</option>
                        <option value="4">4th Grade</option>
                        <option value="5">5th Grade</option>
                        <option value="6">6th Grade</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Register Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ClassDetailSection;