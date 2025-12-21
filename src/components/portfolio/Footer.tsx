import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-gradient mb-2 block">
              MR DANISH JANI
            </a>
            <p className="text-muted-foreground text-sm">
              © 2024 Danish Jani. All rights reserved.
            </p>
          </div>

          {/* Made With Love */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>in Malakwal, Pakistan 🇵🇰</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white glow"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-border/30">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</a>
          <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
          <a href="https://pro.fiverr.com/s/LdX009A" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fiverr</a>
          <a href="https://www.upwork.com/freelancers/~01c99e84c6a4eb52e2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Upwork</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
