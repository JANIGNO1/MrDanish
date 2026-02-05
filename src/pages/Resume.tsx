import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Phone, Mail, Globe, MapPin, Briefcase, Award, Code, Video, Palette, Brain, Users, TrendingUp } from 'lucide-react';

const Resume = () => {
  useEffect(() => {
    // Auto-trigger print dialog for PDF download
    const timer = setTimeout(() => {
      window.print();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Danish Official - Professional Resume | Global Digital Builder</title>
        <meta name="description" content="Professional resume of Danish Official - Strategic Creative Director, Agency Owner, and Global Digital Builder with 3+ years of international experience." />
      </Helmet>

      {/* Print Button - Hidden in print */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
        >
          <Download className="w-5 h-5" />
          Save as PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="min-h-screen bg-white text-gray-900 print:bg-white">
        <div className="max-w-[800px] mx-auto p-8 print:p-6">
          
          {/* Header */}
          <header className="border-b-4 border-blue-600 pb-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-1">Danish Official</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Mr Danish</h1>
                <p className="text-gray-600 text-sm">(Danish Jani)</p>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  DO
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xl text-blue-600 font-semibold">
                Founder • Strategic Creative Director • Global Digital Builder
              </p>
            </div>
          </header>

          {/* Contact Info */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+92 310 790 6630</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-600" />
              <span>+92 340 027 8535</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>danishasifjaved@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>mrdanish.lovable.app</span>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A globally experienced live streaming professional and digital entrepreneur with <strong>3+ years of verified international experience</strong>. 
              Specializing in live streaming operations, agency management, AI-powered digital growth, branding, web development, and creator economy systems. 
              Successfully delivered <strong>150+ projects for 50+ global clients</strong>, collaborating with trusted management firms and companies across 
              <strong> China, Hong Kong, Malaysia, Singapore</strong>, and worldwide markets. Expert in TikTok, YouTube, and Instagram growth algorithms (2025-2026).
            </p>
          </section>

          {/* Professional Roles */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              PROFESSIONAL ROLES & LEADERSHIP
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Global Manager',
                'Super Admin',
                'Agency Owner',
                'BD Official',
                'Official Coins Seller',
                'Hosting Provider'
              ].map((role) => (
                <div key={role} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-sm font-medium text-gray-800">{role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              CAREER TIMELINE
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="text-sm text-blue-600 font-semibold">2022 – Present (2026)</p>
                <p className="font-bold text-gray-900">Global Agency & Leadership</p>
                <p className="text-sm text-gray-600">Founded and scaled live streaming agency. Led international partnerships across Poppo Live, Bigo Live, Tango. Managed remote teams and recruited hosts globally.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="text-sm text-gray-500 font-semibold">2023</p>
                <p className="font-bold text-gray-900">Web Development & AI Tools</p>
                <p className="text-sm text-gray-600">Expanded into React-based web development, SEO optimization, and AI-powered workflow automation.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="text-sm text-gray-500 font-semibold">2022</p>
                <p className="font-bold text-gray-900">Creative & Production Expansion</p>
                <p className="text-sm text-gray-600">Professional Graphic Designer and Video Editor for digital platforms and live streaming creators.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="text-sm text-gray-500 font-semibold">2021 – 2022</p>
                <p className="font-bold text-gray-900">Algorithm & Growth Mastery</p>
                <p className="text-sm text-gray-600">Deep exploration of TikTok algorithms, content strategies, and live streaming features.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="text-sm text-gray-500 font-semibold">2020 – 2021</p>
                <p className="font-bold text-gray-900">Live Streaming Entry</p>
                <p className="text-sm text-gray-600">Host on Likee and Snack Video, gaining foundational experience in live streaming and audience engagement.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="text-sm text-gray-500 font-semibold">2017</p>
                <p className="font-bold text-gray-900">Exploration Phase</p>
                <p className="text-sm text-gray-600">Started exploring social platforms, discovering online communication and content creation.</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-600" />
              CORE SKILLS & EXPERTISE
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-blue-600" />
                  Branding & Design
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• Adobe Illustrator (95%)</li>
                  <li>• Adobe Photoshop (90%)</li>
                  <li>• PixelLab (85%)</li>
                  <li>• Logo Design & Brand Identity</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  Video Production
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• Premiere Pro (92%)</li>
                  <li>• Filmora (90%)</li>
                  <li>• Content for YouTube, TikTok</li>
                  <li>• Ads & Promotional Videos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-600" />
                  Web Development
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• React.js (85%)</li>
                  <li>• HTML / CSS / JavaScript (90%)</li>
                  <li>• SEO Optimization (88%)</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-blue-600" />
                  AI & Operations
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• AI Tools & Automation (90%)</li>
                  <li>• Live Streaming Operations</li>
                  <li>• Agency Management</li>
                  <li>• Remote Team Leadership</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Global Clients */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              GLOBAL CLIENT REACH
            </h2>
            <div className="flex flex-wrap gap-3">
              {['🇨🇳 China', '🇭🇰 Hong Kong', '🇲🇾 Malaysia', '🇸🇬 Singapore', '🌍 Worldwide'].map((location) => (
                <span key={location} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-gray-800">
                  {location}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Trusted by international agencies, live streaming platforms, tech startups, and global entrepreneurs.
            </p>
          </section>

          {/* Platforms */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
              PLATFORMS & EXPERIENCE
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Poppo Live', 'Bigo Live', 'Tango', 'TikTok', 'YouTube', 'Instagram', 'Likee', 'Snack Video'].map((platform) => (
                <span key={platform} className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700">
                  {platform}
                </span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t-2 border-gray-200 pt-4 mt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2026 Danish Official • Strategic Creative Director • Global Digital Builder
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Portfolio: mrdanish.lovable.app • Updated for 2025-2026
            </p>
          </footer>

        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;
