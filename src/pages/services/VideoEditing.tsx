import { Film } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const VideoEditing = () => {
  return (
    <ServicePageLayout
      title="Professional Video Editing"
      subtitle="Cinematic Storytelling"
      description="Transform raw footage into compelling stories with professional video editing. From YouTube content to promotional videos, we create engaging visual content that captures attention."
      icon={<Film className="w-10 h-10 text-white" />}
      gradient="from-pink-500 to-rose-600"
      metaTitle="Professional Video Editing Services 2025 | YouTube, TikTok & Reels Editor"
      metaDescription="Expert video editing for YouTube, TikTok, Instagram Reels & promotional content. Professional color grading, motion graphics, sound design & fast turnaround."
      keywords={[
        "video editing services",
        "professional video editor 2025",
        "YouTube video editing",
        "TikTok video editor",
        "Instagram Reels editing",
        "promotional video production",
        "motion graphics",
        "color grading services",
        "video editing Pakistan",
        "cinematic video editing",
        "content creator editor",
        "short-form video editing",
      ]}
      benefits={[
        "Professional editing with Adobe Premiere Pro & After Effects",
        "Custom motion graphics and animated titles",
        "Color grading for cinematic visual appeal",
        "Sound design, mixing, and music integration",
        "Subtitles and multi-language caption support",
        "Optimized exports for all platforms (YouTube, TikTok, Instagram)",
      ]}
      processSteps={[
        {
          title: "Footage Review",
          description: "Analyze your raw footage, understand your vision, and plan the storytelling structure.",
        },
        {
          title: "Rough Cut",
          description: "Create initial edit with story flow, pacing, and key visual elements for your approval.",
        },
        {
          title: "Fine Editing",
          description: "Add color grading, motion graphics, sound design, and polish all details.",
        },
        {
          title: "Final Export",
          description: "Deliver optimized files for your target platforms with multiple format options.",
        },
      ]}
      caseStudies={[
        {
          title: "YouTube Channel - 500K Subs",
          description: "Ongoing editing partnership for gaming content creator with weekly uploads.",
          result: "Channel grew from 50K to 500K subscribers in 12 months",
        },
        {
          title: "Corporate Promo - Fortune 500",
          description: "High-end promotional video for global technology company's product launch.",
          result: "2M+ views across social platforms, used in investor presentations",
        },
        {
          title: "Music Video - Independent Artist",
          description: "Creative music video with visual effects and narrative storytelling.",
          result: "Featured on MTV, 1M+ Spotify streams",
        },
      ]}
      faqs={[
        {
          question: "What's the best video editing service for YouTubers in 2025?",
          answer: "Our video editing service is tailored for content creators. We handle everything from raw footage to final upload-ready files with custom thumbnails, optimized for YouTube's algorithm.",
        },
        {
          question: "How much does professional video editing cost?",
          answer: "Pricing varies by video length and complexity. Short-form content (TikTok/Reels) starts affordably, while longer YouTube videos and commercials are quoted based on requirements.",
        },
        {
          question: "Do you edit TikTok and Instagram Reels content?",
          answer: "Yes! We specialize in short-form vertical content with trending transitions, effects, and captions optimized for maximum engagement on TikTok and Instagram Reels.",
        },
        {
          question: "What video formats do you accept and deliver?",
          answer: "We accept all major formats including MP4, MOV, AVI, and raw camera files (RED, BRAW, ProRes). Delivery includes optimized exports for each platform you need.",
        },
        {
          question: "How fast can you edit my video?",
          answer: "Turnaround depends on complexity. Short social content: 1-2 days. YouTube videos: 3-5 days. Commercials/promos: 1-2 weeks. Rush delivery available.",
        },
      ]}
    />
  );
};

export default VideoEditing;
