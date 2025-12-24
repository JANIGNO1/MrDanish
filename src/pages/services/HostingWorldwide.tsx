import { Server } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const HostingWorldwide = () => {
  return (
    <ServicePageLayout
      title="Web Hosting Worldwide"
      subtitle="Global Hosting Solutions"
      description="Enterprise-grade web hosting services with worldwide server coverage. From shared hosting to dedicated servers, we provide reliable, fast, and secure hosting solutions."
      icon={<Server className="w-10 h-10 text-white" />}
      gradient="from-cyan-500 to-teal-600"
      benefits={[
        "99.9% uptime guarantee with proactive monitoring",
        "Global CDN integration for lightning-fast load times",
        "Free SSL certificates and enhanced security features",
        "One-click app installations (WordPress, WooCommerce, etc.)",
        "24/7 technical support with rapid response times",
        "Scalable solutions from startup to enterprise level",
      ]}
      processSteps={[
        {
          title: "Needs Assessment",
          description: "Analyze your website requirements, expected traffic, and technical needs to recommend the optimal hosting solution.",
        },
        {
          title: "Server Configuration",
          description: "Set up your hosting environment with optimal configurations, security hardening, and performance tuning.",
        },
        {
          title: "Migration & Launch",
          description: "Seamlessly migrate your existing website or deploy new projects with zero downtime.",
        },
        {
          title: "Ongoing Management",
          description: "Continuous monitoring, updates, backups, and optimization to keep your sites running perfectly.",
        },
      ]}
      caseStudies={[
        {
          title: "E-Commerce Platform - UAE",
          description: "Migrated high-traffic online store to optimized hosting with improved security and speed.",
          result: "Page load time reduced by 70%, conversion rate up 25%",
        },
        {
          title: "Agency Portfolio Sites - UK",
          description: "Managed hosting for digital agency's 30+ client websites on unified infrastructure.",
          result: "Zero downtime over 18 months, 50% cost reduction",
        },
        {
          title: "Live Streaming Platform - Asia",
          description: "High-performance hosting setup for real-time streaming dashboard and analytics platform.",
          result: "Handled 10K+ concurrent users during peak events",
        },
      ]}
      faqs={[
        {
          question: "Where are your servers located?",
          answer: "We have server locations across North America, Europe, Asia-Pacific, and Middle East regions. We recommend the optimal location based on your target audience.",
        },
        {
          question: "Do you provide managed hosting?",
          answer: "Yes! Our managed hosting includes server maintenance, security updates, performance optimization, and 24/7 monitoring so you can focus on your business.",
        },
        {
          question: "Can you migrate my existing website?",
          answer: "Absolutely! We provide free migration services for most hosting plans. Our team handles the entire process with zero downtime using advanced migration tools.",
        },
        {
          question: "What security measures are included?",
          answer: "All plans include free SSL, DDoS protection, daily backups, malware scanning, and firewall protection. Enterprise plans add advanced WAF and intrusion detection.",
        },
      ]}
    />
  );
};

export default HostingWorldwide;
