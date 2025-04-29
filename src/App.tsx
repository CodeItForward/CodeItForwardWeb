import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ChangemakersLabSection from './components/ChangemakersLabSection';
import EmpowermentLabSection from './components/EmpowermentLabSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Fixed header area - primary */}
      <div className="fixed top-0 left-0 right-0 h-[60px] bg-gradient-to-r from-blue-600 to-indigo-700 z-[9999]"></div>
      
      {/* Backup header area with solid color */}
      <div className="fixed top-0 left-0 right-0 h-[60px] bg-blue-700 z-[9998]"></div>
      
      {/* Fixed white separator to prevent text showing through */}
      <div className="fixed top-[60px] left-0 right-0 h-[10px] bg-white z-[9998]"></div>
      
      <Header />
      
      {/* Main content with clipping to prevent content from appearing in the top area */}
      <div 
        className="pt-[70px] bg-gray-50 relative z-[10]"
        style={{
          clipPath: "polygon(0% 70px, 100% 70px, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0% 70px, 100% 70px, 100% 100%, 0% 100%)"
        }}
      >
        <HeroSection />
        <AboutSection />
        <ChangemakersLabSection />
        <EmpowermentLabSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
