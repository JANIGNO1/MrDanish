import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Play, 
  Coins, 
  Users, 
  Globe, 
  CheckCircle, 
  TrendingUp,
  MessageCircle,
  Shield,
  Zap,
  Award,
  HelpCircle
} from 'lucide-react';
import StarField from '@/components/portfolio/StarField';

const liveAppsData: Record<string, {
  name: string;
  icon: string;
  gradient: string;
  description: string;
  overview: string;
  howItWorks: string[];
  monetization: string[];
  agencyModel: string[];
  coinsSystem: string[];
  hostingSupport: string[];
  globalAvailability: string[];
  whyDanish: string[];
  faqs: { q: string; a: string }[];
}> = {
  'zero-live': {
    name: 'ZERO LIVE',
    icon: '🎯',
    gradient: 'from-purple-600 to-pink-500',
    description: 'Premium live streaming platform with top earning potential',
    overview: 'ZERO LIVE is a premium live streaming platform that connects talented hosts with audiences worldwide. Known for its high commission rates and professional support, it\'s one of the fastest-growing platforms in the industry.',
    howItWorks: [
      'Download the app and create your account',
      'Apply to become a host or join an agency',
      'Start streaming and engaging with your audience',
      'Receive virtual gifts and convert to real earnings',
      'Withdraw your earnings through multiple payment methods'
    ],
    monetization: [
      'Virtual gifts from viewers (converted to diamonds/coins)',
      'Hourly bonuses for consistent streaming',
      'Level-up rewards and achievements',
      'Special event bonuses and competitions',
      'Agency commissions and team bonuses'
    ],
    agencyModel: [
      'Recruit and manage talented hosts',
      'Earn commission on host earnings',
      'Access exclusive agency tools and analytics',
      'Priority support and dedicated account manager',
      'Higher revenue share for top-performing agencies'
    ],
    coinsSystem: [
      'Users purchase coins to send gifts',
      'Hosts receive diamonds from gifts',
      'Diamonds convert to real money',
      'Multiple withdrawal options available',
      'Secure and transparent transaction system'
    ],
    hostingSupport: [
      '24/7 technical support',
      'Streaming optimization guidance',
      'Content strategy consultation',
      'Equipment recommendations',
      'Performance analytics and insights'
    ],
    globalAvailability: [
      'Available in 100+ countries',
      'Multi-language support',
      'Localized payment methods',
      'Regional content moderation',
      'Global audience reach'
    ],
    whyDanish: [
      '#1 Worldwide Expert in Live Streaming',
      'Official coins seller with competitive rates',
      'Agency setup and management expertise',
      'Direct connections with platform officials',
      '24/7 support for hosts and agencies',
      'Proven track record with 150+ successful projects'
    ],
    faqs: [
      { q: 'How much can I earn on ZERO LIVE?', a: 'Earnings vary based on streaming hours, audience engagement, and gifts received. Top hosts can earn $5,000+ monthly.' },
      { q: 'Do I need an agency to start?', a: 'No, but joining an agency like ours provides better support, higher commissions, and growth opportunities.' },
      { q: 'How do I buy coins?', a: 'Contact Danish Jani for the best rates on official coins with instant delivery and secure transactions.' },
    ]
  },
  'poppo-live': {
    name: 'POPPO LIVE',
    icon: '🌸',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Asia\'s leading social entertainment platform',
    overview: 'POPPO LIVE is Asia\'s premier social entertainment platform, connecting millions of users for live streaming, video chat, and virtual gifting. Known for its vibrant community and generous reward system.',
    howItWorks: [
      'Register and complete profile verification',
      'Join as a host or viewer',
      'Build your audience through consistent streaming',
      'Receive gifts and participate in events',
      'Grow your community and earnings'
    ],
    monetization: [
      'Gift-based earnings with high conversion rates',
      'Daily and weekly streaming bonuses',
      'Competition prizes and event rewards',
      'Referral commissions',
      'VIP host benefits and exclusives'
    ],
    agencyModel: [
      'Comprehensive agency management system',
      'Host recruitment and training support',
      'Revenue sharing and bonus structures',
      'Exclusive agency events and competitions',
      'Dedicated agency success manager'
    ],
    coinsSystem: [
      'Beans are the virtual currency',
      'Users buy beans to send gifts',
      'Hosts earn diamonds from gifts',
      'Quick withdrawal processing',
      'Multiple payment gateway support'
    ],
    hostingSupport: [
      'Professional streaming guidance',
      'Content creation tips',
      'Audience engagement strategies',
      'Technical troubleshooting',
      'Career development planning'
    ],
    globalAvailability: [
      'Strong presence in Southeast Asia',
      'Expanding to Middle East and Europe',
      'Available in 50+ countries',
      'Regional event support',
      'Local community managers'
    ],
    whyDanish: [
      'Certified Poppo Live agency owner',
      'Direct partnership with platform',
      'Best coin rates guaranteed',
      'Experienced host management',
      'Success stories from 100+ hosts',
      'Complete agency setup assistance'
    ],
    faqs: [
      { q: 'What makes POPPO LIVE different?', a: 'POPPO LIVE offers one of the highest commission rates in the industry with excellent community support.' },
      { q: 'Can I transfer from another platform?', a: 'Yes! We help hosts transition smoothly and often secure better starting positions.' },
      { q: 'How fast is coin delivery?', a: 'Instant delivery for all coin purchases through our official channels.' },
    ]
  },
  'bigo-live': {
    name: 'BIGO LIVE',
    icon: '🎬',
    gradient: 'from-blue-500 to-cyan-400',
    description: 'World\'s largest live streaming community',
    overview: 'BIGO LIVE is the world\'s leading live streaming platform with over 400 million users globally. It offers diverse content from entertainment to gaming, making it perfect for all types of creators.',
    howItWorks: [
      'Download BIGO LIVE app',
      'Create and verify your account',
      'Start streaming or join PK battles',
      'Build followers and receive beans',
      'Convert earnings and withdraw'
    ],
    monetization: [
      'Bean-based gift system',
      'PK battle rewards',
      'Family/clan bonuses',
      'Official broadcaster program',
      'Brand partnership opportunities'
    ],
    agencyModel: [
      'Official agency partnership available',
      'Host signing bonuses',
      'Monthly performance rewards',
      'Agency ranking competitions',
      'Premium support access'
    ],
    coinsSystem: [
      'Diamonds are the earning currency',
      'Beans convert to diamonds',
      'Daily withdrawal available',
      'Multiple currency support',
      'Secure transaction system'
    ],
    hostingSupport: [
      'Official broadcaster training',
      'Content strategy support',
      'Technical assistance',
      'Growth coaching',
      'Community building guidance'
    ],
    globalAvailability: [
      '150+ countries coverage',
      'Multi-language interface',
      'Regional servers for low latency',
      'Local payment methods',
      'Global trending features'
    ],
    whyDanish: [
      'Expert in BIGO ecosystem',
      'Agency setup specialist',
      'Competitive coin pricing',
      'Host training programs',
      'Platform optimization strategies',
      'Direct official connections'
    ],
    faqs: [
      { q: 'Is BIGO LIVE good for beginners?', a: 'Yes! BIGO has excellent beginner support and a large audience base to help you grow.' },
      { q: 'What content works best?', a: 'Entertainment, talent shows, and gaming are most popular. We guide you to find your niche.' },
      { q: 'How do agencies help?', a: 'Agencies provide support, training, and often negotiate better terms with the platform.' },
    ]
  },
  'joyo-live': {
    name: 'JOYO LIVE',
    icon: '🌟',
    gradient: 'from-orange-500 to-yellow-400',
    description: 'Fast-growing platform with premium features',
    overview: 'JOYO LIVE is an emerging live streaming platform offering competitive rates and excellent support for new creators. Perfect for those looking to start their streaming career.',
    howItWorks: ['Register and verify', 'Complete onboarding', 'Start streaming', 'Engage audience', 'Earn and withdraw'],
    monetization: ['Gift earnings', 'Streaming bonuses', 'Event prizes', 'Referral rewards', 'Level bonuses'],
    agencyModel: ['Agency registration', 'Host management', 'Commission system', 'Growth tools', 'Analytics dashboard'],
    coinsSystem: ['Virtual currency', 'Gift conversion', 'Quick payouts', 'Secure system', 'Multiple methods'],
    hostingSupport: ['24/7 support', 'Training materials', 'Tech assistance', 'Growth coaching', 'Community help'],
    globalAvailability: ['Growing globally', 'Asia focus', 'Expanding markets', 'Local support', 'Regional events'],
    whyDanish: ['Platform expert', 'Agency services', 'Coin selling', 'Host support', 'Growth strategies', 'Official partner'],
    faqs: [
      { q: 'Is JOYO LIVE reliable?', a: 'Yes, it\'s backed by a reputable company with secure payment systems.' },
      { q: 'What are the earning potentials?', a: 'New hosts can earn $500-2000 monthly with consistent effort.' },
      { q: 'How to get started?', a: 'Contact us for the fastest onboarding and best agency terms.' },
    ]
  },
  'buzzcast-live': {
    name: 'BUZZCAST LIVE',
    icon: '🐝',
    gradient: 'from-green-500 to-emerald-400',
    description: 'Innovative live platform for content creators',
    overview: 'BUZZCAST LIVE brings innovation to live streaming with unique features and community-focused approach.',
    howItWorks: ['Sign up', 'Verify profile', 'Go live', 'Build community', 'Monetize'],
    monetization: ['Gifts', 'Subscriptions', 'Tips', 'Events', 'Partnerships'],
    agencyModel: ['Agency tools', 'Host network', 'Revenue share', 'Support team', 'Growth programs'],
    coinsSystem: ['Buzzbucks currency', 'Gift system', 'Conversion rates', 'Withdrawals', 'Security'],
    hostingSupport: ['Help center', 'Live support', 'Tutorials', 'Coaching', 'Resources'],
    globalAvailability: ['Multi-region', 'Localization', 'Global reach', 'Local teams', 'Events'],
    whyDanish: ['Expertise', 'Connections', 'Support', 'Rates', 'Success', 'Service'],
    faqs: [
      { q: 'What makes BUZZCAST unique?', a: 'Innovative features and strong community focus.' },
      { q: 'Earning potential?', a: 'Competitive rates with growth opportunities.' },
      { q: 'Support available?', a: '24/7 support through Danish Jani services.' },
    ]
  },
  'lollipop-live': {
    name: 'LOLLIPOP LIVE',
    icon: '🍭',
    gradient: 'from-pink-400 to-purple-500',
    description: 'Fun and engaging social streaming app',
    overview: 'LOLLIPOP LIVE offers a fun, colorful streaming experience perfect for entertainment-focused creators.',
    howItWorks: ['Download app', 'Create profile', 'Start streaming', 'Receive gifts', 'Cash out'],
    monetization: ['Gift income', 'Bonuses', 'Events', 'Referrals', 'VIP perks'],
    agencyModel: ['Partner program', 'Host management', 'Tools', 'Analytics', 'Support'],
    coinsSystem: ['Candy coins', 'Gifting', 'Conversion', 'Payouts', 'Security'],
    hostingSupport: ['Support team', 'Training', 'Resources', 'Coaching', 'Community'],
    globalAvailability: ['Growing presence', 'Multi-language', 'Regional focus', 'Local support', 'Events'],
    whyDanish: ['Platform knowledge', 'Agency setup', 'Coin services', 'Host support', 'Growth help', 'Official ties'],
    faqs: [
      { q: 'Who is LOLLIPOP LIVE for?', a: 'Creators who love fun, entertaining content.' },
      { q: 'How much can I make?', a: 'Varies by engagement, top hosts earn significantly.' },
      { q: 'Need help starting?', a: 'Contact Danish for complete setup assistance.' },
    ]
  },
  'boom-live': {
    name: 'BOOM LIVE',
    icon: '💥',
    gradient: 'from-red-500 to-orange-500',
    description: 'Explosive growth platform for streamers',
    overview: 'BOOM LIVE is known for rapid growth opportunities and excellent earning potential for dedicated streamers.',
    howItWorks: ['Register', 'Verify', 'Stream', 'Engage', 'Earn'],
    monetization: ['Gifts', 'Bonuses', 'Competitions', 'Referrals', 'Levels'],
    agencyModel: ['Agency system', 'Recruitment', 'Management', 'Analytics', 'Growth'],
    coinsSystem: ['Boom coins', 'Gift system', 'Exchange', 'Withdrawal', 'Security'],
    hostingSupport: ['24/7 help', 'Training', 'Tech support', 'Coaching', 'Resources'],
    globalAvailability: ['Expanding', 'Multi-region', 'Local support', 'Events', 'Communities'],
    whyDanish: ['Expert services', 'Agency help', 'Coins', 'Support', 'Growth', 'Connections'],
    faqs: [
      { q: 'Is BOOM LIVE growing?', a: 'Yes, one of the fastest-growing platforms.' },
      { q: 'Earnings?', a: 'Competitive with excellent bonus structures.' },
      { q: 'Getting started?', a: 'We provide complete onboarding support.' },
    ]
  },
  'tiktok-live': {
    name: 'TIKTOK LIVE',
    icon: '📱',
    gradient: 'from-black to-pink-500',
    description: 'Viral short-form video and live streaming',
    overview: 'TikTok LIVE leverages the massive TikTok platform for live streaming, offering unparalleled viral potential.',
    howItWorks: ['Have TikTok account', 'Meet follower requirement', 'Enable live feature', 'Go live', 'Receive gifts'],
    monetization: ['Gift diamonds', 'Creator fund', 'Brand deals', 'Tips', 'Events'],
    agencyModel: ['Creator networks', 'Management', 'Brand connections', 'Growth support', 'Analytics'],
    coinsSystem: ['TikTok coins', 'Gift conversion', 'Diamond payouts', 'Withdrawals', 'Secure'],
    hostingSupport: ['Creator support', 'Resources', 'Training', 'Community', 'Events'],
    globalAvailability: ['Worldwide', '150+ countries', 'Localized', 'Global trends', 'Local events'],
    whyDanish: ['TikTok expertise', 'Growth strategies', 'Monetization help', 'Agency services', 'Viral tactics', 'Support'],
    faqs: [
      { q: 'Followers needed for live?', a: 'Usually 1000+ followers to unlock live feature.' },
      { q: 'Can you help grow followers?', a: 'Yes, we provide growth strategies and support.' },
      { q: 'Live streaming tips?', a: 'We offer complete TikTok Live optimization guidance.' },
    ]
  },
  'snack-video-live': {
    name: 'SNACK VIDEO LIVE',
    icon: '🍿',
    gradient: 'from-yellow-500 to-red-500',
    description: 'Short video platform with live features',
    overview: 'Snack Video combines short-form content with live streaming for a unique creator experience.',
    howItWorks: ['Download Snack Video', 'Build following', 'Unlock live', 'Stream', 'Monetize'],
    monetization: ['Live gifts', 'Video rewards', 'Events', 'Partnerships', 'Bonuses'],
    agencyModel: ['Creator program', 'Agency support', 'Management', 'Tools', 'Growth'],
    coinsSystem: ['Snack coins', 'Gift system', 'Conversion', 'Payouts', 'Security'],
    hostingSupport: ['Help center', 'Training', 'Support', 'Resources', 'Community'],
    globalAvailability: ['Asia focus', 'Expanding', 'Local markets', 'Regional support', 'Events'],
    whyDanish: ['Platform expert', 'Growth help', 'Monetization', 'Agency', 'Support', 'Services'],
    faqs: [
      { q: 'Different from TikTok?', a: 'Similar concept but different audience and features.' },
      { q: 'Earning potential?', a: 'Good for creators in supported regions.' },
      { q: 'Support available?', a: 'Full support through our services.' },
    ]
  },
  'likee-live': {
    name: 'LIKEE LIVE',
    icon: '❤️',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Creative video platform with live streaming',
    overview: 'Likee combines creative video tools with live streaming, perfect for creative content makers.',
    howItWorks: ['Join Likee', 'Create content', 'Build audience', 'Go live', 'Earn'],
    monetization: ['Live gifts', 'Creator rewards', 'Events', 'Partnerships', 'Levels'],
    agencyModel: ['Agency program', 'Creator management', 'Support', 'Analytics', 'Growth'],
    coinsSystem: ['Likee coins', 'Diamonds', 'Conversion', 'Withdrawal', 'Secure'],
    hostingSupport: ['Support', 'Training', 'Resources', 'Help', 'Community'],
    globalAvailability: ['Global platform', 'Multi-language', 'Regional events', 'Local support', 'Markets'],
    whyDanish: ['Likee expertise', 'Agency services', 'Growth help', 'Coins', 'Support', 'Success'],
    faqs: [
      { q: 'Best for what content?', a: 'Creative, effect-heavy content thrives on Likee.' },
      { q: 'Earnings?', a: 'Competitive with good bonus structures.' },
      { q: 'Help available?', a: 'Full services available through Danish Jani.' },
    ]
  },
  'tango-live': {
    name: 'TANGO LIVE',
    icon: '💃',
    gradient: 'from-orange-600 to-red-600',
    description: 'Social live streaming and video chat',
    overview: 'Tango Live offers social streaming with video chat features, creating intimate connections with audiences.',
    howItWorks: ['Download Tango', 'Create profile', 'Start streaming', 'Chat with viewers', 'Earn'],
    monetization: ['Gift earnings', 'Premium features', 'Events', 'Referrals', 'VIP'],
    agencyModel: ['Agency partnership', 'Host management', 'Tools', 'Support', 'Growth'],
    coinsSystem: ['Tango coins', 'Gift system', 'Conversion', 'Payouts', 'Security'],
    hostingSupport: ['Help desk', 'Training', 'Tech support', 'Coaching', 'Resources'],
    globalAvailability: ['Worldwide', 'Multi-region', 'Local payment', 'Support', 'Events'],
    whyDanish: ['Tango expert', 'Agency setup', 'Coin services', 'Host support', 'Growth', 'Official'],
    faqs: [
      { q: 'What makes Tango unique?', a: 'Strong social features with video chat capabilities.' },
      { q: 'Good for new streamers?', a: 'Yes, with proper guidance and support.' },
      { q: 'How to maximize earnings?', a: 'Contact us for personalized strategies.' },
    ]
  },
  'soya-live': {
    name: 'SOYA LIVE',
    icon: '🌿',
    gradient: 'from-green-600 to-teal-500',
    description: 'Rising star in live streaming industry',
    overview: 'SOYA LIVE is an emerging platform offering fresh opportunities for new and experienced streamers alike.',
    howItWorks: ['Sign up', 'Complete verification', 'Start streaming', 'Build community', 'Monetize'],
    monetization: ['Gift earnings', 'Bonuses', 'Events', 'Referrals', 'Levels'],
    agencyModel: ['Agency support', 'Host recruitment', 'Management tools', 'Revenue share', 'Growth'],
    coinsSystem: ['Soya coins', 'Gift exchange', 'Conversion', 'Withdrawal', 'Security'],
    hostingSupport: ['Support team', 'Training', 'Resources', 'Coaching', 'Community'],
    globalAvailability: ['Growing markets', 'Regional focus', 'Expansion', 'Local support', 'Events'],
    whyDanish: ['Early expert', 'Agency setup', 'Coins', 'Support', 'Growth strategies', 'Partnerships'],
    faqs: [
      { q: 'Is SOYA LIVE new?', a: 'Relatively new but growing rapidly with great potential.' },
      { q: 'Worth joining?', a: 'Great opportunity for early adopters.' },
      { q: 'Support?', a: 'Full support and guidance available.' },
    ]
  },
};

const LiveAppPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const app = slug ? liveAppsData[slug] : null;

  if (!app) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">App Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go Back Home</Link>
        </div>
      </div>
    );
  }

  const sections = [
    { icon: Play, title: 'How It Works', items: app.howItWorks },
    { icon: Coins, title: 'Monetization', items: app.monetization },
    { icon: Users, title: 'Agency Model', items: app.agencyModel },
    { icon: TrendingUp, title: 'Coins System', items: app.coinsSystem },
    { icon: Shield, title: 'Hosting Support', items: app.hostingSupport },
    { icon: Globe, title: 'Global Availability', items: app.globalAvailability },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className={`relative py-32 overflow-hidden bg-gradient-to-br ${app.gradient}`}>
        <StarField count={100} />
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/#live-apps"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Live Apps
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-6xl mb-6 block">{app.icon}</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              {app.name}
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              {app.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-background rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow"
              >
                Get Started Now
              </a>
              <a
                href="#why-danish"
                className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                Why Choose Danish?
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About {app.name}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {app.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${app.gradient} flex items-center justify-center mb-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Danish */}
      <section id="why-danish" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose <span className="text-primary">Danish Jani</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for {app.name} success
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {app.whyDanish.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {app.faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-primary/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold">{faq.q}</h3>
                </div>
                <p className="text-muted-foreground pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start with {app.name}?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact Danish Jani today for expert guidance, agency setup, coin services, and 24/7 support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/923400278535"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 bg-gradient-to-r ${app.gradient} text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow`}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
              <Link
                to="/#contact"
                className="px-8 py-4 bg-secondary text-foreground rounded-full font-semibold border border-border hover:bg-secondary/80 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LiveAppPage;
