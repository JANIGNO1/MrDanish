import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Video, Zap, Heart, Target } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Graphic Design', level: 95 },
  { name: 'Video Editing', level: 90 },
  { name: 'UI/UX Design', level: 85 },
];

const features = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Clean, efficient code with modern technologies',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Eye-catching visuals that tell your story',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional videos that engage audiences',
  },
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
          <span className="text-primary font-medium mb-4 block">ABOUT ME</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Turning <span className="text-gradient">Vision</span> Into Reality
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate creative professional from Pakistan, dedicated to delivering exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  <p className="text-muted-foreground">From dreams to reality</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in <span className="text-foreground font-medium">Malakwal, Punjab, Pakistan</span>, 
                I've been crafting digital experiences for over 3 years. My journey began with a passion 
                for creating beautiful things and has evolved into a mission to help businesses succeed online.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Specializing in the <span className="text-foreground font-medium">live streaming industry</span>, 
                I create tools, websites, and branding for agencies on platforms like Poppo Live, Bigo Live, and Tango. 
                Every project is a new opportunity to push creative boundaries.
              </p>

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
                    <span className="text-xs text-muted-foreground">{feature.title}</span>
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
                    <span className="text-foreground font-medium">Always Learning:</span>{' '}
                    <span className="text-muted-foreground">Exploring new technologies & trends</span>
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
