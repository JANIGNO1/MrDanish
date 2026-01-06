import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import StarField from './StarField';

const testimonials = [
  {
    quote: "Danish helped us scale from 50 to 300+ hosts in 6 months. His expertise in Poppo Live and agency setup delivered 400% growth in revenue!",
    author: "Chen Wei Lin",
    role: "CEO, HK Live Entertainment",
    country: "Hong Kong",
    flag: "🇭🇰",
    avatar: "CW",
    rating: 5,
    result: "400% Revenue Growth",
  },
  {
    quote: "Exceptional coins selling service with complete transparency. Saved us 30% on costs while increasing transaction volume by 200%.",
    author: "Sarah Tan",
    role: "Operations Director, LiveSG Media",
    country: "Singapore",
    flag: "🇸🇬",
    avatar: "ST",
    rating: 5,
    result: "200% Volume Increase",
  },
  {
    quote: "Best agency owner we've collaborated with. His global hosting services transformed our Malaysian business — 150 new hosts onboarded in 3 months.",
    author: "Ahmad Razak",
    role: "Live App Manager, MY Streaming Co",
    country: "Malaysia",
    flag: "🇲🇾",
    avatar: "AR",
    rating: 5,
    result: "150 Hosts Onboarded",
  },
  {
    quote: "Danish's web development delivered a 70% increase in lead conversions. His design thinking and execution are world-class!",
    author: "Michael Zhang",
    role: "Startup Founder, TechHK",
    country: "Hong Kong",
    flag: "🇭🇰",
    avatar: "MZ",
    rating: 5,
    result: "70% More Conversions",
  },
  {
    quote: "Professional, reliable, and always delivers. His SEO work boosted our rankings from page 5 to page 1 in just 90 days.",
    author: "Priya Sharma",
    role: "Digital Marketing Head, SGrowth",
    country: "Singapore",
    flag: "🇸🇬",
    avatar: "PS",
    rating: 5,
    result: "Page 1 Rankings",
  },
  {
    quote: "Danish's video editing generated 2M+ views on our TikTok content. Perfect for live streaming content strategy!",
    author: "Lee Ming",
    role: "Content Manager, BuzzMY",
    country: "Malaysia",
    flag: "🇲🇾",
    avatar: "LM",
    rating: 5,
    result: "2M+ Video Views",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <StarField count={60} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.2)",
                "0 0 40px rgba(59,130,246,0.4)",
                "0 0 20px rgba(59,130,246,0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐ Client Testimonials
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">What </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by Global Managers, Agency Owners, and Business Leaders from Hong Kong, Singapore, Malaysia & beyond
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author}-${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Star burst on load */}
                <motion.div
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 blur-xl"
                  initial={{ opacity: 0.6, scale: 1.1 }}
                  animate={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                
                {/* Glow on hover */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative glass-card p-8 rounded-3xl h-full border border-primary/10 hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                  {/* Shine sweep */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  </div>
                  
                  {/* Header with flag and avatar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <motion.div
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent p-0.5"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-primary">
                          {testimonial.avatar}
                        </div>
                      </motion.div>
                      
                      {/* Country flag */}
                      <motion.span
                        className="text-3xl"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        {testimonial.flag}
                      </motion.span>
                    </div>
                    
                    {/* Quote icon */}
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Rating with star animation */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-base mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border/30 pt-4">
                    <div className="font-display font-bold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="text-primary text-xs flex items-center gap-1">
                        <span>{testimonial.flag}</span>
                        <span>{testimonial.country}</span>
                      </div>
                      {'result' in testimonial && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          ✓ {(testimonial as any).result}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
