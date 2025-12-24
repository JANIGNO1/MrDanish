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
          question: "What video formats do you accept?",
          answer: "We accept all major formats including MP4, MOV, AVI, and raw camera files (RED, BRAW, ProRes). Cloud upload links work best for large files.",
        },
        {
          question: "How long does editing take?",
          answer: "Turnaround depends on video length and complexity. Short social content: 1-2 days. YouTube videos: 3-5 days. Commercials/promos: 1-2 weeks.",
        },
        {
          question: "Do you provide music and sound effects?",
          answer: "Yes! We have access to licensed music libraries and sound effect collections. Custom music composition is available for premium projects.",
        },
        {
          question: "Can you edit content in languages other than English?",
          answer: "Absolutely! We've edited content in 10+ languages and can add subtitles/captions in any language you need.",
        },
      ]}
    />
  );
};

export default VideoEditing;
