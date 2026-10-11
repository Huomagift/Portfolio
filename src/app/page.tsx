import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import About from '@/components/About';
import SkillsSection from '@/components/SkillsSection';
import ContactFooter from '@/components/ContactFooter';
import { DarkToLightDivider, LightToDarkDivider } from '@/components/ui/SectionDividers';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink selection:bg-coral selection:text-white">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Hero Section*/}
      <Hero />

      {/* Selected Projects Showcase*/}
      <ProjectsShowcase />

      {/* Transition: Dark to Light */}
      <DarkToLightDivider />

      {/* Light Sections: About and Skills */}
      <div className="relative bg-bone">
        <About />
        <SkillsSection />
      </div>

      {/* Transition: Light to Dark */}
      <LightToDarkDivider />

      {/* Contact & Footer (Dark, huomagift@gmail.com, Zero Gradients) */}
      <ContactFooter />
    </main>
  );
}
