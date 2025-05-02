import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClassDetailSection from '@/components/sections/ClassDetailSection';
import ChangemakersLabSrc from '@/assets/ChangemakersLab.png';

const AIForGood = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <h1 className="sr-only">AI For Good Program</h1>
        <p className="sr-only">A collaborative experience where students use AI tools to build projects that solve problems or share powerful messages.</p>
        <ClassDetailSection
          title={
            <div className="h-full w-full flex items-center justify-center">
              <img 
                src={ChangemakersLabSrc} 
                alt="AI For Good" 
                className="h-[300px] w-auto object-contain"
              />
              <span className="sr-only">AI For Good</span>
            </div>
          }
          description={
            <>
              <h2 className="text-3xl font-heading font-bold mb-4">AI For Good</h2>
              <p className="mb-4">Designed for ages 10–13, AI for Good is a collaborative experience where students use tools like ChatGPT, Bolt, and Midjourney to build a group project that solves a problem or shares a powerful message. They'll work together to brainstorm, whiteboard, design, and present their ideas like a real product team.</p>
              <p className="mb-4">What makes it different:</p>
              <p className="mb-4">Students are mentored by a Global IT Director with decades of experience leading enterprise tech projects. We blend creative AI exploration with real-world teamwork and software design practices that give students a head start on future careers.</p>
            </>
          }
          learningPoints={[
            "Learn how AI tools can enhance creativity and social impact",
            "Create team assets using Bolt and Midjourney",
            "Use ChatGPT for research, planning, and content",
            "Develop project management and whiteboarding skills",
            "Understand group roles and agile-style teamwork",
            "Present a final pitch and reflect on the full SDLC process"
          ]}
          imageUrl="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          ageRange="10-13 years old"
          sessionDates="July 1 - August 30, 2024"
          cost="$200"
        />
      </main>
      <Footer />
    </div>
  );
};

export default AIForGood; 