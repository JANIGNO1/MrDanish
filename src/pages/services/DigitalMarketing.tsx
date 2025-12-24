import { TrendingUp } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const DigitalMarketing = () => {
  return (
    <ServicePageLayout
      title="Digital Marketing"
      subtitle="Drive Growth & Conversions"
      description="Results-driven digital marketing campaigns that generate leads, drive sales, and build brand awareness. From PPC to email marketing, we create strategies that deliver ROI."
      icon={<TrendingUp className="w-10 h-10 text-white" />}
      gradient="from-blue-500 to-indigo-600"
      benefits={[
        "Multi-channel marketing strategies for maximum reach",
        "PPC advertising on Google, Facebook, Instagram, and LinkedIn",
        "Email marketing automation and drip campaigns",
        "Conversion rate optimization for landing pages",
        "Detailed analytics and ROI tracking",
        "A/B testing for continuous improvement",
      ]}
      processSteps={[
        {
          title: "Market Research",
          description: "Analyze your market, competitors, and audience to identify the best marketing opportunities.",
        },
        {
          title: "Strategy Creation",
          description: "Develop a comprehensive marketing plan with channels, messaging, and budget allocation.",
        },
        {
          title: "Campaign Launch",
          description: "Execute campaigns across selected channels with optimized creative and targeting.",
        },
        {
          title: "Optimize & Scale",
          description: "Analyze performance data, optimize for better results, and scale winning campaigns.",
        },
      ]}
      caseStudies={[
        {
          title: "DTC Brand - USA",
          description: "Full-funnel digital marketing for direct-to-consumer health product launch.",
          result: "$1.2M in revenue within first 90 days of launch",
        },
        {
          title: "Real Estate - UAE",
          description: "Lead generation campaigns for luxury property developer targeting international buyers.",
          result: "500+ qualified leads at $25 per lead average",
        },
        {
          title: "SaaS Startup - UK",
          description: "Growth marketing strategy combining content, paid ads, and email automation.",
          result: "Reduced CAC by 60% while tripling signups",
        },
      ]}
      faqs={[
        {
          question: "What's your minimum ad budget requirement?",
          answer: "We recommend a minimum of $1,000/month in ad spend for meaningful results. Management fees are separate. We'll advise on optimal budget based on your goals.",
        },
        {
          question: "Which platforms do you advertise on?",
          answer: "We manage campaigns on Google Ads, Facebook/Instagram, LinkedIn, TikTok, Twitter, Pinterest, and programmatic display networks. Platform selection depends on your audience.",
        },
        {
          question: "How do you measure campaign success?",
          answer: "We track metrics aligned with your goals: leads, sales, ROAS, CPA, conversion rate, etc. You'll receive detailed reports showing exactly how your investment is performing.",
        },
        {
          question: "Do you create ad creative and copy?",
          answer: "Yes! Our service includes ad copywriting, graphic design, and video production for ads. We A/B test multiple variations to find top performers.",
        },
      ]}
    />
  );
};

export default DigitalMarketing;
