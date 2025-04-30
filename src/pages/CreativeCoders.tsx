import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClassDetailSection from '@/components/sections/ClassDetailSection';
import CreativeCodersSrc from '@/assets/Creative-Coders.png';
import HappyCodingSrc from '@/assets/happy-coding.png';

const CreativeCoders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <ClassDetailSection
          title={
            <div className="h-full w-full flex items-center justify-center">
              <img 
                src={CreativeCodersSrc} 
                alt="Creative Coders" 
                className="h-[300px] w-auto object-contain"
              />
              <span className="sr-only">Creative Coders</span>
            </div>
          }
          description="Unleash your creativity through code! In this engaging program, students learn fundamental programming concepts while building their own interactive games, animations, and digital stories. Using beginner-friendly tools and languages, participants will develop both technical skills and creative problem-solving abilities."
          learningPoints={[
            "Basic programming concepts using Python and Scratch",
            "Game development fundamentals",
            "Interactive storytelling through code",
            "Animation and graphics programming",
            "Problem-solving and computational thinking",
            "Project planning and development",
          ]}
          imageUrl={HappyCodingSrc}
          ageRange="11-14 years old"
          sessionDates="June 15 - August 15, 2024"
          cost="$499"
        />
      </main>
      <Footer />
    </div>
  );
};

export default CreativeCoders;