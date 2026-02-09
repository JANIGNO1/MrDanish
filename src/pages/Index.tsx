import { useEffect } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import ClientLogosMarquee from '@/components/portfolio/ClientLogosMarquee';
import AuthoritySection from '@/components/portfolio/AuthoritySection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import RankingCTA from '@/components/portfolio/RankingCTA';
import LiveAppsSection from '@/components/portfolio/LiveAppsSection';
import WhatsAppFloat from '@/components/portfolio/WhatsAppFloat';
const Index = () => {
  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogosMarquee />
        <AuthoritySection />
        <RankingCTA />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <LiveAppsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
