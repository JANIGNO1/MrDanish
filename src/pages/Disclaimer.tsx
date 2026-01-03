import { Helmet } from 'react-helmet';
import Navbar from '@/components/portfolio/Navbar';
import Footer from '@/components/portfolio/Footer';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Danish Jani - Mr Danish Official</title>
        <meta name="description" content="Disclaimer for mrdanish.netlify.app - Important legal information about our website and services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrdanish.netlify.app/disclaimer" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-20 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
          <p className="text-muted-foreground mb-6">Last Updated: January 3, 2025</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">General Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on mrdanish.netlify.app is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with appropriate professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Testimonials Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The testimonials on this website represent individual experiences and results. They are not intended to represent or guarantee that anyone will achieve the same or similar results. Your results may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Earnings Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any earnings or income statements are estimates only. There is no guarantee that you will make any specific amount of money using our services. Results depend on various factors including skill, effort, and market conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">"As Is" Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is provided on an "as is" and "as available" basis without any representations or warranties, express or implied. Danish Jani makes no representations or warranties in relation to this website or the information and materials provided on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under no circumstances shall Danish Jani be liable for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your access or use of or inability to access or use the website and any third-party content and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/923400278535" className="text-primary hover:underline">+92-340-0278535</a></li>
                <li><strong>Website:</strong> <a href="https://mrdanish.netlify.app" className="text-primary hover:underline">https://mrdanish.netlify.app</a></li>
              </ul>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
