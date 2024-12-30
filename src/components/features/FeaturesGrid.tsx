import React from 'react';
import { Brain, Zap, Shield, Palette, Users, Share } from 'lucide-react';
import FeatureCard from '../home/FeatureCard';


const features = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI-Powered Recommendations",
    description: "Get personalized style suggestions based on your preferences and body type."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Real-Time Try-On",
    description: "See how clothes look on you instantly with our advanced AR technology."
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Precise Measurements",
    description: "AI body scanning ensures the perfect fit every time."
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Style Customization",
    description: "Customize colors, patterns, and styles to match your preferences."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Community Features",
    description: "Share your styles and get inspired by other fashion enthusiasts."
  },
  {
    icon: <Share className="w-12 h-12" />,
    title: "Social Integration",
    description: "Share your favorite looks directly to social media platforms."
  }
];

const FeaturesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesGrid;