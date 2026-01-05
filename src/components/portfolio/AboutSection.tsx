import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Palette, Video, Zap, Heart, Target, Award, Users, Globe, Building, ChevronLeft, ChevronRight, Briefcase, TrendingUp } from 'lucide-react';
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

const features = [
  { icon: Palette, title: 'Branding', description: 'Logo & Identity' },
  { icon: Video, title: 'Editing', description: 'Video Production' },
  { icon: Code2, title: 'Web Dev', description: 'Responsive Sites' },
  { icon: Building, title: 'Agency', description: 'Management' },
];

// E-E-A-T highlights with 2025 trending keywords
const highlights = [
  { icon: Award, text: '3+ years as Global Manager, Super Admin & Agency Owner - Verified Experience' },
  { icon: Globe, text: 'Trusted by Chinese firms, HK, Malaysia, Singapore live apps - International Authority' },
  { icon: TrendingUp, text: 'BD Official & Official Coins Seller - AI-Powered Growth Strategies' },
  { icon: Users, text: '150+ projects, 50+ global clients - Proven Expertise in Creator Economy' },
];

// Professional Timeline Milestones
const timeline = [
  { 
    year: '2017', 
    icon: '📱', 
    title: 'Exploration Phase', 
    desc: 'Started exploring social and messaging apps like IMO, Facebook Messenger, Instagram – discovering online communication and content creation.' 
  },
  { 
    year: '2020', 
    icon: '🎤', 
    title: 'Live Streaming Entry', 
    desc: 'Became a host on Likee app, gaining first experience in live streaming and audience engagement.' 
  },
  { 
    year: '2020 – 2021', 
    icon: '🚀', 
    title: 'Short Video & Live Systems', 
    desc: 'Joined as host on Snack Video, learning more about short videos and live systems.' 
  },
  { 
    year: '2021 – 2022', 
    icon: '📊', 
    title: 'Algorithm & Growth Mastery', 
    desc: 'TikTok launched in Pakistan – explored deeply, understood algorithms, content strategies, and live features.' 
  },
  { 
    year: '2022 – Present', 
    icon: '💼', 
    title: 'Agency & Leadership', 
    desc: 'Used all knowledge to start my own live streaming agency. Recruited and managed hosts, built teams, specialized in platforms like Poppo Live, Bigo Live, Tango. Delivered 150+ projects for international clients in branding, web development, and video editing for live apps.' 
  },
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
            animate={{ boxShadow: ['0 0 15px hsl(220 80% 55% / 0.2)', '0 0 25px hsl(220 80% 55% / 0.4)', '0 0 15px hsl(220 80% 55% / 0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ABOUT MR DANISH
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            #1 <span className="text-gradient text-glow">Top-Rated</span> Live Streaming Expert 2025
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Trusted by leading Chinese management firms, live apps companies in Hong Kong, Malaysia, Singapore, and global tech, fintech & entertainment industries. AI-powered digital growth specialist.
          </p>
        </motion.div>

        {/* Photo Carousel with Glow */}
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
                  '0 0 30px hsl(220 80% 55% / 0.3), 0 20px 60px rgba(0,0,0,0.3)',
                  '0 0 50px hsl(220 80% 55% / 0.5), 0 20px 60px rgba(0,0,0,0.3)',
                  '0 0 30px hsl(220 80% 55% / 0.3), 0 20px 60px rgba(0,0,0,0.3)',
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

            {/* Navigation Arrows with Glow */}
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass p-8 rounded-3xl card-glow">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center"
                  animate={{ boxShadow: ['0 0 20px hsl(220 80% 55% / 0.3)', '0 0 30px hsl(220 80% 55% / 0.5)', '0 0 20px hsl(220 80% 55% / 0.3)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-display font-bold">My Journey</h3>
                  <p className="text-muted-foreground">From Pakistan to Global</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                As the <span className="text-primary font-semibold">#1 top-rated global live streaming expert</span> with 3+ years verified experience, 
                I've served as <span className="text-foreground font-medium">Global Manager, Super Admin, BD Official (Business Development), 
                Official Coins Seller, Agency Owner, and Hosting Provider Worldwide</span>. Specializing in AI-powered digital growth strategies.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Completed <span className="text-primary font-semibold">150+ projects</span> for <span className="text-primary font-semibold">50+ global clients</span>, 
                including trusted partnerships with <span className="text-foreground font-medium">Chinese management firms, live apps companies 
                in Hong Kong, Malaysia, and Singapore</span>. Expert in TikTok, YouTube & Instagram growth algorithms for 2025.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Passionate about <span className="text-foreground font-medium">innovation, AI tools & automation</span>. 
                Whether you need live streaming management, branding, development, or AI-powered digital marketing expertise, 
                I'm your trusted remote work professional 🚀
              </p>

              {/* Highlights with Glow */}
              <div className="space-y-3 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-sm p-2 rounded-lg hover:bg-primary/5 transition-all"
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"
                      whileHover={{ boxShadow: '0 0 15px hsl(220 80% 55% / 0.4)' }}
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                    </motion.div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-4 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center p-3 rounded-2xl bg-secondary/50 card-glow"
                  >
                    <feature.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="text-xs font-medium block">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Professional Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-sky-50/80 via-white/90 to-emerald-50/80 dark:from-sky-950/40 dark:via-background/80 dark:to-emerald-950/40 border border-sky-200/50 dark:border-sky-800/30 shadow-xl">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-emerald-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-sky-400/20 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ boxShadow: ['0 0 20px hsl(180 60% 50% / 0.3)', '0 0 35px hsl(180 60% 50% / 0.5)', '0 0 20px hsl(180 60% 50% / 0.3)'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-sky-600 to-emerald-600 dark:from-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">My Professional Timeline</h3>
                  <p className="text-muted-foreground">From Explorer to Agency Owner</p>
                </div>
              </div>

              {/* Timeline Cards */}
              <div className="relative space-y-4 z-10">
                {/* Vertical line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-emerald-400 to-sky-400 dark:from-sky-500 dark:via-emerald-500 dark:to-sky-500" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.12 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="relative pl-16 group cursor-default"
                  >
                    {/* Timeline Icon Circle */}
                    <motion.div 
                      className="absolute left-0 top-3 w-14 h-14 rounded-full bg-gradient-to-br from-sky-100 to-emerald-100 dark:from-sky-900/60 dark:to-emerald-900/60 border-2 border-sky-300 dark:border-sky-600 flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg group-hover:border-emerald-400 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 0 25px hsl(170 60% 50% / 0.5)' 
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Card */}
                    <div className="p-5 rounded-2xl bg-white/80 dark:bg-background/60 border border-sky-200/60 dark:border-sky-800/40 shadow-md hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-sm">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Closing Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-sky-100/80 to-emerald-100/80 dark:from-sky-900/40 dark:to-emerald-900/40 border border-sky-300/50 dark:border-sky-700/50 text-center relative z-10"
              >
                <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-sky-600 via-emerald-500 to-sky-600 dark:from-sky-400 dark:via-emerald-400 dark:to-sky-400 bg-clip-text text-transparent leading-relaxed">
                  "From explorer to agency owner – building the future of live streaming in Pakistan and worldwide. Insha'Allah top 1 soon! 🔥"
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
