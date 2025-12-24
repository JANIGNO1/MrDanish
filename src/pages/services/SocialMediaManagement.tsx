import { Share2 } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const SocialMediaManagement = () => {
  return (
    <ServicePageLayout
      title="Social Media Management"
      subtitle="Grow Your Online Presence"
      description="Strategic social media management that builds engaged communities and drives real business results. From content creation to analytics, we handle your complete social presence."
      icon={<Share2 className="w-10 h-10 text-white" />}
      gradient="from-pink-500 to-orange-500"
      benefits={[
        "Custom content calendars tailored to your brand voice",
        "Engaging content creation (graphics, videos, captions)",
        "Community management and audience engagement",
        "Performance analytics and monthly reporting",
        "Paid advertising management and optimization",
        "Multi-platform strategy (Instagram, LinkedIn, X, TikTok)",
      ]}
      processSteps={[
        {
          title: "Audit & Strategy",
          description: "Analyze your current social presence and create a customized growth strategy aligned with your goals.",
        },
        {
          title: "Content Planning",
          description: "Develop monthly content calendars with themes, posts, and engagement tactics for each platform.",
        },
        {
          title: "Creation & Publishing",
          description: "Create high-quality content and publish at optimal times for maximum engagement.",
        },
        {
          title: "Analyze & Optimize",
          description: "Track performance metrics, provide insights, and continuously refine strategy for better results.",
        },
      ]}
      caseStudies={[
        {
          title: "Fashion Brand - UK",
          description: "Full Instagram management for boutique fashion brand targeting Gen Z audience.",
          result: "Grew from 5K to 100K followers in 8 months",
        },
        {
          title: "B2B SaaS - USA",
          description: "LinkedIn strategy and content for enterprise software company to generate leads.",
          result: "400% increase in inbound leads from social",
        },
        {
          title: "Personal Brand - Influencer",
          description: "Multi-platform management for lifestyle influencer across Instagram, TikTok, and YouTube.",
          result: "1M+ combined followers, multiple brand partnerships",
        },
      ]}
      faqs={[
        {
          question: "Which social platforms do you manage?",
          answer: "We manage all major platforms including Instagram, TikTok, LinkedIn, X (Twitter), Facebook, Pinterest, and YouTube. We recommend platforms based on your target audience.",
        },
        {
          question: "How often will you post?",
          answer: "Posting frequency depends on your package and platform. Typically 5-7 posts per week on primary platforms, with stories and engagement activities daily.",
        },
        {
          question: "Do you handle paid advertising?",
          answer: "Yes! We offer social media advertising management including strategy, ad creation, targeting, and optimization. Ad spend is separate from management fees.",
        },
        {
          question: "How do you measure success?",
          answer: "We track KPIs including follower growth, engagement rate, reach, website traffic, and conversions. Monthly reports show progress and insights for strategy refinement.",
        },
      ]}
    />
  );
};

export default SocialMediaManagement;
