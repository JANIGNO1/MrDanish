import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Brush, 
  Film, 
  Smartphone, 
  Megaphone, 
  Layers,
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites built with modern technologies. Responsive, fast, and SEO-optimized.',
    features: ['HTML/CSS/JS', 'React', 'Landing Pages', 'Web Apps'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Brush,
    title: 'Graphic Design',
    description: 'Eye-catching visuals that communicate your brand message effectively.',
    features: ['Logos', 'Thumbnails', 'Social Media', 'Branding'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Professional video editing that tells compelling stories and engages viewers.',
    features: ['Promo Videos', 'Reels', 'Intros', 'Motion Graphics'],
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Smartphone,
    title: 'Live Stream Tools',
    description: 'Specialized tools and assets for live streaming agencies and hosts.',
    features: ['Overlays', 'Alerts', 'Panels', 'Emotes'],
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: Megaphone,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive action.',
    features: ['Lead Gen', 'Product Launch', 'Events', 'Agency Pages'],
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and delightful experiences.',
    features: ['Wireframes', 'Prototypes', 'User Flows', 'Design Systems'],
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
            Comprehensive digital solutions tailored to elevate your brand and achieve your goals
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
                <p className="text-muted-foreground mb-6 leading-relaxed">
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
                Let's work together to bring your vision to life
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold whitespace-nowrap hover:shadow-xl transition-shadow"
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
