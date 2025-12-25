import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  TrendingUp, 
  Users, 
  Globe, 
  Coins, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import StarField from './StarField';

const liveApps = [
  {
    name: 'ZERO LIVE',
    slug: 'zero-live',
    gradient: 'from-purple-600 to-pink-500',
    icon: '🎯',
    description: 'Premium live streaming platform with top earning potential',
    features: ['High Commissions', 'Global Reach', 'Premium Hosts'],
  },
  {
    name: 'POPPO LIVE',
    slug: 'poppo-live',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🌸',
    description: 'Asia\'s leading social entertainment platform',
    features: ['Agency Support', 'Coin System', '24/7 Events'],
  },
  {
    name: 'BIGO LIVE',
    slug: 'bigo-live',
    gradient: 'from-blue-500 to-cyan-400',
    icon: '🎬',
    description: 'World\'s largest live streaming community',
    features: ['400M+ Users', 'Multi-Guest', 'Gaming'],
  },
  {
    name: 'JOYO LIVE',
    slug: 'joyo-live',
    gradient: 'from-orange-500 to-yellow-400',
    icon: '🌟',
    description: 'Fast-growing platform with premium features',
    features: ['New Creators', 'Quick Monetization', 'Support'],
  },
  {
    name: 'BUZZCAST LIVE',
    slug: 'buzzcast-live',
    gradient: 'from-green-500 to-emerald-400',
    icon: '🐝',
    description: 'Innovative live platform for content creators',
    features: ['Viral Content', 'Community', 'Rewards'],
  },
  {
    name: 'LOLLIPOP LIVE',
    slug: 'lollipop-live',
    gradient: 'from-pink-400 to-purple-500',
    icon: '🍭',
    description: 'Fun and engaging social streaming app',
    features: ['Entertainment', 'Gifts', 'Social'],
  },
  {
    name: 'BOOM LIVE',
    slug: 'boom-live',
    gradient: 'from-red-500 to-orange-500',
    icon: '💥',
    description: 'Explosive growth platform for streamers',
    features: ['Trending', 'High Traffic', 'Agency'],
  },
  {
    name: 'TIKTOK LIVE',
    slug: 'tiktok-live',
    gradient: 'from-black to-pink-500',
    icon: '📱',
    description: 'Viral short-form video and live streaming',
    features: ['Viral Reach', 'Young Audience', 'Trending'],
  },
  {
    name: 'SNACK VIDEO LIVE',
    slug: 'snack-video-live',
    gradient: 'from-yellow-500 to-red-500',
    icon: '🍿',
    description: 'Short video platform with live features',
    features: ['Viral', 'Monetization', 'Community'],
  },
  {
    name: 'LIKEE LIVE',
    slug: 'likee-live',
    gradient: 'from-cyan-500 to-blue-500',
    icon: '❤️',
    description: 'Creative video platform with live streaming',
    features: ['Effects', 'Creative', 'Global'],
  },
  {
    name: 'TANGO LIVE',
    slug: 'tango-live',
    gradient: 'from-orange-600 to-red-600',
    icon: '💃',
    description: 'Social live streaming and video chat',
    features: ['Video Chat', 'Social', 'Entertainment'],
  },
  {
    name: 'SOYA LIVE',
    slug: 'soya-live',
    gradient: 'from-green-600 to-teal-500',
    icon: '🌿',
    description: 'Rising star in live streaming industry',
    features: ['New Platform', 'Growth', 'Support'],
  },
];

const LiveAppsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="live-apps" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <StarField count={80} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.2)",
                "0 0 40px rgba(59,130,246,0.4)",
                "0 0 20px rgba(59,130,246,0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Play className="w-4 h-4 inline mr-2" />
            Live Streaming Expertise
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Master of </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Live Streaming Apps
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Expert management, agency setup, coins selling, and hosting services for all major live streaming platforms worldwide
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: Globe, label: '12+ Platforms', value: 'Managed' },
              { icon: Users, label: '500+ Hosts', value: 'Supported' },
              { icon: Coins, label: '$100K+', value: 'Processed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full glass border border-primary/20"
              >
                <stat.icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="font-bold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {liveApps.map((app, index) => (
            <motion.div
              key={app.slug}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={`/live-apps/${app.slug}`} className="block group h-full">
                <div className="relative h-full">
                  {/* Glow on hover */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${app.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative h-full glass-card p-5 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    {/* Shine sweep */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${app.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {app.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {app.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {app.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow"
          >
            <Zap className="w-5 h-5" />
            Start Your Live Streaming Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveAppsSection;
