import React from 'react';
import { Zap, Shield, Palette, Users, Brain, Share } from 'lucide-react';
import FeatureSection from './FeatureSection';

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

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
          <p className="text-gray-400 text-lg">Discover what makes FashionAI revolutionary</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureSection key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;