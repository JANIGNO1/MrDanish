import { motion } from 'framer-motion';
import { ArrowLeft, Check, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarField from '@/components/portfolio/StarField';
import Navbar from '@/components/portfolio/Navbar';
import Footer from '@/components/portfolio/Footer';

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  result: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  processSteps: ProcessStep[];
  caseStudies: CaseStudy[];
  faqs: FAQ[];
  gradient: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  icon,
  benefits,
  processSteps,
  caseStudies,
  faqs,
  gradient,
  metaTitle,
  metaDescription,
  keywords = [],
}: ServicePageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Inject FAQ Schema dynamically
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": description,
      "provider": {
        "@type": "Person",
        "@id": "https://mrdanish.netlify.app/#person",
        "name": "Mr Danish Jani",
        "url": "https://mrdanish.netlify.app/"
      },
      "areaServed": "Worldwide",
      "serviceType": title
    };

    // Create or update FAQ schema script
    let faqScriptTag = document.querySelector('script[data-schema="faq-page"]');
    if (!faqScriptTag) {
      faqScriptTag = document.createElement('script');
      faqScriptTag.setAttribute('type', 'application/ld+json');
      faqScriptTag.setAttribute('data-schema', 'faq-page');
      document.head.appendChild(faqScriptTag);
    }
    faqScriptTag.textContent = JSON.stringify(faqSchema);

    // Create or update Service schema script
    let serviceScriptTag = document.querySelector('script[data-schema="service"]');
    if (!serviceScriptTag) {
      serviceScriptTag = document.createElement('script');
      serviceScriptTag.setAttribute('type', 'application/ld+json');
      serviceScriptTag.setAttribute('data-schema', 'service');
      document.head.appendChild(serviceScriptTag);
    }
    serviceScriptTag.textContent = JSON.stringify(serviceSchema);

    // Update meta tags
    document.title = metaTitle || `${title} - Mr Danish Jani | PSEB-Registered Provider`;

    // Update canonical URL for this service page
    const slug = window.location.pathname;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', `https://mrdanish.netlify.app${slug}`);
    }
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription || description);
    }

    // Cleanup on unmount
    return () => {
      const faqScript = document.querySelector('script[data-schema="faq-page"]');
      const serviceScript = document.querySelector('script[data-schema="service"]');
      if (faqScript) faqScript.remove();
      if (serviceScript) serviceScript.remove();
      // Restore homepage canonical
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://mrdanish.netlify.app/');
      }
    };
  }, [title, description, faqs, metaTitle, metaDescription]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <StarField />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r ${gradient} opacity-20 blur-[120px]`} />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} mb-8`}>
              {icon}
            </div>
            
            <span className="text-primary font-medium text-sm tracking-wider mb-4 block uppercase">
              {subtitle}
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-glow-white">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              {description}
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started Today</span>
              <Sparkles className="w-5 h-5 relative z-10" />
              {/* Pulse Glow */}
              <div className="absolute inset-0 bg-primary/50 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider mb-4 block">WHY CHOOSE THIS SERVICE</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Key <span className="text-gradient">Benefits</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground/90 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider mb-4 block">HOW IT WORKS</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Our <span className="text-gradient">Process</span>
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                )}
                
                {/* Step Number */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg relative`}>
                  {index + 1}
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl opacity-50" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider mb-4 block">SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Case <span className="text-gradient">Studies</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{study.description}</p>
                    <div className="pt-4 border-t border-primary/10">
                      <span className="text-xs text-primary uppercase tracking-wider">Result</span>
                      <p className="text-foreground font-medium mt-1">{study.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider mb-4 block">COMMON QUESTIONS</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10`} />
        <StarField />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss how this service can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/923400278535"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full relative overflow-hidden group"
              >
                <span className="relative z-10">WhatsApp Me</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                {/* Glow Pulse */}
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100" />
              </motion.a>
              
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card border border-primary/30 text-foreground font-semibold rounded-full hover:bg-primary/10 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
