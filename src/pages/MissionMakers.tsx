import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClassDetailSection from '@/components/sections/ClassDetailSection';
import ChangemakersLabSrc from '@/assets/ChangemakersLab.png';

const MissionMakers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <h1 className="sr-only">Mission Makers Program</h1>
        <p className="sr-only">Make a real-world impact through technology. Join our immersive program where students tackle community challenges with innovative solutions.</p>
        <ClassDetailSection
          title={
            <div className="h-full w-full flex items-center justify-center">
              <img 
                src={ChangemakersLabSrc} 
                alt="Mission Makers" 
                className="h-[300px] w-auto object-contain"
              />
              <span className="sr-only">Mission Makers</span>
            </div>
          }
          description="Join our immersive program where students work on real-world projects that address community challenges. Through hands-on experience with cutting-edge technology and collaboration with local organizations, participants develop technical skills while making a meaningful social impact."
          learningPoints={[
            "Project-based learning with real community impact",
            "Advanced programming and technology skills",
            "Community engagement and leadership",
            "Design thinking and problem-solving",
            "Team collaboration and project management",
            "Social innovation and entrepreneurship",
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

export default MissionMakers; 