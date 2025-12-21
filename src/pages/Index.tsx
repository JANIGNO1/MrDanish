import { useEffect, useState } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
