import { Video } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const LiveStreamingManagement = () => {
  return (
    <ServicePageLayout
      title="Live Streaming Management"
      subtitle="Professional Streaming Services"
      description="End-to-end live streaming solutions for entertainment platforms, business broadcasts, and personal brands. Trusted by leading live apps companies in Hong Kong, Singapore, and Malaysia."
      icon={<Video className="w-10 h-10 text-white" />}
      gradient="from-violet-500 to-purple-600"
      benefits={[
        "24/7 stream monitoring and technical support for uninterrupted broadcasts",
        "Advanced analytics and viewer engagement optimization strategies",
        "Multi-platform streaming setup (Poppo, Bigo, Tango, and more)",
        "Professional overlay and graphics design for premium stream aesthetics",
        "Audience growth strategies proven with 50+ global clients",
        "Real-time moderation and community management services",
      ]}
      processSteps={[
        {
          title: "Discovery & Planning",
          description: "We analyze your streaming goals, target audience, and platform preferences to create a customized streaming strategy.",
        },
        {
          title: "Technical Setup",
          description: "Complete setup of streaming software, overlays, alerts, and integrations tailored to your brand identity.",
        },
        {
          title: "Launch & Optimization",
          description: "Go live with professional support, then continuously optimize based on performance analytics and viewer feedback.",
        },
        {
          title: "Growth & Scaling",
          description: "Implement proven growth tactics to expand your audience and monetize your streaming presence effectively.",
        },
      ]}
      caseStudies={[
        {
          title: "Hong Kong Entertainment Agency",
          description: "Managed streaming operations for a major entertainment company, handling 50+ streamers across multiple platforms.",
          result: "300% increase in viewer engagement within 3 months",
        },
        {
          title: "Singapore Gaming Streamer",
          description: "Complete brand overhaul and streaming setup for an aspiring gaming content creator.",
          result: "Reached 10K followers in just 60 days",
        },
        {
          title: "Malaysian Music Artist",
          description: "Live concert streaming setup with professional production quality for virtual performances.",
          result: "5,000+ concurrent viewers on debut stream",
        },
      ]}
      faqs={[
        {
          question: "Which streaming platforms do you support?",
          answer: "We support all major platforms including Poppo Live, Bigo Live, Tango, Twitch, YouTube Live, Facebook Gaming, and custom RTMP solutions. Our expertise covers both Asian and Western streaming ecosystems.",
        },
        {
          question: "How quickly can you set up my stream?",
          answer: "Basic setups can be completed within 24-48 hours. Full professional packages with custom graphics and overlays typically take 5-7 business days.",
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes! We offer 24/7 technical support packages and monthly management plans to ensure your streams run smoothly. Our team is available across multiple time zones.",
        },
        {
          question: "What makes your streaming service different?",
          answer: "With experience managing streamers across Asia's top live streaming markets (Hong Kong, Singapore, Malaysia), we bring proven strategies and industry connections that accelerate growth.",
        },
      ]}
    />
  );
};

export default LiveStreamingManagement;
