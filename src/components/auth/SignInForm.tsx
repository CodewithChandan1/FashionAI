import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const SignInForm = () => {
  const handleSignIn = (data: { email: string; password: string }) => {
    console.log('Sign in:', data);
  };

  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
      <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
      <AuthForm type="sign-in" onSubmit={handleSignIn} />
      <p className="mt-4 text-center text-gray-400">
        Don't have an account?{' '}
        <Link to="/sign-up" className="text-purple-400 hover:text-purple-300">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;