import { Globe } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const WebDevelopment = () => {
  return (
    <ServicePageLayout
      title="Web Development"
      subtitle="Modern Web Solutions"
      description="Build stunning, high-performance websites and web applications with cutting-edge technologies. From landing pages to complex web apps, we deliver solutions that drive results."
      icon={<Globe className="w-10 h-10 text-white" />}
      gradient="from-cyan-500 to-teal-600"
      benefits={[
        "Responsive design that works perfectly on all devices",
        "Modern tech stack (React, Next.js, TypeScript, Tailwind)",
        "SEO-optimized architecture for maximum visibility",
        "Fast loading speeds with performance optimization",
        "Secure, scalable, and maintainable codebase",
        "Full CMS integration for easy content management",
      ]}
      processSteps={[
        {
          title: "Discovery & Planning",
          description: "Understand your goals, analyze requirements, and create a detailed project roadmap with wireframes.",
        },
        {
          title: "Design & Prototype",
          description: "Create visual designs and interactive prototypes for your approval before development begins.",
        },
        {
          title: "Development",
          description: "Build your website with clean, efficient code following industry best practices and standards.",
        },
        {
          title: "Launch & Support",
          description: "Deploy your site with thorough testing, provide training, and offer ongoing maintenance support.",
        },
      ]}
      caseStudies={[
        {
          title: "SaaS Platform - USA",
          description: "Full-stack web application for project management startup with real-time collaboration features.",
          result: "10,000+ active users within first year of launch",
        },
        {
          title: "E-Commerce Store - UAE",
          description: "Custom online store with advanced filtering, payment integration, and inventory management.",
          result: "$500K+ in sales within first 6 months",
        },
        {
          title: "Portfolio Website - Freelancer",
          description: "Premium portfolio website for creative professional showcasing work and generating leads.",
          result: "300% increase in client inquiries",
        },
      ]}
      faqs={[
        {
          question: "What technologies do you use?",
          answer: "We specialize in React, Next.js, TypeScript, and Tailwind CSS for frontend. For backend, we use Node.js, Supabase, and various cloud services depending on project needs.",
        },
        {
          question: "Do you provide hosting and maintenance?",
          answer: "Yes! We offer hosting solutions and monthly maintenance packages that include updates, backups, security monitoring, and performance optimization.",
        },
        {
          question: "How long does website development take?",
          answer: "Timeline varies by complexity. Landing pages: 1-2 weeks. Business websites: 3-4 weeks. Web applications: 6-12 weeks. We provide detailed timelines after scoping.",
        },
        {
          question: "Will I be able to update content myself?",
          answer: "Absolutely! We integrate user-friendly CMS solutions and provide training so you can easily manage your content without technical knowledge.",
        },
      ]}
    />
  );
};

export default WebDevelopment;
