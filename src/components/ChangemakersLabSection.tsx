import React from 'react';

const ChangemakersLabSection: React.FC = () => {
  return (
    <section id="changemakers-lab" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Changemakers Lab (Youth Programs)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Creative Coders Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Coders</h3>
            <p className="text-gray-700 mb-6 flex-grow">
              Intro to Scratch, game design, creative coding
            </p>
            <a 
              href="#creative-coders" 
              className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#creative-coders')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </a>
          </div>
          
          {/* Changemakers Lab Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Changemakers Lab</h3>
            <p className="text-gray-700 mb-6 flex-grow">
              Entrepreneurship and digital creation
            </p>
            <a 
              href="#changemakers-details" 
              className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#changemakers-details')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </a>
          </div>
          
          {/* AI for Good Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI for Good</h3>
            <p className="text-gray-700 mb-6 flex-grow">
              Low/no-code AI projects for social good
            </p>
            <a 
              href="#ai-for-good" 
              className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#ai-for-good')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangemakersLabSection; 