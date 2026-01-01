import { Building2 } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const AgencySetup = () => {
  return (
    <ServicePageLayout
      title="Agency Setup & Management"
      subtitle="Build Your Dream Agency"
      description="Complete live streaming agency creation and management solutions. From Super Admin setup to host recruitment, I help you build and scale successful creative agencies worldwide. Trusted by agency owners in Hong Kong, Singapore, Malaysia."
      metaTitle="Live Streaming Agency Setup 2025 | Danish Jani - Super Admin & Agency Owner | Build Your Agency"
      metaDescription="Start your live streaming agency with Danish Jani - #1 Agency Owner & Super Admin. Complete agency setup for Poppo Live, Bigo Live, TikTok Live. Host recruitment, coins system, worldwide hosting. 50+ agencies built successfully."
      keywords={['agency setup', 'live streaming agency', 'agency owner', 'super admin', 'host recruitment', 'Poppo Live agency', 'Bigo Live agency', 'start live streaming business', 'agency management']}
      icon={<Building2 className="w-10 h-10 text-white" />}
      gradient="from-pink-500 to-rose-600"
      benefits={[
        "End-to-end live streaming agency setup from registration to first host",
        "Super Admin dashboard configuration for Poppo Live, Bigo Live, and more",
        "Host recruitment and talent management systems for maximum retention",
        "Operational workflows and SOPs for scalable agency growth",
        "Coins system setup and monetization optimization",
        "BD Official training for international partnership development",
        "Worldwide hosting provider network access",
        "24/7 support from experienced agency owner",
      ]}
      processSteps={[
        {
          title: "Business Foundation & Platform Selection",
          description: "Define your agency's niche, choose platforms (Poppo Live, Bigo Live, TikTok Live), and set up Super Admin accounts with proper verification.",
        },
        {
          title: "Systems & Infrastructure Setup",
          description: "Implement agency management tools, coins tracking systems, host performance dashboards, and financial tracking for smooth operations.",
        },
        {
          title: "Host Recruitment & Training",
          description: "Recruit, onboard, and train your initial hosts with proven processes. Monetization strategies and engagement optimization.",
        },
        {
          title: "Launch & Scale Worldwide",
          description: "Launch marketing campaigns, leverage BD Official networks, and scale to worldwide hosting with our proven growth tactics.",
        },
      ]}
      caseStudies={[
        {
          title: "Live Streaming Agency - Hong Kong",
          description: "Built a full-service Poppo Live and Bigo Live agency from scratch, including Super Admin setup and 50+ host recruitment.",
          result: "Profitable within 4 months with $30K+ monthly revenue",
        },
        {
          title: "Entertainment Agency - Pakistan",
          description: "Transformed a solo streamer into a thriving agency with specialized TikTok Live and Poppo Live operations.",
          result: "Scaled to 100+ hosts and $50K monthly revenue",
        },
        {
          title: "Talent Management Agency - Malaysia",
          description: "Established talent management agency for live streamers with comprehensive training programs and coins system.",
          result: "Managing 200+ streamers across Southeast Asia",
        },
      ]}
      faqs={[
        {
          question: "How long does it take to set up a live streaming agency?",
          answer: "A basic agency setup with Super Admin accounts can be completed in 2-4 weeks. Full operational setup with host recruitment and coins system typically takes 2-3 months.",
        },
        {
          question: "Do I need prior experience to start a live streaming agency?",
          answer: "No! Our comprehensive guidance covers everything from platform basics to advanced agency management strategies. We've helped first-time entrepreneurs build successful agencies managing 100+ hosts.",
        },
        {
          question: "Which platforms can I set up an agency for?",
          answer: "We support agency setup for Poppo Live, Bigo Live, TikTok Live, Zero Live, Joyo Live, Buzzcast Live, and 10+ other platforms. Super Admin and BD Official training included.",
        },
        {
          question: "What ongoing support do you provide for agency owners?",
          answer: "We offer monthly consulting packages, Super Admin training, host management support, coins system optimization, and access to our worldwide agency owner network for peer support and collaboration.",
        },
        {
          question: "Can you help with international agency expansion?",
          answer: "Absolutely! As a Worldwide Hosting Provider and BD Official, we have experience expanding agencies across Hong Kong, Singapore, Malaysia, UAE, UK, and Pakistan with compliant operations.",
        },
      ]}
    />
  );
};

export default AgencySetup;
