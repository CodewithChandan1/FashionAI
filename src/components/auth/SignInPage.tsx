import React from 'react';
import AuthForm from './AuthForm';

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AuthForm 
          type="sign-in"
          onSubmit={(data) => console.log('Sign in:', data)}
        />
      </div>
    </div>
  );
};

export default SignInPage;