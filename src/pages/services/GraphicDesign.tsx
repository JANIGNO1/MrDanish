import { Palette } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const GraphicDesign = () => {
  return (
    <ServicePageLayout
      title="Graphic Design & Branding"
      subtitle="Visual Identity Excellence"
      description="Premium graphic design services that transform ideas into stunning visuals. From logo design to complete brand identities, we create memorable designs that captivate audiences."
      icon={<Palette className="w-10 h-10 text-white" />}
      gradient="from-violet-500 to-purple-600"
      metaTitle="Professional Graphic Design & Branding Services 2025 | Logo Design Expert"
      metaDescription="Get stunning logo design, brand identity kits & social media graphics. Premium graphic design services with unlimited revisions, fast delivery & source files included."
      keywords={[
        "graphic design services",
        "logo design 2025",
        "brand identity design",
        "professional branding",
        "social media graphics",
        "visual identity designer",
        "custom logo design",
        "branding agency Pakistan",
        "graphic designer UAE",
        "creative design studio",
        "brand guidelines design",
        "modern logo design",
      ]}
      benefits={[
        "Custom logo design with unlimited revisions until perfection",
        "Complete brand identity kits (logo, colors, typography, guidelines)",
        "Social media graphics optimized for all platforms",
        "Print-ready designs for marketing materials",
        "Source files included (AI, PSD, PNG, JPG, PDF)",
        "Fast turnaround with 24-48 hour delivery options",
      ]}
      processSteps={[
        {
          title: "Creative Brief",
          description: "Deep dive into your brand vision, target audience, and design preferences to create a clear creative direction.",
        },
        {
          title: "Concept Development",
          description: "Create multiple design concepts and mood boards for your review and feedback.",
        },
        {
          title: "Refinement",
          description: "Iterate on your chosen direction with unlimited revisions until the design is perfect.",
        },
        {
          title: "Final Delivery",
          description: "Receive all files in multiple formats along with brand guidelines for consistent usage.",
        },
      ]}
      caseStudies={[
        {
          title: "Tech Startup - Silicon Valley",
          description: "Complete brand identity for AI software company including logo, website design, and marketing collateral.",
          result: "Secured $2M funding with professional brand presence",
        },
        {
          title: "Restaurant Chain - UAE",
          description: "Rebranding project for expanding restaurant group across multiple locations.",
          result: "40% increase in brand recognition after launch",
        },
        {
          title: "E-Commerce Brand - UK",
          description: "Product packaging and brand identity for sustainable fashion startup.",
          result: "Featured in 3 major design publications",
        },
      ]}
      faqs={[
        {
          question: "How much does professional logo design cost in 2025?",
          answer: "Our logo design packages start from affordable rates with multiple concepts included. Each package offers 3-5 unique logo concepts with color variations and application previews.",
        },
        {
          question: "What file formats do you provide for graphic design?",
          answer: "All projects include AI (editable vector), PSD, PNG (transparent), JPG, PDF, and SVG files. We ensure you have everything needed for both print and digital use.",
        },
        {
          question: "How many logo revisions are included in your packages?",
          answer: "We offer unlimited revisions within the project scope. Your satisfaction is our priority - we work until you're 100% happy with the final design.",
        },
        {
          question: "Can you create a complete brand identity kit?",
          answer: "Yes! Our brand identity packages include logo, color palette, typography, brand guidelines, business cards, letterhead, social media templates, and more.",
        },
        {
          question: "What's your turnaround time for graphic design projects?",
          answer: "Standard turnaround is 3-5 business days for logo design. We also offer express 24-48 hour delivery options for urgent projects at premium rates.",
        },
      ]}
    />
  );
};

export default GraphicDesign;
