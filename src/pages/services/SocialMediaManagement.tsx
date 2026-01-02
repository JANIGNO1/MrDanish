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
      metaTitle="Social Media Management Services 2025 | Instagram, TikTok & LinkedIn Growth"
      metaDescription="Grow your social media presence with expert management. Content creation, community engagement, analytics & paid ads for Instagram, TikTok, LinkedIn & more."
      keywords={[
        "social media management 2025",
        "Instagram growth services",
        "TikTok marketing",
        "LinkedIn management",
        "social media content creation",
        "community management",
        "social media marketing agency",
        "influencer marketing",
        "social media strategy",
        "social media manager Pakistan",
        "content calendar creation",
        "social media analytics",
      ]}
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
          question: "Which social media platforms should my business use in 2025?",
          answer: "Platform selection depends on your audience. Instagram and TikTok are ideal for B2C, LinkedIn for B2B, and X (Twitter) for thought leadership. We analyze your audience and recommend the optimal platform mix.",
        },
        {
          question: "How often should I post on social media?",
          answer: "Posting frequency varies by platform and goals. Typically 5-7 posts per week on primary platforms, with daily Stories and engagement activities. Quality and consistency matter more than volume.",
        },
        {
          question: "Do you handle social media advertising?",
          answer: "Yes! We offer comprehensive social media advertising management including strategy, ad creation, targeting, and optimization across Facebook, Instagram, TikTok, LinkedIn, and more. Ad spend is separate from management fees.",
        },
        {
          question: "How do you measure social media success?",
          answer: "We track KPIs including follower growth, engagement rate, reach, impressions, website traffic, and conversions. Monthly reports show progress with insights and recommendations for strategy refinement.",
        },
        {
          question: "Can you help grow my TikTok and Instagram Reels?",
          answer: "Absolutely! We specialize in short-form video strategy with trending content formats, hashtag optimization, and engagement tactics specifically designed to boost visibility on TikTok and Instagram Reels.",
        },
      ]}
    />
  );
};

export default SocialMediaManagement;
