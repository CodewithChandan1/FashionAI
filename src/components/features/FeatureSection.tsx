import React from 'react';

interface FeatureSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureSection = ({ icon, title, description }: FeatureSectionProps) => {
  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400 transition-all duration-300 group">
      <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureSection;