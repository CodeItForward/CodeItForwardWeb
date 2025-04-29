import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Empowering the Next Generation of Innovators
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Hands-on AI, Coding, and Automation Programs
        </p>
      </div>
      
      {/* Button container */}
      <div className="absolute bottom-0 left-0 right-0 w-full py-6 text-center z-10">
        <a 
          href="#about" 
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Programs
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 