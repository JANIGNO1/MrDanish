import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Building2, 
  Coins, 
  Server,
  Palette,
  Film,
  Globe,
  Share2,
  Search,
  TrendingUp,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import TrustedBySection from './TrustedBySection';

const services = [
  {
    icon: Video,
    title: 'Live Streaming Management',
    description: 'End-to-end streaming solutions for Poppo, Bigo, Tango & more. Trusted by agencies in Hong Kong, Singapore & Malaysia.',
    gradient: 'from-violet-500 to-purple-600',
    link: '/services/live-streaming-management',
  },
  {
    icon: Building2,
    title: 'Agency Setup & Management',
    description: 'Build and scale successful creative agencies. From registration to first client with Super Admin control.',
    gradient: 'from-pink-500 to-rose-600',
    link: '/services/agency-setup',
  },
  {
    icon: Coins,
    title: 'Official Coins Selling',
    description: 'Secure crypto & virtual currency services. Official seller for live streaming platforms worldwide.',
    gradient: 'from-amber-500 to-orange-600',
    link: '/services/coins-selling',
  },
  {
    icon: Server,
    title: 'Web Hosting Worldwide',
    description: 'Enterprise-grade hosting with 99.9% uptime. Global CDN, SSL, and 24/7 support included.',
    gradient: 'from-cyan-500 to-teal-600',
    link: '/services/hosting-worldwide',
  },
  {
    icon: Palette,
    title: 'Graphic Design & Branding',
    description: 'Premium logos, brand identities & marketing materials. Source files included with unlimited revisions.',
    gradient: 'from-violet-500 to-purple-600',
    link: '/services/graphic-design',
  },
  {
    icon: Film,
    title: 'Professional Video Editing',
    description: 'Cinematic editing with Premiere Pro & After Effects. Motion graphics, color grading & sound design.',
    gradient: 'from-pink-500 to-rose-600',
    link: '/services/video-editing',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern React websites & web apps. SEO-optimized, responsive, and lightning-fast performance.',
    gradient: 'from-cyan-500 to-teal-600',
    link: '/services/web-development',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Grow your presence on Instagram, TikTok, LinkedIn & more. Content creation & community management.',
    gradient: 'from-pink-500 to-orange-500',
    link: '/services/social-media-management',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost search rankings with data-driven strategies. Technical SEO, content & link building.',
    gradient: 'from-emerald-500 to-green-600',
    link: '/services/seo-optimization',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'ROI-focused campaigns across PPC, email & social. Lead generation & conversion optimization.',
    gradient: 'from-blue-500 to-indigo-600',
    link: '/services/digital-marketing',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="services" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10" ref={ref}>
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
              Comprehensive digital solutions trusted by clients in 12+ countries worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <Link to={service.link} className="block h-full">
                  <div className="glass hover-lift p-6 rounded-3xl h-full border border-transparent hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 relative`}>
                      <service.icon className="w-7 h-7 text-white" />
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-primary relative overflow-hidden"
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
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold whitespace-nowrap hover:shadow-xl transition-shadow inline-flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                WhatsApp Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </>
  );
};

export default ServicesSection;
