import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Mic, Rocket, BarChart3, Briefcase } from 'lucide-react';
import StarField from './StarField';

const timelineData = [
  {
    year: '2017',
    icon: Smartphone,
    emoji: '📱',
    title: 'Exploration Phase',
    description: 'Started exploring social and messaging apps like IMO, Facebook Messenger, Instagram – discovering online communication and content creation.',
  },
  {
    year: '2020',
    icon: Mic,
    emoji: '🎤',
    title: 'Live Streaming Entry',
    description: 'Became a host on Likee app, gaining first experience in live streaming and audience engagement.',
  },
  {
    year: '2020 – 2021',
    icon: Rocket,
    emoji: '🚀',
    title: 'Short Video & Live Systems',
    description: 'Joined as host on Snack Video, learning more about short videos and live systems.',
  },
  {
    year: '2021 – 2022',
    icon: BarChart3,
    emoji: '📊',
    title: 'Algorithm & Growth Mastery',
    description: 'TikTok launched in Pakistan – explored deeply, understood algorithms, content strategies, and live features.',
  },
  {
    year: '2022 – Present',
    icon: Briefcase,
    emoji: '💼',
    title: 'Agency & Leadership',
    description: 'Used all knowledge to start my own live streaming agency. Recruited and managed hosts, built teams, specialized in platforms like Poppo Live, Bigo Live, Tango. Delivered 150+ projects for international clients in branding, web development, and video editing for live apps.',
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="relative py-32 overflow-hidden">
      {/* Light Background with soft blue tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <StarField count={20} />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 font-medium mb-4 px-5 py-2.5 rounded-full text-sm bg-gradient-to-r from-blue-500/10 to-green-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/30"
            animate={{ boxShadow: ['0 0 15px rgba(59, 130, 246, 0.2)', '0 0 25px rgba(59, 130, 246, 0.4)', '0 0 15px rgba(59, 130, 246, 0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ MY JOURNEY
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-800 dark:text-white">
            Professional Journey in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Live Streaming
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            From curious explorer to agency owner — here's how my story unfolded
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-blue-500 md:-translate-x-1/2" />

          {/* Timeline Items */}
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-green-500 border-4 border-white dark:border-slate-800 shadow-lg md:-translate-x-1/2 z-10"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 8px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div 
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.3)' 
                    }}
                  >
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.span 
                        className="text-2xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {item.emoji}
                      </motion.span>
                      <span className="px-3 py-1 text-sm font-bold bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-md">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {item.description}
                    </p>

                    {/* Icon */}
                    <motion.div 
                      className="absolute -right-3 -top-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ rotate: 15 }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.p 
            className="text-xl md:text-2xl font-display font-semibold max-w-3xl mx-auto leading-relaxed"
            animate={{ 
              textShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 30px rgba(34, 197, 94, 0.3)', '0 0 20px rgba(59, 130, 246, 0.3)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              "From explorer to agency owner – building the future of live streaming in Pakistan and worldwide. Insha'Allah top 1 soon! 🔥"
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
