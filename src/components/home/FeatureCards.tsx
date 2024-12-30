import React from 'react';
import { ScanFace, Sparkles, Smartphone, Share2 } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <ScanFace className="w-8 h-8" />,
    title: "AI Body Scanning",
    description: "Precise measurements using advanced AI technology"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Smart Styling",
    description: "Personalized recommendations based on your style"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "AR Try-On",
    description: "See clothes on yourself in real-time"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Share & Shop",
    description: "Share your looks and shop directly"
  }
];

const FeatureCards = () => {
  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default FeatureCards;