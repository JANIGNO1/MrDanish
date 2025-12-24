import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const countries = [
  { name: 'USA', flag: '🇺🇸', color: 'from-blue-500 to-red-500' },
  { name: 'UK', flag: '🇬🇧', color: 'from-red-500 to-blue-600' },
  { name: 'UAE', flag: '🇦🇪', color: 'from-green-500 to-red-500' },
  { name: 'Hong Kong', flag: '🇭🇰', color: 'from-red-600 to-pink-500' },
  { name: 'Singapore', flag: '🇸🇬', color: 'from-red-500 to-white' },
  { name: 'Malaysia', flag: '🇲🇾', color: 'from-blue-600 to-yellow-500' },
  { name: 'Pakistan', flag: '🇵🇰', color: 'from-green-600 to-white' },
  { name: 'India', flag: '🇮🇳', color: 'from-orange-500 to-green-500' },
  { name: 'China', flag: '🇨🇳', color: 'from-red-600 to-yellow-400' },
  { name: 'Australia', flag: '🇦🇺', color: 'from-blue-600 to-red-500' },
  { name: 'Canada', flag: '🇨🇦', color: 'from-red-500 to-white' },
  { name: 'Germany', flag: '🇩🇪', color: 'from-black to-yellow-400' },
];

const companies = [
  { name: 'TechCorp Asia', type: 'Technology' },
  { name: 'LiveStream Pro', type: 'Live Apps' },
  { name: 'Digital Wave HK', type: 'Digital Agency' },
  { name: 'Singapore Media', type: 'Entertainment' },
  { name: 'Global Fintech', type: 'Finance' },
  { name: 'E-Commerce Plus', type: 'E-Commerce' },
  { name: 'StartUp Hub', type: 'Startups' },
  { name: 'Creative Studios', type: 'Creative' },
];

const TrustedBySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-wider mb-2 block">WORLDWIDE TRUST</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Trusted by Clients in <span className="text-gradient">12+ Countries</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partnered with leading businesses, agencies, and entrepreneurs across the globe
          </p>
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="relative px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-2">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {country.name}
                  </span>
                </div>
                
                {/* Shine Sweep Animation */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-scrolling Companies */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {[...companies, ...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="group flex-shrink-0"
              >
                <div className="relative px-8 py-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 min-w-[200px]">
                  {/* Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative text-center">
                    <div className="text-lg font-semibold text-foreground/90 mb-1">{company.name}</div>
                    <div className="text-xs text-primary/70 uppercase tracking-wider">{company.type}</div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground text-sm">
            Serving industries including{' '}
            <span className="text-primary">Tech Startups</span>,{' '}
            <span className="text-primary">Fintech</span>,{' '}
            <span className="text-primary">E-Commerce</span>,{' '}
            <span className="text-primary">Live Streaming</span>,{' '}
            <span className="text-primary">Entertainment</span>, and{' '}
            <span className="text-primary">Digital Marketing</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
