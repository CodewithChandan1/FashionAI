import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ name, price, description, features, highlighted = false }: PricingCardProps) => {
  return (
    <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
      highlighted 
        ? 'bg-purple-600/20 border-purple-400 transform hover:-translate-y-2' 
        : 'bg-white/5 border-white/10 hover:border-purple-400'
    }`}>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="w-5 h-5 text-purple-400 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 px-6 py-3 rounded-full font-semibold transition-opacity ${
        highlighted
          ? 'bg-gradient-to-r from-purple-600 to-pink-600'
          : 'border border-white/20 hover:bg-white/10'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;