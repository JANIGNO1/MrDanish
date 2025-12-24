import { Search } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const SEOOptimization = () => {
  return (
    <ServicePageLayout
      title="SEO Optimization"
      subtitle="Dominate Search Rankings"
      description="Data-driven SEO strategies that boost your search visibility and drive organic traffic. From technical SEO to content optimization, we help you rank higher and convert better."
      icon={<Search className="w-10 h-10 text-white" />}
      gradient="from-emerald-500 to-green-600"
      benefits={[
        "Comprehensive SEO audits identifying all improvement opportunities",
        "Keyword research targeting high-value, achievable rankings",
        "On-page optimization for every page of your website",
        "Technical SEO fixing crawl issues and improving site speed",
        "Content strategy aligned with search intent and user needs",
        "Monthly reporting with clear metrics and actionable insights",
      ]}
      processSteps={[
        {
          title: "SEO Audit",
          description: "Complete analysis of your current SEO status, competitors, and opportunities for improvement.",
        },
        {
          title: "Strategy Development",
          description: "Create a prioritized roadmap targeting quick wins and long-term ranking goals.",
        },
        {
          title: "Implementation",
          description: "Execute on-page, technical, and content optimizations to improve your search presence.",
        },
        {
          title: "Monitor & Iterate",
          description: "Track rankings, analyze results, and continuously refine strategy based on data.",
        },
      ]}
      caseStudies={[
        {
          title: "E-Commerce Site - Australia",
          description: "Complete SEO overhaul for online retail store competing against major brands.",
          result: "First page rankings for 150+ keywords, 400% organic traffic growth",
        },
        {
          title: "Local Business - Canada",
          description: "Local SEO campaign for service business targeting multiple cities.",
          result: "#1 Google Maps ranking in 5 cities, 200% increase in calls",
        },
        {
          title: "SaaS Company - USA",
          description: "Content-focused SEO strategy for B2B software company in competitive niche.",
          result: "Organic traffic from 5K to 50K monthly visitors in 12 months",
        },
      ]}
      faqs={[
        {
          question: "How long until I see SEO results?",
          answer: "SEO is a long-term investment. You'll typically see initial improvements in 3-4 months, with significant results in 6-12 months. Timeline varies based on competition and starting point.",
        },
        {
          question: "What SEO tools do you use?",
          answer: "We use industry-leading tools including Ahrefs, SEMrush, Google Search Console, Screaming Frog, and proprietary analysis tools for comprehensive insights.",
        },
        {
          question: "Do you guarantee first page rankings?",
          answer: "While we can't guarantee specific rankings (no one can ethically), we guarantee transparent reporting, proven strategies, and measurable improvements in your organic visibility.",
        },
        {
          question: "Is SEO a one-time service?",
          answer: "SEO requires ongoing effort to maintain and improve rankings. We offer both one-time audits and monthly retainer packages for continuous optimization.",
        },
      ]}
    />
  );
};

export default SEOOptimization;
