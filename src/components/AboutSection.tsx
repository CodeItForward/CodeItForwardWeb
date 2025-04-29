import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative z-20">
      <div className="absolute inset-0 bg-white"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About Code It Forward
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We equip youth and small businesses with the tools to thrive in an AI-driven world—through hands-on coding, AI workshops, and practical automation solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutSection; 