import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { name: 'TikTok', icon: '🎵' },
  { name: 'BIGO Live', icon: '🔴' },
  { name: 'Likee', icon: '💫' },
  { name: 'Shopee', icon: '🛒' },
  { name: 'Lazada', icon: '🛍️' },
  { name: 'Grab', icon: '🚗' },
  { name: 'Fiverr', icon: '💼' },
  { name: 'Upwork', icon: '🌐' },
  { name: 'Meta', icon: '📱' },
  { name: 'Google', icon: '🔍' },
  { name: 'YouTube', icon: '▶️' },
  { name: 'Twitch', icon: '🎮' },
];

const ClientLogosMarquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background" ref={ref}>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="text-primary font-medium text-sm tracking-wider mb-2 block">TRUSTED PARTNERS</span>
        <h3 className="text-xl md:text-2xl font-display font-bold">
          Working with <span className="text-gradient">Global Brands</span>
        </h3>
      </motion.div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* First Row - Left to Right */}
      <div className="relative overflow-hidden py-4">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex gap-8"
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group flex-shrink-0"
            >
              <div className="relative px-6 py-3 rounded-xl bg-card/40 backdrop-blur-sm border border-primary/10 hover:border-primary/40 transition-all duration-300 min-w-[140px]">
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl">{client.icon}</span>
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                    {client.name}
                  </span>
                </div>
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative overflow-hidden py-4">
        <motion.div
          animate={{ x: [-1500, 0] }}
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
          {[...clients.slice().reverse(), ...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
            <motion.div
              key={`${client.name}-rev-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group flex-shrink-0"
            >
              <div className="relative px-6 py-3 rounded-xl bg-card/40 backdrop-blur-sm border border-primary/10 hover:border-primary/40 transition-all duration-300 min-w-[140px]">
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl">{client.icon}</span>
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                    {client.name}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Countries Served */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mt-8 px-4"
      >
        {['🇺🇸 USA', '🇬🇧 UK', '🇦🇪 UAE', '🇭🇰 HK', '🇸🇬 SG', '🇲🇾 MY', '🇵🇰 PK', '🇮🇳 IN', '🇨🇳 CN', '🇦🇺 AU'].map((country, index) => (
          <motion.span
            key={country}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
            className="px-3 py-1 text-xs font-medium rounded-full bg-card/50 border border-primary/20 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
          >
            {country}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientLogosMarquee;
