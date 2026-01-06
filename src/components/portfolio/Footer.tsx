import { motion } from 'framer-motion';
import { Heart, ArrowUp, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import StarField from './StarField';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/danishjani', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/janigno1', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/danishjanig', label: 'Instagram' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <StarField count={25} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Trusted Worldwide Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 p-4 glass-card rounded-2xl"
        >
          <Globe className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">
            Trusted by clients and teams across <span className="text-primary">China • Hong Kong • Malaysia • Singapore</span> and worldwide
          </span>
        </motion.div>

        {/* Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Danish Official — Global Digital Builder</span>
        </motion.div>

        {/* Removed duplicate trusted worldwide */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hidden"
        >
          <span className="text-sm font-medium">
            Trusted Worldwide: <span className="text-muted-foreground">China • Hong Kong • Malaysia • Singapore & Top Industries</span>
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-gradient text-glow mb-2 block">
              DANISH OFFICIAL
            </a>
            <p className="text-muted-foreground text-sm">
              © 2026 Danish Official. All rights reserved.
            </p>
          </div>

          {/* Social Links with Glow */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all card-glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
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
            <span>in Pakistan 🇵🇰</span>
          </div>

          {/* Back to Top with Glow Trail */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white glow"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-border/30">
          {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -2, color: 'hsl(220 80% 55%)' }}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {link}
            </motion.a>
          ))}
          <a href="https://pro.fiverr.com/s/LdX009A" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fiverr</a>
          <a href="https://www.upwork.com/freelancers/~01c99e84c6a4eb52e2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Upwork</a>
        </div>

        {/* Legal Links - Required for AdSense */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-border/20">
          <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-xs">Privacy Policy</a>
          <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-xs">Terms of Service</a>
          <a href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors text-xs">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
