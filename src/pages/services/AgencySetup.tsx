import { Building2 } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const AgencySetup = () => {
  return (
    <ServicePageLayout
      title="Agency Setup & Management"
      subtitle="Build Your Dream Agency"
      description="Complete agency creation and management solutions. From legal setup to team recruitment, I help you build and scale successful creative agencies worldwide."
      icon={<Building2 className="w-10 h-10 text-white" />}
      gradient="from-pink-500 to-rose-600"
      benefits={[
        "End-to-end agency setup from registration to first client",
        "Team recruitment and talent management systems",
        "Operational workflows and SOPs for scalable growth",
        "Client acquisition strategies used by top agencies",
        "Financial management and invoicing systems setup",
        "Super Admin dashboard configuration for full control",
      ]}
      processSteps={[
        {
          title: "Business Foundation",
          description: "Define your agency's niche, services, and unique value proposition. Set up legal structure and brand identity.",
        },
        {
          title: "Systems & Infrastructure",
          description: "Implement project management, communication tools, and financial tracking systems for smooth operations.",
        },
        {
          title: "Team Building",
          description: "Recruit, onboard, and train your initial team with proven processes for maintaining quality standards.",
        },
        {
          title: "Client Acquisition",
          description: "Launch marketing campaigns and leverage networks to secure your first clients and establish market presence.",
        },
      ]}
      caseStudies={[
        {
          title: "Digital Marketing Agency - UAE",
          description: "Built a full-service digital agency from scratch, including team hiring and client pipeline development.",
          result: "Profitable within 4 months with 15 retainer clients",
        },
        {
          title: "Creative Studio - Pakistan",
          description: "Transformed a solo freelancer into a thriving agency with specialized video production services.",
          result: "Scaled to 8-person team and $50K monthly revenue",
        },
        {
          title: "Live Streaming Agency - Malaysia",
          description: "Established talent management agency for live streamers with comprehensive training programs.",
          result: "Managing 100+ streamers across Southeast Asia",
        },
      ]}
      faqs={[
        {
          question: "How long does it take to set up an agency?",
          answer: "A basic agency setup can be completed in 2-4 weeks. Full operational setup with team and initial clients typically takes 2-3 months.",
        },
        {
          question: "Do I need prior business experience?",
          answer: "No! Our comprehensive guidance covers everything from business basics to advanced strategies. We've helped first-time entrepreneurs build successful agencies.",
        },
        {
          question: "What ongoing support do you provide?",
          answer: "We offer monthly consulting packages for continued guidance, quarterly strategy reviews, and access to our agency owner community for peer support.",
        },
        {
          question: "Can you help with international agency setup?",
          answer: "Absolutely! We have experience setting up agencies across multiple jurisdictions including UAE, UK, Singapore, and Pakistan with compliant legal structures.",
        },
      ]}
    />
  );
};

export default AgencySetup;
