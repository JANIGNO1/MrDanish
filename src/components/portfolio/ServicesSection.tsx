import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brush, 
  Film, 
  Globe, 
  ImageIcon, 
  Video,
  Palette,
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Logo Design & Identity',
    description: 'Unique Logos, Brand Kits, Social Assets. Delivered With Editable Source Files (AI/PSD), JPG, PNG And Usage Guide.',
    features: ['Custom Logos', 'Brand Kits', 'Social Assets', 'Source Files'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'YouTube/TikTok Edits, Promos, Ads, Subtitles, Color & Sound Polish. Fast Delivery With Revisions Until You\'re Happy.',
    features: ['YouTube Edits', 'TikTok Content', 'Promos & Ads', 'Color Grading'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Clean, Responsive Sites Using HTML, CSS & JavaScript. Landing Pages, Portfolios, Agency Sites And App Promo Pages.',
    features: ['Landing Pages', 'Portfolios', 'Agency Sites', 'App Promos'],
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Video,
    title: 'Live Stream Assets',
    description: 'Professional overlays, alerts, panels, and graphics for live streaming platforms like Poppo Live, Bigo Live, Tango.',
    features: ['Overlays', 'Alerts', 'Panels', 'Emotes'],
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: ImageIcon,
    title: 'Thumbnails & Graphics',
    description: 'Eye-catching thumbnails for YouTube, social media posts, banners, and promotional materials that drive engagement.',
    features: ['YouTube Thumbnails', 'Social Media', 'Banners', 'Posters'],
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Brush,
    title: 'Brand Strategy',
    description: 'Complete branding solutions from concept to execution. Build a memorable brand that resonates with your audience.',
    features: ['Brand Guidelines', 'Visual Identity', 'Marketing Assets', 'Consulting'],
    gradient: 'from-blue-500 to-indigo-600',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-4 block">SERVICES</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and achieve your goals globally
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass hover-lift p-8 rounded-3xl h-full border border-transparent hover:border-primary/30 transition-all duration-500">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-primary relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Have a Project in Mind?
              </h3>
              <p className="text-white/80">
                Let's collaborate and take your ideas to the next level 🚀
              </p>
            </div>
            <motion.a
              href="https://wa.me/923400278535"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold whitespace-nowrap hover:shadow-xl transition-shadow"
            >
              WhatsApp Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
