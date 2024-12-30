import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Heart, 
  Settings, 
  LayoutDashboard,
  History,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview', path: '/dashboard' },
  { icon: <ShoppingBag className="w-5 h-5" />, label: 'My Wardrobe', path: '/dashboard/wardrobe' },
  { icon: <Heart className="w-5 h-5" />, label: 'Favorites', path: '/dashboard/favorites' },
  { icon: <History className="w-5 h-5" />, label: 'Try-On History', path: '/dashboard/history' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/dashboard/settings' }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen bg-white/5 border-r border-white/10">
      <div className="p-6">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors ${
              location.pathname === item.path ? 'bg-white/10 text-white' : ''
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
      <Link 
        to="/"
        className="absolute bottom-0 w-64 p-6 flex items-center text-gray-300 hover:text-white transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span className="ml-3">Sign Out</span>
      </Link>
    </div>
  );
};

export default Sidebar;