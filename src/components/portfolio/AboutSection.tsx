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

const highlights = [
  { icon: Award, text: '3+ years as Global Manager, Super Admin & Agency Owner' },
  { icon: Globe, text: 'Trusted by Chinese firms, HK, Malaysia, Singapore live apps companies' },
  { icon: TrendingUp, text: 'BD Official & Official Coins Seller for top world industries' },
  { icon: Users, text: '150+ projects completed for 50+ global clients worldwide' },
];

const timeline = [
  { year: '2022', title: 'Started as Graphic Designer', desc: 'Began creative journey with logo & branding' },
  { year: '2023', title: 'Expanded to Video & Web', desc: 'Added video editing & web development' },
  { year: '2024', title: 'Global Manager & Agency Owner', desc: 'Leading teams & managing international partnerships' },
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
            #1 <span className="text-gradient text-glow">Top-Rated</span> Global Freelancer
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Trusted by leading Chinese management firms, live apps companies in Hong Kong, Malaysia, Singapore, and top world industries including tech, fintech, and entertainment
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
                As a <span className="text-primary font-semibold">#1 top-rated global freelancer</span> with 3+ years experience, 
                I've served as <span className="text-foreground font-medium">Global Manager, Super Admin, BD Official (Business Development), 
                Official Coins Seller, Agency Owner, and Hosting Provider Worldwide</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Completed <span className="text-primary font-semibold">150+ projects</span> for <span className="text-primary font-semibold">50+ global clients</span>, 
                including trusted partnerships with <span className="text-foreground font-medium">Chinese management firms, live apps companies 
                in Hong Kong, Malaysia, and Singapore</span>, and top world live industries like tech, finance, and entertainment.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Passionate about <span className="text-foreground font-medium">innovation and excellence</span>. 
                Whether you need branding, development, or global management expertise, I'm here to elevate your vision 🚀
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

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass p-8 rounded-3xl card-glow">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center"
                  animate={{ boxShadow: ['0 0 20px hsl(220 80% 55% / 0.3)', '0 0 30px hsl(220 80% 55% / 0.5)', '0 0 20px hsl(220 80% 55% / 0.3)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-display font-bold">My Timeline</h3>
                  <p className="text-muted-foreground">Growth & Experience</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.15 }}
                    className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0"
                  >
                    {/* Timeline Dot with Glow */}
                    <motion.div 
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
                      animate={{ boxShadow: ['0 0 10px hsl(220 80% 55% / 0.5)', '0 0 20px hsl(220 80% 55% / 0.8)', '0 0 10px hsl(220 80% 55% / 0.5)'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h4 className="font-display font-bold text-foreground mt-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="mt-8 p-4 rounded-2xl border border-primary/30 bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm">
                    <span className="text-foreground font-medium">Serving:</span>{' '}
                    <span className="text-muted-foreground">China, Hong Kong, Malaysia, Singapore & Global Industries</span>
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
