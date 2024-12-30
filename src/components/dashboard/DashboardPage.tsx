import React from 'react';
import DashboardLayout from './DashboardLayout';
import { Zap, ShoppingBag, Heart, Clock } from 'lucide-react';

const stats = [
  { icon: <Zap className="w-6 h-6" />, label: 'Try-Ons', value: '24' },
  { icon: <ShoppingBag className="w-6 h-6" />, label: 'Items', value: '12' },
  { icon: <Heart className="w-6 h-6" />, label: 'Favorites', value: '8' },
  { icon: <Clock className="w-6 h-6" />, label: 'Hours Saved', value: '5' }
];

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Welcome back, Sarah</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="text-purple-400">{stat.icon}</div>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="text-gray-400">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-6">Recent Try-Ons</h2>
          {/* Add recent try-ons content */}
        </div>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-6">Style Recommendations</h2>
          {/* Add recommendations content */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;