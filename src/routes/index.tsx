import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import HomePage from '../pages/HomePage';
import FeaturesPage from '../pages/FeaturesPage';
import PricingPage from '../pages/PricingPage';
import AboutPage from '../pages/AboutPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import WardrobePage from '../pages/dashboard/WardrobePage';
import FavoritesPage from '../pages/dashboard/FavoritesPage';
import TryOnHistoryPage from '../pages/dashboard/TryOnHistoryPage';
import SettingsPage from '../pages/dashboard/SettingsPage';
import DashboardPage from '../components/dashboard/DashboardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'sign-in', element: <SignInPage /> },
      { path: 'sign-up', element: <SignUpPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'wardrobe', element: <WardrobePage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'history', element: <TryOnHistoryPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);