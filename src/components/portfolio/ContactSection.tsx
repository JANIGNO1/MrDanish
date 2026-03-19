import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle,
  Instagram,
  Youtube,
  ExternalLink,
  Phone,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import StarField from './StarField';

const socialLinks = [
  { 
    name: 'TikTok', 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    href: 'https://tiktok.com/@janigno1',
    username: '@janigno1',
    gradient: 'from-pink-500 to-purple-500'
  },
  { 
    name: 'YouTube', 
    icon: Youtube,
    href: 'https://youtube.com/@mrdanishjani',
    username: '@mrdanishjani',
    gradient: 'from-red-500 to-red-600'
  },
  { 
    name: 'Instagram', 
    icon: Instagram,
    href: 'https://instagram.com/danishjanig',
    username: '@danishjanig',
    gradient: 'from-pink-500 to-orange-500'
  },
  { 
    name: 'WhatsApp Business', 
    icon: MessageCircle,
    href: 'https://wa.me/923107906630',
    username: '+92 310 790 6630',
    gradient: 'from-green-500 to-green-600'
  },
  { 
    name: 'WhatsApp Backup', 
    icon: MessageCircle,
    href: 'https://wa.me/923400278535',
    username: '+92 340 027 8535',
    gradient: 'from-green-400 to-emerald-500'
  },
  { 
    name: 'Telegram', 
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    href: 'https://t.me/mrdanishjani',
    username: '@mrdanishjani',
    gradient: 'from-blue-400 to-blue-600'
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open WhatsApp with the message
    const message = `Hi Danish! I'm ${formData.name}.\n\nService: ${formData.service}\n\n${formData.message}\n\nEmail: ${formData.email}`;
    window.open(`https://wa.me/923400278535?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success('Message sent! Redirecting to WhatsApp...');
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <StarField count={50} />
      
      {/* Floating glow orbs */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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
            💬 Let's Connect
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out today to start your global growth journey 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Quick Connect Cards */}
            {[
              { icon: Mail, title: 'Email Me', value: 'danishdjofficial@gmail.com', href: 'mailto:danishdjofficial@gmail.com' },
              { icon: Phone, title: 'WhatsApp Business', value: '+92 310 790 6630', href: 'https://wa.me/923107906630' },
              { icon: Phone, title: 'WhatsApp Backup', value: '+92 340 027 8535', href: 'https://wa.me/923400278535' },
              { icon: MapPin, title: 'Location', value: 'Malakwal, Punjab, Pakistan 🇵🇰', href: null },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <ContactCard item={item} />
                  </a>
                ) : (
                  <ContactCard item={item} />
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Follow Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all group/social"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white shadow-lg group-hover/social:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow`}>
                      <social.icon />
                    </div>
                    <div>
                      <span className="font-medium text-foreground">{social.name}</span>
                      <span className="text-sm block text-muted-foreground">{social.username}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Portfolio Link */}
            <motion.a
              href="https://mrdanish.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl flex items-center justify-between group border border-primary/10 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <div>
                <h3 className="font-display font-bold text-lg mb-1">View Portfolio</h3>
                <p className="text-muted-foreground text-sm">mrdanish.netlify.app</p>
              </div>
              <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Contact Form - Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[2rem] blur-2xl opacity-50" />
              
              <form onSubmit={handleSubmit} className="relative glass-card p-8 md:p-10 rounded-3xl space-y-6 border border-primary/20 shadow-[0_0_60px_rgba(59,130,246,0.1)]">
                {/* Success overlay */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-background/95 rounded-3xl flex flex-col items-center justify-center z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">Redirecting to WhatsApp...</p>
                    
                    {/* Success particles */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-green-500"
                        initial={{ 
                          x: 0, 
                          y: 0,
                          opacity: 1 
                        }}
                        animate={{ 
                          x: (Math.random() - 0.5) * 200,
                          y: (Math.random() - 0.5) * 200,
                          opacity: 0,
                          scale: 0
                        }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                      />
                    ))}
                  </motion.div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-foreground">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  >
                    <option value="">Select a service...</option>
                    <option value="Live Streaming Management">Live Streaming Management</option>
                    <option value="Agency Setup">Agency Setup</option>
                    <option value="Coins Selling">Coins Selling</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Hosting Services">Hosting Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    placeholder="Tell me about your project... I'd love to hear your ideas!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold flex items-center justify-center gap-2 overflow-hidden group disabled:opacity-50"
                >
                  {/* Button glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ opacity: 0.3 }}
                  />
                  
                  {/* Ripple effect container */}
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full origin-center" />
                  </span>
                  
                  <span className="relative flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="text-center text-muted-foreground text-sm">
                  Or directly email: <a href="mailto:Danishasifjaved@gmail.com" className="text-primary hover:underline">Danishasifjaved@gmail.com</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact card component
const ContactCard = ({ item }: { item: { icon: any; title: string; value: string } }) => {
  const Icon = item.icon;
  return (
    <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-primary/10 hover:border-primary/30 transition-all group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-muted-foreground text-sm">{item.value}</p>
      </div>
    </div>
  );
};

export default ContactSection;
