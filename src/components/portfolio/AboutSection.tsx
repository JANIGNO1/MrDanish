import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Palette, Video, Zap, Heart, Target, Award, Users, Globe, Building, ChevronLeft, ChevronRight, Briefcase, TrendingUp, Sparkles, Rocket, Brain, Cpu, MessageSquare, Lightbulb, Star, CheckCircle2, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from './StarField';

// Import real photos
import photoThrone from '@/assets/photo-throne.jpg';
import photoNature from '@/assets/photo-nature.jpg';
import photoHorse from '@/assets/photo-horse.jpg';
import photoFire from '@/assets/photo-fire.jpg';
import photoGarden from '@/assets/photo-garden.jpg';
import photoCafe1 from '@/assets/photo-cafe1.jpg';
import photoCafe2 from '@/assets/photo-cafe2.jpg';
import photoLights from '@/assets/photo-lights.jpg';
import photoStreet from '@/assets/photo-street.jpg';
import profileMain from '@/assets/profile-main.jpg';

const allPhotos = [
  { src: profileMain, alt: 'Danish Jani - Professional Portrait' },
  { src: photoThrone, alt: 'Danish Jani - Royal Portrait' },
  { src: photoGarden, alt: 'Danish Jani - Garden Shoot' },
  { src: photoFire, alt: 'Danish Jani - Creative Photography' },
  { src: photoNature, alt: 'Danish Jani - Nature Setting' },
  { src: photoHorse, alt: 'Danish Jani - Equestrian' },
  { src: photoCafe1, alt: 'Danish Jani - Mountain Cafe' },
  { src: photoCafe2, alt: 'Danish Jani - Outdoor Portrait' },
  { src: photoLights, alt: 'Danish Jani - Evening Lights' },
  { src: photoStreet, alt: 'Danish Jani - Street Style' },
];

const expertise = [
  { icon: Palette, title: 'Logo Design & Branding', tools: 'Adobe Illustrator, Photoshop, PixelLab' },
  { icon: Video, title: 'Video Editing & Content', tools: 'Premiere Pro, Filmora (Ads, YouTube, TikTok)' },
  { icon: Code2, title: 'Website Development', tools: 'HTML, CSS, JavaScript, React' },
  { icon: Brain, title: 'AI Tools & Automation', tools: 'Workflow automation, growth tools' },
  { icon: Cpu, title: '3D & Technical Design', tools: 'Autodesk Maya, AutoCAD' },
  { icon: TrendingUp, title: 'Live Streaming Growth', tools: 'Agency systems, host management' },
];

// Skill Progress Bars Data
const skillProgressData = [
  { name: 'Adobe Illustrator', level: 95, color: 'from-orange-500 to-yellow-500' },
  { name: 'Adobe Photoshop', level: 90, color: 'from-blue-500 to-cyan-400' },
  { name: 'Premiere Pro', level: 92, color: 'from-purple-500 to-pink-500' },
  { name: 'Filmora', level: 90, color: 'from-green-500 to-emerald-400' },
  { name: 'PixelLab', level: 85, color: 'from-rose-500 to-red-400' },
  { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-500' },
  { name: 'HTML / CSS / JavaScript', level: 90, color: 'from-amber-500 to-orange-500' },
  { name: 'SEO Optimization', level: 88, color: 'from-green-400 to-teal-500' },
  { name: 'AI Tools & Automation', level: 90, color: 'from-violet-500 to-purple-500' },
];

const whyWorkWithMe = [
  { icon: Globe, text: 'Trusted by international agencies & live app teams' },
  { icon: Lightbulb, text: 'Deep understanding of global digital business models' },
  { icon: Zap, text: 'Fast delivery with professional communication' },
  { icon: Heart, text: 'Long-term support mindset' },
  { icon: Users, text: 'Real-world experience managing teams & platforms' },
];

const philosophy = [
  { emoji: '🌱', text: 'Start small — every big journey begins with a step' },
  { emoji: '⏳', text: 'Consistency beats motivation' },
  { emoji: '💻', text: 'Technology creates unlimited opportunities' },
  { emoji: '✨', text: 'Personal branding builds authority' },
];

// Enhanced Timeline with complete journey
const timeline = [
  { 
    year: '2017', 
    emoji: '📱',
    title: 'Exploration Phase', 
    desc: 'Started exploring social and messaging apps like IMO, Facebook Messenger, Instagram – discovering online communication and content creation.' 
  },
  { 
    year: '2020', 
    emoji: '🎤',
    title: 'Live Streaming Entry', 
    desc: 'Became a host on Likee app, gaining first experience in live streaming and audience engagement.' 
  },
  { 
    year: '2020-2021', 
    emoji: '🚀',
    title: 'Short Video & Live Systems', 
    desc: 'Joined as host on Snack Video, learning more about short videos and live systems.' 
  },
  { 
    year: '2021-2022', 
    emoji: '📊',
    title: 'Algorithm & Growth Mastery', 
    desc: 'TikTok launched in Pakistan – explored deeply, understood algorithms, content strategies, and live features.' 
  },
  { 
    year: '2022', 
    emoji: '🎨',
    title: 'Creative & Production Expansion', 
    desc: 'Started professional work as a Graphic Designer and Video Editor, delivering branding, logos, and content creation for digital platforms and live streaming creators.' 
  },
  { 
    year: '2023', 
    emoji: '🧠',
    title: 'Web Development & AI Tools', 
    desc: 'Expanded into web development and AI tools, adding React-based websites, SEO optimization, automation, and AI-powered workflows.' 
  },
  { 
    year: '2022-2026', 
    emoji: '💼',
    title: 'Global Agency & Leadership', 
    desc: 'Used all accumulated knowledge to start and scale my own live streaming agency. Served as Global Manager, Super Admin, BD Official, Official Coins Seller, and Hosting Provider. Recruited and managed hosts, built remote teams, and led international partnerships across Poppo Live, Bigo Live, Tango, and other platforms. Successfully delivered 150+ projects for 50+ global clients across China, Hong Kong, Malaysia, Singapore, and worldwide.' 
  },
];

const expertiseTags = [
  'Global Manager',
  'Super Admin',
  'Agency Owner',
  'BD Official',
  'Official Coins Seller',
  'Live Streaming Operations',
  'Branding & Editing',
  'Web Development',
  'AI Tools & Automation',
  'Creator Economy Growth',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <StarField count={40} />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-primary font-medium mb-4 px-4 py-2 glass-card rounded-full"
            animate={{ boxShadow: ['0 0 15px hsl(var(--primary) / 0.2)', '0 0 25px hsl(var(--primary) / 0.4)', '0 0 15px hsl(var(--primary) / 0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ABOUT DANISH OFFICIAL
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Strategic <span className="text-gradient text-glow">Creative Director</span> & Global Digital Builder
          </h2>
        </motion.div>

        {/* Authority Opening Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="glass p-8 md:p-10 rounded-3xl card-glow">
            <div className="flex items-start gap-4 mb-6">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0"
                animate={{ boxShadow: ['0 0 20px hsl(var(--primary) / 0.3)', '0 0 30px hsl(var(--primary) / 0.5)', '0 0 20px hsl(var(--primary) / 0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Hi, I'm Danish Jani 👋</h3>
                <p className="text-muted-foreground">Strategic Creative Director & Global Digital Builder</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I help global brands, startups, and creators grow through design, AI tools, live streaming operations, and digital strategy. <span className="text-primary font-semibold">Trusted by international teams across China, Hong Kong, Malaysia, Singapore, and worldwide.</span>
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I combine creativity, technical expertise, and strategic insight to deliver branding, web development, video content, and AI-powered growth systems.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Core: Branding</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Video Editing</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Web Dev</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">AI Tools</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Creator Economy</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs">Illustrator</span>
              <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs">Photoshop</span>
              <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs">Premiere Pro</span>
              <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs">Filmora</span>
              <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs">PixelLab</span>
              <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs">Maya</span>
              <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs">AutoCAD</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Pakistani entrepreneur, global live streaming expert, and tech-focused digital professional with over <span className="text-primary font-semibold">3+ years of verified international experience</span> (actively continuing in 2026).
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in <span className="text-foreground font-medium">live streaming operations, agency management, AI-powered digital growth, branding, web development, and creator economy systems</span>. I have served globally as a <span className="text-primary font-semibold">Global Manager, Super Admin, BD Official (Business Development), Official Coins Seller, Agency Owner, and Hosting Provider</span> across multiple live streaming platforms.
            </p>

            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5 mb-6">
              <h4 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Professional Experience
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                I have successfully completed <span className="text-primary font-semibold">150+ professional projects</span> for <span className="text-primary font-semibold">50+ global clients</span>, collaborating with trusted Chinese management firms and live app companies based in <span className="text-foreground font-medium">China, Hong Kong, Malaysia, Singapore</span>, and other international markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                My hands-on experience with <span className="text-foreground font-medium">TikTok, YouTube, and Instagram growth algorithms</span> (updated for 2025–2026) allows me to design scalable growth strategies that are monetization-safe and platform-compliant.
              </p>
            </div>

            {/* PSEB Credential Highlight */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 via-background to-accent/5">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm sm:text-base text-foreground font-semibold">
                    PSEB-Registered IT & Digital Services Provider
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Pakistan Software Export Board — Official Verification
                  </p>
                </div>
              </div>
              <motion.a 
                href="/pseb-registration-danish-official.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                style={{
                  boxShadow: '0 4px 20px hsl(var(--primary) / 0.3)'
                }}
              >
                <FileDown className="w-4 h-4" />
                View Certificate
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Photo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            My Professional <span className="text-gradient">Photos</span>
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Main Photo with Glow */}
            <motion.div
              className="relative aspect-[16/9] rounded-3xl overflow-hidden"
              animate={{ 
                boxShadow: [
                  '0 0 30px hsl(var(--primary) / 0.3), 0 20px 60px rgba(0,0,0,0.3)',
                  '0 0 50px hsl(var(--primary) / 0.5), 0 20px 60px rgba(0,0,0,0.3)',
                  '0 0 30px hsl(var(--primary) / 0.3), 0 20px 60px rgba(0,0,0,0.3)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.img
                key={currentPhotoIndex}
                src={allPhotos[currentPhotoIndex].src}
                alt={allPhotos[currentPhotoIndex].alt}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Photo Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 glass-card rounded-full text-sm font-medium">
                {currentPhotoIndex + 1} / {allPhotos.length}
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevPhoto}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-all card-glow"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={nextPhoto}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-all card-glow"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Thumbnail Strip */}
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
              {allPhotos.map((photo, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    index === currentPhotoIndex 
                      ? 'ring-2 ring-primary glow' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
            My <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-5 rounded-2xl card-glow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.tools}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
            Technical <span className="text-gradient">Proficiency</span>
          </h3>
          <div className="glass p-6 md:p-8 rounded-3xl card-glow">
            <div className="space-y-5">
              {skillProgressData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary/50 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.5 + index * 0.1, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                      style={{
                        boxShadow: '0 0 10px currentColor, 0 0 20px currentColor'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ 
                          x: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 2,
                          delay: 1.5 + index * 0.1,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              Continuously learning and upgrading skills for 2025–2026 industry standards
            </p>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center mt-8"
            >
              <Link
                to="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex flex-col items-center"
              >
                <motion.div
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-semibold shadow-lg transition-all duration-300 group-hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      '0 10px 30px -10px hsl(var(--primary) / 0.4)',
                      '0 10px 40px -10px hsl(var(--primary) / 0.6)',
                      '0 10px 30px -10px hsl(var(--primary) / 0.4)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download Professional Resume (PDF)</span>
                </motion.div>
                <span className="mt-2 text-xs text-muted-foreground">
                  Updated • Global Experience • Agency Leadership
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Work With Me + Philosophy */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Why Work With Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-6 md:p-8 rounded-3xl card-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold">Why Work With Me</h3>
            </div>
            <div className="space-y-3">
              {whyWorkWithMe.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass p-6 md:p-8 rounded-3xl card-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold">Motivational Philosophy</h3>
            </div>
            <div className="space-y-3">
              {philosophy.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass p-6 md:p-8 rounded-3xl card-glow text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center">
                <Star className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-4">Personal Brand & Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="text-primary font-semibold">Danish Jani</span>, also known as <span className="text-foreground font-medium">Mr Danish</span> and <span className="text-foreground font-medium">janigno1</span>, represents a modern global digital identity. Born and raised in <span className="text-foreground font-medium">Malakwal, Mandi Bahauddin, Pakistan</span>, I built my career from local roots to international reach through technology, discipline, and continuous learning.
            </p>
            <div className="p-4 rounded-2xl border border-accent/30 bg-accent/5 inline-block">
              <p className="text-foreground font-medium italic">
                "From Malakwal to global platforms, my journey proves that strong vision, modern skills, and persistence can build international impact."
              </p>
            </div>
          </div>
        </motion.div>

        {/* MY JOURNEY / TIMELINE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          id="journey"
        >
          <div className="text-center mb-12">
            <motion.span 
              className="inline-flex items-center gap-2 text-accent font-medium mb-4 px-4 py-2 glass-card rounded-full"
              animate={{ boxShadow: ['0 0 15px hsl(var(--accent) / 0.2)', '0 0 25px hsl(var(--accent) / 0.4)', '0 0 15px hsl(var(--accent) / 0.2)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-4 h-4" />
              MY JOURNEY
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Professional <span className="text-gradient text-glow">Timeline</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              As a globally experienced live streaming professional with 3+ years of verified international experience (actively expanding through 2026), my journey reflects continuous growth across technology, creativity, leadership, and global digital systems.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`relative flex items-start gap-6 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10"
                    animate={{ boxShadow: ['0 0 15px hsl(var(--primary) / 0.5)', '0 0 25px hsl(var(--primary) / 0.8)', '0 0 15px hsl(var(--primary) / 0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <span className="text-sm">{item.emoji}</span>
                  </motion.div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass p-5 md:p-6 rounded-2xl card-glow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-bold text-lg">{item.year}</span>
                        <span className="text-xl">{item.emoji}</span>
                      </div>
                      <h4 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-16 text-center"
          >
            <h4 className="text-lg font-display font-bold mb-6 text-muted-foreground">Areas of Expertise</h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {expertiseTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground border border-primary/20 hover:border-primary/50 transition-all"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Ending Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-6 md:p-8 rounded-3xl glass card-glow">
              <motion.p 
                className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                "From explorer to agency owner — building the future of live streaming in Pakistan and worldwide. Insha'Allah top 1 soon! 🔥"
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
