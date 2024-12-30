import React from 'react';
import TeamSection from './TeamSection';
import MissionSection from './MissionSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MissionSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutPage;