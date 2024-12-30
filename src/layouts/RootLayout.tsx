import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;