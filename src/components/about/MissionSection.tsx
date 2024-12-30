import React from 'react';

const MissionSection = () => {
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-300 mb-6">
            At FashionAI, we're revolutionizing the way people experience and shop for fashion. Our mission is to combine cutting-edge AI technology with the latest fashion trends to create a seamless, personalized shopping experience.
          </p>
          <p className="text-lg text-gray-300">
            We believe that everyone deserves to feel confident in their clothing choices, and our AI-powered platform makes that possible by providing accurate virtual try-ons and personalized style recommendations.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
            alt="Fashion Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;