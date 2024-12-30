import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className = '' }: NavLinksProps) => {
  return (
    <nav className={`${className} items-center space-x-8`}>
      <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
        Features
      </Link>
      <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
        Pricing
      </Link>
      <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
        About
      </Link>
      <Link
        to="/sign-in"
        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-opacity"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default NavLinks;