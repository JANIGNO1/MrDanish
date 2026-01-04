import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import logo from '@/assets/logo.png';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={logo}
            alt="MR DANISH Logo"
            className="w-12 h-12 rounded-xl object-cover"
            animate={{ 
              boxShadow: [
                '0 0 10px hsl(262 83% 58% / 0.3)',
                '0 0 20px hsl(262 83% 58% / 0.5)',
                '0 0 10px hsl(262 83% 58% / 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="hidden sm:block">
            <span className="text-xl font-display font-bold text-gradient">MR DANISH</span>
            <span className="block text-xs text-muted-foreground">Creative Professional</span>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Right side: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-primary text-primary-foreground rounded-full font-semibold text-sm relative overflow-hidden group"
            style={{
              boxShadow: '0 0 20px hsl(262 83% 58% / 0.4)'
            }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <Sparkles className="w-4 h-4" />
            <span className="relative z-10">Hire Me</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 glass rounded-xl"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong mt-4 mx-4 rounded-2xl overflow-hidden border border-border/30"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  className={`py-3 px-4 rounded-xl transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-primary/20 text-primary'
                      : 'text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold text-center flex items-center justify-center gap-2"
                style={{
                  boxShadow: '0 0 20px hsl(262 83% 58% / 0.4)'
                }}
              >
                <Sparkles className="w-5 h-5" />
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
