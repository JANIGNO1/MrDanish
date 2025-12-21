import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const categories = ['All', 'Branding', 'Video', 'Web'];

const projects = [
  {
    id: 1,
    title: 'Live Streaming Agency Website',
    category: 'Web',
    description: 'Modern landing page for Poppo Live agency recruitment with responsive design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    id: 2,
    title: 'Agency Brand Identity',
    category: 'Branding',
    description: 'Complete branding package including logo, brand kit, and social assets',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    tags: ['Illustrator', 'Photoshop', 'Brand Kit'],
    link: '#',
  },
  {
    id: 3,
    title: 'App Promo Video',
    category: 'Video',
    description: 'Dynamic promotional video for live streaming app with motion graphics',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    tags: ['Premiere Pro', 'After Effects'],
    link: '#',
  },
  {
    id: 4,
    title: 'Host Recruitment Page',
    category: 'Web',
    description: 'Clean, responsive landing page for international host recruitment campaign',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'Responsive'],
    link: '#',
  },
  {
    id: 5,
    title: 'YouTube Thumbnail Pack',
    category: 'Branding',
    description: 'Eye-catching thumbnail designs for gaming and entertainment content',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    tags: ['Photoshop', 'Design'],
    link: '#',
  },
  {
    id: 6,
    title: 'TikTok Edits Compilation',
    category: 'Video',
    description: 'Fast-paced edits optimized for TikTok with trending effects and transitions',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    tags: ['Filmora', 'Premiere Pro'],
    link: '#',
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">PORTFOLIO</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Logo & branding, video editing, responsive websites, social content, and more
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs glass rounded-full text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Freelance Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-display font-bold mb-6">Freelancing Profiles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Fiverr', url: 'https://pro.fiverr.com/s/LdX009A' },
              { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01c99e84c6a4eb52e2' },
              { name: 'Freelancer', url: 'https://www.freelancer.com/u/Danishjanino1' },
              { name: 'Guru', url: 'https://www.guru.com/freelancers/danish-jani-g' },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-strong rounded-full font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                {platform.name}
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* View More */}
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
            className="inline-flex items-center gap-2 px-8 py-4 glass-strong text-foreground rounded-full font-semibold hover:gap-4 transition-all"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
