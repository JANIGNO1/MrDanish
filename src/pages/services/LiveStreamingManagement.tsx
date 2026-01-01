import { Video } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const LiveStreamingManagement = () => {
  return (
    <ServicePageLayout
      title="Live Streaming Management"
      subtitle="Professional Streaming Services"
      description="End-to-end live streaming solutions for entertainment platforms, business broadcasts, and personal brands. Trusted by leading live apps companies in Hong Kong, Singapore, and Malaysia. Expert management for Poppo Live, Bigo Live, TikTok Live, and 10+ platforms."
      metaTitle="Live Streaming Management Services 2025 | Danish Jani - #1 Global Expert | Poppo Live, Bigo Live Agency"
      metaDescription="Professional live streaming management by Danish Jani - #1 Global Live Streaming Expert. Agency setup, host management, coins selling for Poppo Live, Bigo Live, TikTok Live. Trusted by 50+ clients in Hong Kong, Singapore, Malaysia. 24/7 support."
      keywords={['live streaming management', 'Poppo Live agency', 'Bigo Live host', 'TikTok Live management', 'live streaming expert', 'agency setup', 'host recruitment', 'coins selling', 'worldwide hosting', 'live app monetization']}
      icon={<Video className="w-10 h-10 text-white" />}
      gradient="from-violet-500 to-purple-600"
      benefits={[
        "24/7 stream monitoring and technical support for uninterrupted broadcasts",
        "Advanced analytics and viewer engagement optimization strategies",
        "Multi-platform streaming setup (Poppo Live, Bigo Live, TikTok Live, Zero Live, Joyo Live, and more)",
        "Professional overlay and graphics design for premium stream aesthetics",
        "Audience growth strategies proven with 50+ global clients in Hong Kong, Singapore, Malaysia",
        "Real-time moderation and community management services",
        "Coins system optimization and monetization guidance",
        "Super Admin level expertise for agency management",
        "Host recruitment and training programs",
      ]}
      processSteps={[
        {
          title: "Discovery & Platform Strategy",
          description: "We analyze your streaming goals, target audience, and platform preferences (Poppo Live, Bigo Live, TikTok Live, etc.) to create a customized streaming strategy.",
        },
        {
          title: "Agency Setup & Technical Configuration",
          description: "Complete setup of streaming software, overlays, alerts, and agency integrations tailored to your brand identity. Super Admin level configuration.",
        },
        {
          title: "Host Onboarding & Training",
          description: "Professional host recruitment, training, and performance optimization. Monetization strategies and coins system guidance.",
        },
        {
          title: "Launch, Monetization & Scaling",
          description: "Go live with professional support, then continuously optimize based on performance analytics. Scale to worldwide hosting with our proven growth tactics.",
        },
      ]}
      caseStudies={[
        {
          title: "Hong Kong Entertainment Agency",
          description: "Managed streaming operations for a major entertainment company on Poppo Live and Bigo Live, handling 50+ streamers across multiple platforms.",
          result: "300% increase in viewer engagement and $50K+ monthly revenue within 3 months",
        },
        {
          title: "Singapore Gaming Streamer",
          description: "Complete brand overhaul and streaming setup for an aspiring gaming content creator on TikTok Live and Bigo Live.",
          result: "Reached 10K followers in just 60 days with Super Admin support",
        },
        {
          title: "Malaysian Music Artist",
          description: "Live concert streaming setup with professional production quality for virtual performances on multiple live apps.",
          result: "5,000+ concurrent viewers on debut stream, established as top host",
        },
      ]}
      faqs={[
        {
          question: "Which live streaming platforms do you support?",
          answer: "We support all major platforms including Poppo Live, Bigo Live, TikTok Live, Zero Live, Joyo Live, Buzzcast Live, Lollipop Live, Boom Live, Snack Video Live, Likee Live, Tango Live, and Soya Live. Our Super Admin expertise covers both Asian and Western streaming ecosystems.",
        },
        {
          question: "How quickly can you set up my live streaming agency?",
          answer: "Basic agency setups can be completed within 24-48 hours. Full professional packages with custom graphics, host recruitment, and coins system setup typically take 5-7 business days.",
        },
        {
          question: "Do you provide ongoing support and host management?",
          answer: "Yes! We offer 24/7 technical support packages and monthly management plans. Our Super Admin team is available across multiple time zones for continuous host support and agency management.",
        },
        {
          question: "What makes your live streaming service different?",
          answer: "With experience managing streamers across Asia's top live streaming markets (Hong Kong, Singapore, Malaysia) as a Global Manager and Super Admin, we bring proven strategies, coins system expertise, and industry connections that accelerate growth and monetization.",
        },
        {
          question: "How much can hosts earn on live streaming apps?",
          answer: "Earnings vary by platform and performance. Top hosts on Poppo Live, Bigo Live, and TikTok Live can earn $500-$5000+ weekly. We provide monetization optimization to maximize your earning potential.",
        },
      ]}
    />
  );
};

export default LiveStreamingManagement;
