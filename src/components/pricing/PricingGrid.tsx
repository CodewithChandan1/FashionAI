import React from 'react';
import PricingCard from './PricingCard';

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

const PricingGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <PricingCard key={plan.name} {...plan} />
      ))}
    </div>
  );
};

export default PricingGrid;