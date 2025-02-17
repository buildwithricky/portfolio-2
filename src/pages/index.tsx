import Navbar from '../components/MobileNav';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';

export default function Home() {
  return (
    <div className='border border-r-red-600'>
      <Navbar />
      <HeroSection/>
      <SkillsSection/>
    </div>
  );
}
