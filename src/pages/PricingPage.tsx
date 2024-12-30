import React from 'react';
import PricingGrid from '../components/pricing/PricingGrid';
import PageHeader from '../components/common/PageHeader';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your fashion journey"
        />
        <PricingGrid />
      </div>
    </div>
  );
};

export default PricingPage;