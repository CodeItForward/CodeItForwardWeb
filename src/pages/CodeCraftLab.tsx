import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClassDetailSection from '@/components/sections/ClassDetailSection';
import ChangemakersLabSrc from '@/assets/ChangemakersLab.png';

const CodeCraftLab = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <h1 className="sr-only">CodeCraft Lab Program</h1>
        <p className="sr-only">An immersive program where students work on real-world projects that address community challenges while developing technical skills.</p>
        <ClassDetailSection
          title={
            <div className="h-full w-full flex items-center justify-center">
              <img 
                src={ChangemakersLabSrc} 
                alt="CodeCraft Lab" 
                className="h-[300px] w-auto object-contain"
              />
              <span className="sr-only">CodeCraft Lab</span>
            </div>
          }
          description={
            <>
              <h2 className="text-3xl font-heading font-bold mb-4">CodeCraft Lab</h2>
              <p className="mb-4">Build solutions that make a difference.</p>
              <p className="mb-4">In this hands-on program, students tackle real community challenges through technology. Working in teams, participants will identify problems, design solutions, and implement projects that have a meaningful impact on their communities.</p>
              <p>Through this process, students develop both technical skills and a deeper understanding of how technology can be used to create positive change. The program culminates in a showcase where teams present their solutions to community stakeholders.</p>
            </>
          }
          learningPoints={[
            "Community-focused project development",
            "Advanced programming and problem-solving",
            "User-centered design principles",
            "Team collaboration and leadership",
            "Project planning and execution",
            "Public speaking and presentation skills",
          ]}
          imageUrl="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          ageRange="14-18 years old"
          sessionDates="July 1 - August 30, 2024"
          cost="$200"
        />
      </main>
      <Footer />
    </div>
  );
};

export default CodeCraftLab; 