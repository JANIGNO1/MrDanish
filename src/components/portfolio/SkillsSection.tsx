import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Palette, 
  Film, 
  Code, 
  Figma, 
  Search, 
  BarChart3, 
  Globe, 
  Building,
  Coins,
  Server,
  TrendingUp,
  Users
} from 'lucide-react';
import StarField from './StarField';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

const skills: Skill[] = [
  { name: 'Business Development', level: 95, icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
  { name: 'Agency Management', level: 90, icon: Building, color: 'from-purple-500 to-pink-500' },
  { name: 'Adobe Illustrator', level: 95, icon: Palette, color: 'from-orange-500 to-orange-600' },
  { name: 'Web Development', level: 90, icon: Code, color: 'from-cyan-400 to-blue-500' },
  { name: 'Video Editing', level: 88, icon: Film, color: 'from-violet-500 to-purple-600' },
  { name: 'Cryptocurrency Sales', level: 85, icon: Coins, color: 'from-yellow-500 to-orange-500' },
  { name: 'Web Hosting', level: 90, icon: Server, color: 'from-green-500 to-emerald-500' },
  { name: 'Team Leadership', level: 92, icon: Users, color: 'from-pink-500 to-rose-500' },
];

// Circular Progress Component
const CircularProgress = ({ skill, isInView, index }: { skill: Skill; isInView: boolean; index: number }) => {
  const circumference = 2 * Math.PI * 54; // radius = 54
  const offset = circumference - (skill.level / 100) * circumference;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="8"
            className="stroke-secondary"
          />
          {/* Progress circle */}
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className="stroke-primary"
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-1`}>
            <skill.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">{skill.level}%</span>
        </div>
      </div>
      
      <h3 className="mt-4 text-sm font-semibold text-foreground text-center">{skill.name}</h3>
    </motion.div>
  );
};

// Linear Progress Component
const LinearProgress = ({ skill, isInView, index }: { skill: Skill; isInView: boolean; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
          <skill.icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-foreground">{skill.name}</span>
            <span className="text-sm font-bold text-primary">{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 overflow-hidden" aria-labelledby="skills-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <StarField count={30} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block text-sm uppercase tracking-wider">Expertise</span>
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-display font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in industry-standard tools and technologies to deliver exceptional results
          </p>
        </motion.div>

        {/* Desktop: Circular Progress Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <CircularProgress key={skill.name} skill={skill} isInView={isInView} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet: Linear Progress */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <LinearProgress key={skill.name} skill={skill} isInView={isInView} index={index} />
          ))}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass-card p-6 rounded-2xl text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">Also experienced with:</span>{' '}
            Adobe Photoshop, After Effects, Filmora, PixelLab, AutoCAD, Maya, 3D Modeling, 
            Google Analytics, Ahrefs, Mailchimp, and more...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
