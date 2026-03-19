import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import StarField from '@/components/portfolio/StarField';
import Navbar from '@/components/portfolio/Navbar';
import Footer from '@/components/portfolio/Footer';

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
  metaDescription?: string;
}

const BlogPostLayout = ({ title, category, date, readTime, image, content, metaDescription }: BlogPostProps) => {
  useEffect(() => {
    document.title = `${title} - Mr Danish Jani Blog`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDescription) {
      metaDesc.setAttribute('content', metaDescription);
    }

    const slug = window.location.pathname;
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', `https://mrdanish.netlify.app${slug}`);
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "image": image,
      "datePublished": date,
      "author": {
        "@type": "Person",
        "@id": "https://mrdanish.netlify.app/#person",
        "name": "Mr Danish Jani"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://mrdanish.netlify.app/#organization",
        "name": "DJ Agency"
      }
    };

    let scriptTag = document.querySelector('script[data-schema="blog-post"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-schema', 'blog-post');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(articleSchema);

    window.scrollTo(0, 0);

    return () => {
      const script = document.querySelector('script[data-schema="blog-post"]');
      if (script) script.remove();
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', 'https://mrdanish.netlify.app/');
    };
  }, [title, date, image, metaDescription]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <StarField />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
              {category}
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Mr Danish Jani
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-6 -mt-4 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl rounded-3xl overflow-hidden"
        >
          <img src={image} alt={title} className="w-full h-auto object-cover aspect-video" loading="lazy" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl prose prose-invert prose-lg prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
        >
          {content}
        </motion.article>

        {/* Back to Blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mt-16 pt-8 border-t border-primary/10"
        >
          <Link
            to="/#blog"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostLayout;
