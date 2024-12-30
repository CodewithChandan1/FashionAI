import React from 'react';
import PricingCard from './PricingCard';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for trying out FashionAI",
    features: [
      "Basic virtual try-on",
      "5 style recommendations per month",
      "Basic measurement analysis",
      "Community access"
    ]
  },
  {
    name: "Pro",
    price: "$19/month",
    description: "For fashion enthusiasts",
    features: [
      "Advanced AR try-on",
      "Unlimited style recommendations",
      "Precise body measurements",
      "Priority support",
      "Style history tracking"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For fashion brands and retailers",
    features: [
      "Custom AR solutions",
      "API access",
      "Advanced analytics",
      "Dedicated support",
      "Custom integrations"
    ]
  }
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 text-lg">Choose the perfect plan for your fashion journey</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;