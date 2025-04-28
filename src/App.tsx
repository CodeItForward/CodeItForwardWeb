import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-16">
        {/* Home Section */}
        <section className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Code It Forward
              </h1>
              <p className="text-xl text-gray-600">
                Empowering the next generation of tech leaders
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Code It Forward is dedicated to empowering underrepresented communities in technology.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to create pathways for diverse talent to enter and thrive in the tech industry.
              </p>
              <p className="text-lg text-gray-700">
                Through our programs and initiatives, we're building a more inclusive future for technology.
              </p>
            </div>
          </div>
        </section>

        {/* Changemakers Lab Section */}
        <section id="changemakers-lab" className="min-h-screen flex items-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changemakers Lab</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                The Changemakers Lab is our flagship program for aspiring tech leaders.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Participants work on real-world projects while developing leadership skills.
              </p>
              <p className="text-lg text-gray-700">
                Join our next cohort and become part of a community of innovators.
              </p>
            </div>
          </div>
        </section>

        {/* Empowerment Lab Section */}
        <section id="empowerment-lab" className="min-h-screen flex items-center bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowerment Lab</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                The Empowerment Lab focuses on skill development and career advancement.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our curriculum is designed to prepare you for success in the tech industry.
              </p>
              <p className="text-lg text-gray-700">
                Take the next step in your tech journey with our supportive community.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Have questions about our programs? We'd love to hear from you.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Email: info@codeitforward.org
              </p>
              <p className="text-lg text-gray-700">
                Follow us on social media for updates and opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
