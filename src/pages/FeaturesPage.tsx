import React from 'react';
import FeaturesGrid from '../components/features/FeaturesGrid';
import PageHeader from '../components/common/PageHeader';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Platform Features"
          description="Discover what makes FashionAI revolutionary"
        />
        <FeaturesGrid />
      </div>
    </div>
  );
};

export default FeaturesPage;