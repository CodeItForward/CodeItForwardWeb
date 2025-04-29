import './index.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TextSection from '@/components/sections/TextSection';
import FeatureGridSection from '@/components/sections/FeatureGridSection';
import ContactSection from '@/components/sections/ContactSection';

function App() {
  // Sample feature data for Changemakers Lab
  const changemakersFeatures = [
    {
      title: 'Creative Coders',
      description: 'Our flagship program teaching young students how to express themselves through code. Build games, animations, and interactive stories while learning core programming concepts.',
      icon: <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-lg flex items-center justify-center">CC</div>
    },
    {
      title: 'Changemakers Lab',
      description: 'An immersive program where students work on real-world projects that address community challenges. Develop technical skills while making a positive social impact.',
      icon: <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-lg flex items-center justify-center">CL</div>
    },
    {
      title: 'AI for Good',
      description: 'Learn about artificial intelligence and how it can be used to solve important problems. Explore machine learning, natural language processing, and responsible AI development.',
      icon: <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-lg flex items-center justify-center">AI</div>
    }
  ];

  // Sample feature data for Empowerment Lab
  const empowermentFeatures = [
    {
      title: 'AI Strategy Consulting',
      description: 'We help small businesses develop tailored AI strategies to enhance operations and customer experiences. Our consultations identify the most impactful opportunities for AI integration.',
      icon: <div className="w-12 h-12 bg-charcoal-700 text-white rounded-lg flex items-center justify-center">AS</div>
    },
    {
      title: 'Custom AI Solutions',
      description: 'Our team develops customized AI tools and applications for small businesses, designed to address specific challenges and opportunities in your business.',
      icon: <div className="w-12 h-12 bg-charcoal-700 text-white rounded-lg flex items-center justify-center">CS</div>
    },
    {
      title: 'AI Education & Training',
      description: 'We provide workshops and training programs to help your team understand AI concepts and applications relevant to your business needs.',
      icon: <div className="w-12 h-12 bg-charcoal-700 text-white rounded-lg flex items-center justify-center">ET</div>
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Header */}
      <Header transparent />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Empowering the Future Through AI"
          subtitle="Nurturing young innovators and enabling small businesses with cutting-edge AI solutions"
          ctaText="Get Started"
          backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
        />

        {/* About Section */}
        <TextSection
          id="about"
          title="Our Mission"
          content="Code It Forward bridges the gap between technology education and practical implementation. We empower youth with coding and AI skills while helping small businesses thrive in the digital economy. Our dual focus creates a unique ecosystem where education meets real-world application, fostering innovation and growth across generations."
          background="light"
        />

        {/* Changemakers Lab Section */}
        <FeatureGridSection
          id="changemakers-lab"
          title="Changemakers Lab"
          subtitle="Inspiring the next generation of tech innovators through hands-on learning"
          features={changemakersFeatures}
          background="primary-light"
          columns={3}
        />

        {/* Empowerment Lab Section */}
        <FeatureGridSection
          id="empowerment-lab"
          title="Empowerment Lab"
          subtitle="Transforming small businesses with practical AI solutions"
          features={empowermentFeatures}
          background="charcoal"
          cardBackground="white"
          columns={3}
        />

        {/* Contact Section */}
        <ContactSection
          id="contact"
          title="Get In Touch"
          subtitle="Have questions about our programs or services? Reach out to us!"
          background="light"
        />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;