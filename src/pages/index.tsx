import About from '@/components/About';
import Navbar from '../components/MobileNav';
import ExperienceSection from './ExperienceSection';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import Projects from '@/components/Projects';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function Home() {
  return (
    <div className='border border-r-red-600'>
      {/* <Navbar /> */}
      <HeroSection/>
      <SkillsSection/>
      <ExperienceSection />
      <About/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
