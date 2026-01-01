import { Coins } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const CoinsSelling = () => {
  return (
    <ServicePageLayout
      title="Official Coins Selling"
      subtitle="Trusted Virtual Currency Services"
      description="As an Official Coins Seller, I provide secure virtual currency services for live streaming platforms including Poppo Live, Bigo Live, TikTok Live, and gaming ecosystems worldwide. Trusted by 500+ clients in Hong Kong, Singapore, Malaysia."
      metaTitle="Official Coins Seller 2025 | Danish Jani - Poppo Live, Bigo Live, TikTok Live Coins | Secure & Fast"
      metaDescription="Buy live streaming coins from Danish Jani - Official Coins Seller. Secure Poppo Live coins, Bigo Live coins, TikTok Live coins. Best rates, instant delivery, 24/7 support. Trusted by 500+ clients worldwide."
      keywords={['coins selling', 'Poppo Live coins', 'Bigo Live coins', 'TikTok Live coins', 'live streaming coins', 'buy coins', 'official coins seller', 'virtual currency', 'live app coins']}
      icon={<Coins className="w-10 h-10 text-white" />}
      gradient="from-amber-500 to-orange-600"
      benefits={[
        "Official Coins Seller status ensures 100% secure and legitimate transactions",
        "Best competitive rates for bulk purchases and regular agency clients",
        "Support for all major platforms: Poppo Live, Bigo Live, TikTok Live, Tango, Zero Live, and more",
        "Instant delivery with real-time transaction confirmation within 5-30 minutes",
        "24/7 availability across all time zones for global clients",
        "Trusted by streamers and agencies in Hong Kong, Singapore, Malaysia, and 15+ countries",
        "Bulk discounts for agencies and regular customers",
        "Multiple payment methods including bank transfer, crypto, and mobile wallets",
      ]}
      processSteps={[
        {
          title: "Requirement Analysis",
          description: "Discuss your coin requirements, preferred platforms (Poppo Live, Bigo Live, TikTok Live), and volume needs to determine the best package.",
        },
        {
          title: "Secure Payment Processing",
          description: "Process payment through verified and secure channels with full transaction transparency. Multiple payment options available.",
        },
        {
          title: "Instant Coin Delivery",
          description: "Receive your coins directly to your account within 5-30 minutes of confirmed payment. Real-time confirmation provided.",
        },
        {
          title: "Ongoing Partnership",
          description: "Continued assistance for regular purchases, bulk deals, agency partnerships, and any platform-related queries. 24/7 support.",
        },
      ]}
      caseStudies={[
        {
          title: "Live Streaming Agency - Hong Kong",
          description: "Provided bulk Poppo Live and Bigo Live coin supply for agency's 100+ streamers with monthly subscription arrangement.",
          result: "30% cost savings compared to platform direct purchases, $20K+ monthly volume",
        },
        {
          title: "Entertainment Network - Singapore",
          description: "Regular coin supply for entertainment company's host rewards and gifting promotions on TikTok Live.",
          result: "Reliable partner for 3+ years with 1000+ transactions completed",
        },
        {
          title: "Individual Top Hosts Network",
          description: "Built a trusted network of regular streamer clients across Southeast Asia for Poppo Live and Bigo Live.",
          result: "95% repeat customer rate with consistent referral growth",
        },
      ]}
      faqs={[
        {
          question: "Are your coin sales officially authorized?",
          answer: "Yes, I operate as an Official Coins Seller with verified status across supported platforms including Poppo Live, Bigo Live, TikTok Live. All transactions are legitimate and comply with platform terms of service.",
        },
        {
          question: "What payment methods do you accept for coin purchases?",
          answer: "We accept multiple payment methods including bank transfer, cryptocurrency, JazzCash, Easypaisa, PayPal, Wise, and various regional payment solutions for global accessibility.",
        },
        {
          question: "How fast is coin delivery on Poppo Live and Bigo Live?",
          answer: "Most deliveries are completed within 5-30 minutes of confirmed payment. For large orders over $1000, delivery may take up to 2 hours depending on platform processing.",
        },
        {
          question: "Do you offer bulk discounts for agencies?",
          answer: "Yes! We offer tiered pricing for bulk purchases and special rates for agencies and regular customers. Agencies can save 20-35% compared to individual purchases. Contact us for custom volume pricing.",
        },
        {
          question: "Which live streaming platforms do you sell coins for?",
          answer: "We sell coins for Poppo Live, Bigo Live, TikTok Live, Tango Live, Zero Live, Joyo Live, Buzzcast Live, Lollipop Live, Boom Live, and more. Contact us for platform-specific availability.",
        },
      ]}
    />
  );
};

export default CoinsSelling;
