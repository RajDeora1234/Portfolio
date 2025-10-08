import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
