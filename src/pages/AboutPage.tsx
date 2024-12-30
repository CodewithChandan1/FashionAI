import React from 'react';
import MissionSection from '../components/about/MissionSection';
import TeamSection from '../components/about/TeamSection';
import PageHeader from '../components/common/PageHeader';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="About FashionAI"
          description="Revolutionizing the future of fashion with AI"
        />
        <MissionSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutPage;