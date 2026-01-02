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
      metaTitle="Professional Web Development Services 2025 | React, Next.js & Custom Websites"
      metaDescription="Expert web development using React, Next.js & TypeScript. Build fast, SEO-optimized, responsive websites & web apps. Full-stack development with modern tech stack."
      keywords={[
        "web development services 2025",
        "React developer",
        "Next.js development",
        "custom website development",
        "full-stack developer",
        "responsive web design",
        "ecommerce website development",
        "SaaS development",
        "web app development",
        "TypeScript developer",
        "website developer Pakistan",
        "frontend development",
      ]}
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
          question: "What technologies do you use for web development in 2025?",
          answer: "We specialize in React, Next.js, TypeScript, and Tailwind CSS for frontend. For backend, we use Node.js, Supabase, and cloud services. These modern technologies ensure fast, scalable, and maintainable websites.",
        },
        {
          question: "How much does custom website development cost?",
          answer: "Costs vary based on complexity. Landing pages start affordably, business websites are mid-range, and web applications are quoted based on features. We provide detailed estimates after understanding your requirements.",
        },
        {
          question: "Do you build e-commerce websites?",
          answer: "Yes! We develop custom e-commerce solutions with Shopify, WooCommerce, or fully custom builds. Features include payment integration, inventory management, and conversion optimization.",
        },
        {
          question: "How long does website development take?",
          answer: "Timeline varies by complexity. Landing pages: 1-2 weeks. Business websites: 3-4 weeks. Web applications: 6-12 weeks. We provide detailed timelines after project scoping.",
        },
        {
          question: "Do you provide website maintenance and hosting?",
          answer: "Yes! We offer hosting solutions and monthly maintenance packages including updates, backups, security monitoring, performance optimization, and technical support.",
        },
      ]}
    />
  );
};

export default WebDevelopment;
