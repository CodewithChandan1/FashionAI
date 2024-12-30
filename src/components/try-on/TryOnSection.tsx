import React from 'react';
import { Upload, Camera } from 'lucide-react';

const TryOnSection = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Virtual Try-On</h2>
          <p className="text-gray-400">Upload a photo or use your camera to start</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <UploadOption
            icon={<Upload className="w-8 h-8" />}
            title="Upload Photo"
            description="Use an existing photo from your device"
          />
          <UploadOption
            icon={<Camera className="w-8 h-8" />}
            title="Use Camera"
            description="Take a photo using your device's camera"
          />
        </div>
      </div>
    </section>
  );
};

interface UploadOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UploadOption = ({ icon, title, description }: UploadOptionProps) => (
  <button className="p-8 rounded-2xl border-2 border-dashed border-white/20 hover:border-purple-400 transition-colors text-center">
    <div className="flex justify-center text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </button>
);

export default TryOnSection;