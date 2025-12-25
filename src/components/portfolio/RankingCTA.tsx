import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Trophy, Globe, Users, Briefcase, Star, X, MapPin, Award, TrendingUp, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '150+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-400' },
  { icon: Users, value: '50+', label: 'Global Clients', color: 'from-purple-500 to-pink-400' },
  { icon: Globe, value: '15+', label: 'Countries Served', color: 'from-green-500 to-emerald-400' },
  { icon: Star, value: '4.9', label: 'Average Rating', color: 'from-yellow-500 to-orange-400' },
];

const achievements = [
  'Top-Rated Freelancer on Multiple Platforms',
  'Trusted by Hong Kong, Singapore & Malaysia Companies',
  'Official Coins Seller for Major Live Apps',
  'Worldwide Hosting Provider',
  'Super Admin for Live Streaming Agencies',
  'BD Official for International Partnerships',
];

const countries = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇭🇰', name: 'Hong Kong' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇲🇾', name: 'Malaysia' },
  { flag: '🇵🇰', name: 'Pakistan' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇨🇳', name: 'China' },
  { flag: '🇦🇺', name: 'Australia' },
];

const RankingCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* CTA Button */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Multi-layer glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70 blur-xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              {/* Button */}
              <div className="relative px-10 py-5 bg-gradient-to-r from-primary via-accent to-primary rounded-full font-bold text-xl text-white shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center gap-3 border border-white/20">
                <Trophy className="w-6 h-6" />
                <span>Ranked #1 Worldwide – See Why</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                </motion.div>
              </div>
              
              {/* Orbiting particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: `${80 + i * 10}px 0`,
                  }}
                />
              ))}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 blur-2xl" />
              
              <div className="relative glass-card border border-primary/20 rounded-3xl p-8 md:p-12">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]"
                  >
                    <Trophy className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      #1 Worldwide Expert
                    </span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Danish Jani – Global Authority in Live Streaming & Digital Services
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity`} />
                      <div className="relative glass p-4 rounded-2xl text-center border border-primary/10 hover:border-primary/30 transition-all">
                        <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Countries */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-lg">Countries Served</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {countries.map((country, index) => (
                      <motion.div
                        key={country.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all"
                      >
                        <span className="text-xl">{country.flag}</span>
                        <span className="text-sm font-medium">{country.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-lg">Key Achievements</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="block w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-center hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow"
                >
                  Work With #1 Expert Today
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RankingCTA;
