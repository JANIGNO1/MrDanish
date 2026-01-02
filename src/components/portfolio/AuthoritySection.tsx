import { motion } from "framer-motion";
import { Globe, Shield, TrendingUp, Coins, Building2, Server } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

// E-E-A-T Authority Roles with 2025 Trending Keywords
const roles = [
  {
    icon: Globe,
    title: "Global Manager",
    description: "Leading international live streaming teams & operations worldwide",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Shield,
    title: "Super Admin",
    description: "Full platform control on Poppo Live, Bigo Live, TikTok Live & 10+ apps",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: TrendingUp,
    title: "BD Official",
    description: "Strategic business development & AI-powered growth strategies",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Coins,
    title: "Official Coins Seller",
    description: "Authorized digital currency & virtual gifts expert since 2022",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    icon: Building2,
    title: "Agency Owner",
    description: "Running successful live streaming & creative agencies globally",
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: Server,
    title: "Worldwide Hosting Provider",
    description: "Global server & hosting solutions for live streamers & creators",
    gradient: "from-indigo-500 to-violet-400",
  },
];

const AuthorityCard = ({ role, index }: { role: typeof roles[0]; index: number }) => {
  const Icon = role.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Blink glow animation */}
      <motion.div
        className={`absolute -inset-1 rounded-full bg-gradient-to-r ${role.gradient} opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-500`}
        animate={{
          opacity: [0, 0.4, 0],
        }}
        transition={{
          delay: index * 0.3,
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: roles.length * 0.3,
        }}
      />
      
      {/* Card */}
      <div className="relative glass-card rounded-full p-6 md:p-8 flex flex-col items-center text-center border border-primary/20 hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
        {/* Neon border effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine sweep on hover */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        {/* Icon container with glow */}
        <motion.div
          className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${role.gradient} p-0.5 mb-4`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-full h-full rounded-full bg-background/90 flex items-center justify-center">
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
          </div>
          
          {/* Icon glow pulse */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${role.gradient} opacity-50 blur-md -z-10`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </motion.div>
        
        {/* Title */}
        <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2 group-hover:text-glow transition-all duration-300">
          {role.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {role.description}
        </p>
        
        {/* Star burst on hover */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: index * 0.3 + 0.5,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      </div>
    </motion.div>
  );
};

const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            ✨ Verified Professional Authority 2025
          </motion.span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Elite Global Roles
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted authority across live streaming, AI tools & digital marketing industries with executive-level positions in Hong Kong, Malaysia, Singapore & worldwide
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {roles.map((role, index) => (
            <AuthorityCard key={role.title} role={role} index={index} />
          ))}
        </div>

        {/* Bottom glow line */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default AuthoritySection;
