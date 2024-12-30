import React from 'react';
import { ScanFace, Sparkles, Smartphone, Share2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Try Now
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<ScanFace className="w-8 h-8" />}
            title="AI Body Scanning"
            description="Precise measurements using advanced AI technology"
          />
          <FeatureCard 
            icon={<Sparkles className="w-8 h-8" />}
            title="Smart Styling"
            description="Personalized recommendations based on your style"
          />
          <FeatureCard 
            icon={<Smartphone className="w-8 h-8" />}
            title="AR Try-On"
            description="See clothes on yourself in real-time"
          />
          <FeatureCard 
            icon={<Share2 className="w-8 h-8" />}
            title="Share & Shop"
            description="Share your looks and shop directly"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Hero;