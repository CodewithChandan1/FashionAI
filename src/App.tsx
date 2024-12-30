import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import FeaturesPage from './components/features/FeaturesPage';
import PricingPage from './components/pricing/PricingPage';
import AboutPage from './components/about/AboutPage';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import DashboardPage from './components/dashboard/DashboardPage';

function App() {
  // For demo purposes, showing all pages
  // In a real app, you'd use a router to show only one page at a time
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <FeaturesPage />
      <PricingPage />
      <AboutPage />
      <SignInPage />
      <SignUpPage />
      <DashboardPage />
    </div>
  );
}

export default App;