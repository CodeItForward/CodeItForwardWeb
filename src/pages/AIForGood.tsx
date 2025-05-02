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
        <p className="sr-only">Learn to create meaningful projects using AI and modern design tools while developing real-world software development skills.</p>
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
              <p className="mb-4">Create something that matters—together.</p>
              <p className="mb-4">In this collaborative class, students use AI and design tools like Bolt, Midjourney, and ChatGPT to build a group project with a purpose. Whether it's a website, app concept, or business idea, the class will work as a team to design, plan, and present their project.</p>
              <p>We'll explore real-world skills like whiteboarding, source control, and project management through the lens of the software development life cycle (SDLC). The class ends with a group pitch—just like a startup.</p>
            </>
          }
          learningPoints={[
            "AI tools and responsible development",
            "Collaborative project planning",
            "Design thinking and prototyping",
            "Software development lifecycle",
            "Project management fundamentals",
            "Presentation and pitch skills",
          ]}
          imageUrl="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          ageRange="14-18 years old"
          sessionDates="July 1 - August 30, 2024"
          cost="$699"
        />
      </main>
      <Footer />
    </div>
  );
};

export default AIForGood; 