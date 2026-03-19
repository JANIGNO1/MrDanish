import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import LiveStreamingManagement from "./pages/services/LiveStreamingManagement";
import AgencySetup from "./pages/services/AgencySetup";
import CoinsSelling from "./pages/services/CoinsSelling";
import HostingWorldwide from "./pages/services/HostingWorldwide";
import GraphicDesign from "./pages/services/GraphicDesign";
import VideoEditing from "./pages/services/VideoEditing";
import WebDevelopment from "./pages/services/WebDevelopment";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import SEOOptimization from "./pages/services/SEOOptimization";
import DigitalMarketing from "./pages/services/DigitalMarketing";

// Legal Pages (Required for AdSense)
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";

// Resume Page
import Resume from "./pages/Resume";

// Blog Pages
import DesignTrends2026 from "./pages/blog/DesignTrends2026";
import SEOFreelanceBusiness from "./pages/blog/SEOFreelanceBusiness";
import PersonalBrandFreelancer from "./pages/blog/PersonalBrandFreelancer";
import VideoEditingTips from "./pages/blog/VideoEditingTips";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Pages */}
          <Route path="/services/live-streaming-management" element={<LiveStreamingManagement />} />
          <Route path="/services/agency-setup" element={<AgencySetup />} />
          <Route path="/services/coins-selling" element={<CoinsSelling />} />
          <Route path="/services/hosting-worldwide" element={<HostingWorldwide />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/services/seo-optimization" element={<SEOOptimization />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          
          {/* Legal Pages - Required for AdSense Approval */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* Blog Pages */}
          <Route path="/blog/top-design-trends-2026" element={<DesignTrends2026 />} />
          <Route path="/blog/seo-boost-freelance-business" element={<SEOFreelanceBusiness />} />
          <Route path="/blog/personal-brand-freelancer" element={<PersonalBrandFreelancer />} />
          <Route path="/blog/video-editing-social-media" element={<VideoEditingTips />} />
          
          {/* Resume Page */}
          <Route path="/resume" element={<Resume />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
