import React from 'react';
import FeatureCards from './FeatureCards';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">The Future of</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Fashion is Here
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Experience clothes like never before with AI-powered virtual try-ons and real-time AR technology.
              Your perfect fit is just a scan away.
            </p>
            <HeroButtons />
          </div>
        </div>
        <FeatureCards />
      </div>
    </div>
  );
};

const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-opacity">
      Try Now
    </button>
    <button className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors">
      Learn More
    </button>
  </div>
);

export default Hero;