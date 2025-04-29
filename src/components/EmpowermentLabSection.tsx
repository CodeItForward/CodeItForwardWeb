import React from 'react';
import CheckIcon from './CheckIcon';

const EmpowermentLabSection: React.FC = () => {
  return (
    <section id="empowerment-lab" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Empowerment Lab (Consulting for Small Business)
        </h2>
        
        <div className="bg-gray-50 rounded-xl shadow-md p-8 mb-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckIcon />
              <span className="text-lg text-gray-700">AI Readiness Assessments</span>
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <span className="text-lg text-gray-700">Business Process Automation</span>
            </li>
            <li className="flex items-start">
              <CheckIcon />
              <span className="text-lg text-gray-700">AI Literacy Training</span>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule a Free Consult
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentLabSection; 