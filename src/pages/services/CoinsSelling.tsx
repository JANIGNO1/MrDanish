import { Coins } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const CoinsSelling = () => {
  return (
    <ServicePageLayout
      title="Official Coins Selling"
      subtitle="Trusted Crypto & Virtual Currency"
      description="As an Official Coins Seller, I provide secure cryptocurrency and virtual currency services for live streaming platforms, gaming, and digital ecosystems worldwide."
      icon={<Coins className="w-10 h-10 text-white" />}
      gradient="from-amber-500 to-orange-600"
      benefits={[
        "Official seller status ensures 100% secure transactions",
        "Competitive rates for bulk purchases and regular clients",
        "Support for multiple platforms (Poppo, Bigo, Tango coins)",
        "Fast delivery with real-time transaction confirmation",
        "24/7 availability across all time zones",
        "Trusted by streamers and agencies in 12+ countries",
      ]}
      processSteps={[
        {
          title: "Requirement Analysis",
          description: "Discuss your coin requirements, preferred platforms, and volume needs to determine the best package for you.",
        },
        {
          title: "Secure Payment",
          description: "Process payment through verified and secure channels with full transaction transparency and receipts.",
        },
        {
          title: "Instant Delivery",
          description: "Receive your coins directly to your account within minutes of confirmed payment.",
        },
        {
          title: "Ongoing Support",
          description: "Continued assistance for regular purchases, bulk deals, and any platform-related queries.",
        },
      ]}
      caseStudies={[
        {
          title: "Live Streaming Agency - Hong Kong",
          description: "Provided bulk coin supply for agency's 50+ streamers with monthly subscription arrangement.",
          result: "30% cost savings compared to platform direct purchases",
        },
        {
          title: "Gaming Community - Singapore",
          description: "Regular coin supply for gaming guild's tournament prizes and community rewards.",
          result: "Reliable partner for 2+ years with 500+ transactions",
        },
        {
          title: "Individual Streamers Network",
          description: "Built a trusted network of regular streamer clients across Southeast Asia.",
          result: "95% repeat customer rate with referral growth",
        },
      ]}
      faqs={[
        {
          question: "Are your coin sales officially authorized?",
          answer: "Yes, I operate as an Official Coins Seller with verified status across supported platforms. All transactions are legitimate and comply with platform terms of service.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept multiple payment methods including bank transfer, cryptocurrency, PayPal, and various regional payment solutions for global accessibility.",
        },
        {
          question: "How fast is coin delivery?",
          answer: "Most deliveries are completed within 5-30 minutes of confirmed payment. For large orders, delivery may take up to 2 hours depending on platform processing.",
        },
        {
          question: "Do you offer bulk discounts?",
          answer: "Yes! We offer tiered pricing for bulk purchases and special rates for agencies and regular customers. Contact us for custom volume pricing.",
        },
      ]}
    />
  );
};

export default CoinsSelling;
