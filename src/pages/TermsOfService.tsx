import { Helmet } from 'react-helmet';
import Navbar from '@/components/portfolio/Navbar';
import Footer from '@/components/portfolio/Footer';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Danish Jani - Mr Danish Official</title>
        <meta name="description" content="Terms of Service for mrdanish.netlify.app - Read our terms and conditions for using our services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mrdanish.netlify.app/terms-of-service" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-20 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last Updated: January 3, 2025</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using mrdanish.netlify.app, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Danish Jani provides the following professional services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Live Streaming Management & Agency Setup</li>
                <li>Coins Selling & Worldwide Hosting</li>
                <li>Graphic Design & Video Editing</li>
                <li>Web Development & Digital Marketing</li>
                <li>SEO Optimization & Social Media Management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Danish Jani and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our website and services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of the website</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                For paid services, payment terms will be agreed upon before the commencement of work. All payments are non-refundable unless otherwise stated in writing. We accept various payment methods which will be discussed during consultation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Service Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to deliver all services within agreed timelines. Delays may occur due to circumstances beyond our control. We will communicate any significant delays promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Danish Jani shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee specific results from our services. Success depends on various factors including client cooperation and market conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users or our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Name:</strong> Danish Jani</li>
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

export default TermsOfService;
