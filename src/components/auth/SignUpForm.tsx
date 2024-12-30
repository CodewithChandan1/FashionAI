import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const SignUpForm = () => {
  const handleSignUp = (data: { email: string; password: string; name: string }) => {
    console.log('Sign up:', data);
  };

  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
      <h2 className="text-3xl font-bold mb-6">Create Account</h2>
      <AuthForm type="sign-up" onSubmit={handleSignUp} />
      <p className="mt-4 text-center text-gray-400">
        Already have an account?{' '}
        <Link to="/sign-in" className="text-purple-400 hover:text-purple-300">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;