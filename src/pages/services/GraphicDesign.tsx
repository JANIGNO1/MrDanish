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
          question: "How many logo concepts will I receive?",
          answer: "Depending on your package, you'll receive 3-5 unique logo concepts. Each concept comes with color variations and application previews.",
        },
        {
          question: "What file formats do you provide?",
          answer: "All projects include AI (editable vector), PSD, PNG (transparent), JPG, PDF, and SVG files. We ensure you have everything needed for print and digital use.",
        },
        {
          question: "How many revisions are included?",
          answer: "We offer unlimited revisions within the project scope. Your satisfaction is our priority - we work until you're 100% happy with the design.",
        },
        {
          question: "Can you match my existing brand style?",
          answer: "Absolutely! We can work within existing brand guidelines or help evolve your brand while maintaining recognizable elements.",
        },
      ]}
    />
  );
};

export default GraphicDesign;
