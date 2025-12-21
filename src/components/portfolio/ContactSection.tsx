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
  Phone
} from 'lucide-react';
import { toast } from 'sonner';

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
    color: 'hover:text-pink-500'
  },
  { 
    name: 'YouTube', 
    icon: Youtube,
    href: 'https://youtube.com/@mrdanishjani',
    username: '@mrdanishjani',
    color: 'hover:text-red-500'
  },
  { 
    name: 'Instagram', 
    icon: Instagram,
    href: 'https://instagram.com/danishjanig',
    username: '@danishjanig',
    color: 'hover:text-pink-400'
  },
  { 
    name: 'WhatsApp', 
    icon: MessageCircle,
    href: 'https://wa.me/923400278535',
    username: '+92 340 027 8535',
    color: 'hover:text-green-500'
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with the message
    const message = `Hi Danish! I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\n${formData.message}\n\nEmail: ${formData.email}`;
    window.open(`https://wa.me/923400278535?text=${encodeURIComponent(message)}`, '_blank');
    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-4 block">LET'S WORK TOGETHER</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell me about your project. I usually reply within a few hours 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Email */}
            <a 
              href="mailto:Danishasifjaved@gmail.com"
              className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 border border-transparent transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">Email Me</h3>
                <p className="text-muted-foreground text-sm">Danishasifjaved@gmail.com</p>
              </div>
            </a>

            {/* Phone/WhatsApp */}
            <a 
              href="https://wa.me/923400278535"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-primary/30 border border-transparent transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">+92 340 027 8535</p>
              </div>
            </a>

            {/* Location */}
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Malakwal, Punjab, Pakistan 🇵🇰</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-display font-bold text-lg mb-4">Follow Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 text-muted-foreground transition-colors ${social.color}`}
                  >
                    <div className="w-10 h-10 glass-strong rounded-xl flex items-center justify-center">
                      <social.icon />
                    </div>
                    <div>
                      <span className="font-medium text-foreground">{social.name}</span>
                      <span className="text-sm block">{social.username}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Portfolio Link */}
            <motion.a
              href="https://mrdanish.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-2xl flex items-center justify-between group border border-transparent hover:border-primary/30 transition-all"
            >
              <div>
                <h3 className="font-display font-bold text-lg mb-1">View Portfolio</h3>
                <p className="text-muted-foreground text-sm">mrdanish.netlify.app</p>
              </div>
              <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Logo Design / Video Editing / Website"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project... I'd love to hear your ideas!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 glow"
              >
                Send via WhatsApp
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="text-center text-muted-foreground text-sm">
                Or directly email: <a href="mailto:Danishasifjaved@gmail.com" className="text-primary hover:underline">Danishasifjaved@gmail.com</a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
