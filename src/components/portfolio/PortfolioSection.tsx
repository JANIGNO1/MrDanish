import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Star, Sparkles } from 'lucide-react';

// Import real images
import photoFire from '@/assets/photo-fire.jpg';
import photoGarden from '@/assets/photo-garden.jpg';
import photoThrone from '@/assets/photo-throne.jpg';
import photoCafe1 from '@/assets/photo-cafe1.jpg';
import photoCafe2 from '@/assets/photo-cafe2.jpg';
import photoNature from '@/assets/photo-nature.jpg';
import photoLights from '@/assets/photo-lights.jpg';
import photoHorse from '@/assets/photo-horse.jpg';
import photoStreet from '@/assets/photo-street.jpg';

const categories = ['All', 'Photography', 'Branding', 'Video', 'Web'];

const projects = [
  {
    id: 1,
    title: 'Fire & Roses Photography',
    category: 'Photography',
    description: 'Creative Portrait | Artistic Branding | Increased social engagement by 200%',
    image: photoFire,
    tags: ['Photography', 'Creative'],
    featured: true,
  },
  {
    id: 2,
    title: 'Garden Lifestyle Shoot',
    category: 'Photography',
    description: 'Lifestyle Content | Brand Visibility | Generated 50K+ impressions',
    image: photoGarden,
    tags: ['Lifestyle', 'Outdoor'],
    featured: true,
  },
  {
    id: 3,
    title: 'Royal Throne Portrait',
    category: 'Photography',
    description: 'Luxury Portrait | Personal Branding | Premium client positioning',
    image: photoThrone,
    tags: ['Portrait', 'Fantasy'],
    featured: true,
  },
  {
    id: 4,
    title: 'Mountain Cafe Vibes',
    category: 'Photography',
    description: 'Travel Content | Lifestyle Marketing | Enhanced brand storytelling',
    image: photoCafe1,
    tags: ['Lifestyle', 'Travel'],
    featured: false,
  },
  {
    id: 5,
    title: 'Outdoor Business Portrait',
    category: 'Photography',
    description: 'Corporate Photography | Professional Image | Executive branding',
    image: photoCafe2,
    tags: ['Business', 'Portrait'],
    featured: false,
  },
  {
    id: 6,
    title: 'Nature Reading Session',
    category: 'Photography',
    description: 'Peaceful Content | Authentic Storytelling | Viral social content',
    image: photoNature,
    tags: ['Nature', 'Lifestyle'],
    featured: true,
  },
  {
    id: 7,
    title: 'Evening Lights Portrait',
    category: 'Photography',
    description: 'Night Photography | Cultural Elegance | 100K+ reach achieved',
    image: photoLights,
    tags: ['Night', 'Portrait'],
    featured: true,
  },
  {
    id: 8,
    title: 'Equestrian Session',
    category: 'Photography',
    description: 'Outdoor Adventure | Premium Branding | High-value client work',
    image: photoHorse,
    tags: ['Equestrian', 'Outdoor'],
    featured: true,
  },
  {
    id: 9,
    title: 'Street Style Portrait',
    category: 'Photography',
    description: 'Cultural Content | Street Photography | Authentic brand voice',
    image: photoStreet,
    tags: ['Street', 'Cultural'],
    featured: false,
  },
  {
    id: 10,
    title: 'Poppo Live Agency Website',
    category: 'Web',
    description: 'Web Development | Host Recruitment | 300+ hosts onboarded',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    featured: true,
  },
  {
    id: 11,
    title: 'Agency Brand Identity',
    category: 'Branding',
    description: 'Brand Strategy | Visual Identity | International agency recognition',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    tags: ['Illustrator', 'Photoshop'],
    featured: false,
  },
  {
    id: 12,
    title: 'App Promo Video',
    category: 'Video',
    description: 'Video Production | App Marketing | 500K+ video views',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    tags: ['Premiere Pro', 'After Effects'],
    featured: false,
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

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
            animate={{ boxShadow: ['0 0 10px hsl(262 83% 58% / 0.2)', '0 0 20px hsl(262 83% 58% / 0.4)', '0 0 10px hsl(262 83% 58% / 0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            PORTFOLIO
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="text-gradient text-glow">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            150+ Projects completed for clients across 15+ countries
          </p>
        </motion.div>

        {/* Category Filter with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white glow'
                  : 'glass text-muted-foreground hover:text-foreground hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card hover:border-primary/50 transition-all duration-500">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-1 bg-gradient-gold rounded-full text-xs font-bold text-black">
                    <Star className="w-3 h-3" fill="currentColor" />
                    Featured
                  </div>
                )}
                
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary text-xs font-semibold mb-1 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs glass rounded-full text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 30px hsl(262 83% 58% / 0.2)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Freelance Profiles with glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-8">
            Find Me On <span className="text-gradient">Freelance Platforms</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Fiverr', url: 'https://pro.fiverr.com/s/LdX009A', color: 'from-green-500 to-green-600' },
              { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01c99e84c6a4eb52e2', color: 'from-green-400 to-emerald-500' },
              { name: 'Freelancer', url: 'https://www.freelancer.com/u/Danishjanino1', color: 'from-blue-400 to-cyan-500' },
              { name: 'Guru', url: 'https://www.guru.com/freelancers/danish-jani-g', color: 'from-orange-400 to-red-500' },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r ${platform.color} rounded-full font-bold text-white flex items-center gap-2 shadow-lg`}
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                {platform.name}
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://mrdanish.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 glass-card rounded-full font-bold text-lg group border-animated"
          >
            <span>View All 150+ Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
