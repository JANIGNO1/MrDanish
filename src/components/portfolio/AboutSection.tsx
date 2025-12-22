import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Video, Zap, Heart, Target, Award, Users } from 'lucide-react';
import photoThrone from '@/assets/photo-throne.jpg';
import photoNature from '@/assets/photo-nature.jpg';
import photoHorse from '@/assets/photo-horse.jpg';
const skills = [
  { name: 'Adobe Illustrator', level: 95 },
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Premiere Pro', level: 90 },
  { name: 'HTML/CSS/JavaScript', level: 92 },
  { name: 'Filmora', level: 88 },
  { name: 'PixelLab', level: 85 },
];

const features = [
  {
    icon: Palette,
    title: 'Branding',
    description: 'Logo & Identity Design',
  },
  {
    icon: Video,
    title: 'Editing',
    description: 'Video Production',
  },
  {
    icon: Code2,
    title: 'Web Dev',
    description: 'Clean Responsive Sites',
  },
];

const highlights = [
  { icon: Award, text: '3+ years delivering logos, edits & websites' },
  { icon: Users, text: 'Worked with Global Managers, Super Admins & Agency Owners' },
  { icon: Target, text: 'Owns & runs multiple websites — understands real business needs' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-4 block">ABOUT MR DANISH</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Turning <span className="text-gradient">Vision</span> Into Reality
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate creative professional from Pakistan, dedicated to delivering exceptional digital solutions worldwide
          </p>
        </motion.div>

        {/* Photo Gallery Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {[photoThrone, photoNature, photoHorse].map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
              style={{
                boxShadow: '0 0 30px hsl(262 83% 58% / 0.3)'
              }}
            >
              <img
                src={photo}
                alt={`Danish Jani ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">My Journey</h3>
                  <p className="text-muted-foreground">From Malakwal to Global</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hi, I'm <span className="text-foreground font-semibold">Danish Jani</span> 👋 — a professional 
                <span className="text-foreground font-medium"> graphic designer, video editor, and web developer</span> with 
                over <span className="text-primary font-semibold">3 years of experience</span> delivering creative and technical solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I've collaborated with <span className="text-foreground font-medium">international clients and high-level teams</span>, 
                including <span className="text-primary">Global Managers, Super Admins, BD Officials, Official Coin Sellers, 
                and Agency Owners</span> from various live streaming apps. This experience has given me a deep understanding 
                of <span className="text-foreground font-medium">how digital businesses and apps grow worldwide</span>.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                If you're looking for someone who understands both <span className="text-foreground font-medium">creativity and business growth</span>, 
                I'm the right choice. Let's collaborate and take your ideas to the next level 🚀
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-secondary/50"
                  >
                    <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-xs font-medium block">{feature.title}</span>
                    <span className="text-xs text-muted-foreground">{feature.description}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">My Skills</h3>
                  <p className="text-muted-foreground">Tools of my trade</p>
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="mt-8 p-4 rounded-2xl border border-primary/30 bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm">
                    <span className="text-foreground font-medium">Also Experienced:</span>{' '}
                    <span className="text-muted-foreground">Maya, AutoCAD, 3D Modeling</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
