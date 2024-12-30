import React from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavLinks className="hidden md:flex" />
          <button className="md:hidden p-2 text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;