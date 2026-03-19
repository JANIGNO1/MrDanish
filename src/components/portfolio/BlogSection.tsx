import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top Design Trends for 2026',
    excerpt: 'Explore the latest design trends that will dominate the creative industry in 2026. From AI-powered design tools to immersive 3D experiences.',
    category: 'Design',
    readTime: '5 min read',
    date: 'Dec 15, 2025',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    slug: '/blog/top-design-trends-2026',
  },
  {
    id: 2,
    title: 'How SEO Can Boost Your Freelance Business',
    excerpt: 'Learn proven SEO strategies that can help freelancers attract more clients and increase visibility in a competitive market.',
    category: 'Marketing',
    readTime: '7 min read',
    date: 'Dec 10, 2025',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
    slug: '/blog/seo-boost-freelance-business',
  },
  {
    id: 3,
    title: 'Building Your Personal Brand as a Freelancer',
    excerpt: 'Discover how to create a memorable personal brand that sets you apart and attracts your ideal clients worldwide.',
    category: 'Branding',
    readTime: '6 min read',
    date: 'Dec 5, 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Video Editing Tips for Social Media Success',
    excerpt: 'Master the art of creating engaging video content that captures attention and drives engagement on social platforms.',
    category: 'Video',
    readTime: '8 min read',
    date: 'Nov 28, 2025',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
  },
];

const BlogCard = ({ post, index, isInView }: { post: BlogPost; index: number; isInView: boolean }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden hover-lift"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
          {post.category}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        {/* Read More Link */}
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
          aria-label={`Read more about ${post.title}`}
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
};

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-24 overflow-hidden" aria-labelledby="blog-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block text-sm uppercase tracking-wider">Blog</span>
          <h2 id="blog-heading" className="text-4xl md:text-5xl font-display font-bold mb-6">
            Insights & <span className="text-gradient">Tips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge and expertise to help you succeed in the digital world
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 btn-secondary rounded-full font-semibold"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
