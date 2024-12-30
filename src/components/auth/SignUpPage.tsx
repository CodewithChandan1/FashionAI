import React from 'react';
import AuthForm from './AuthForm';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AuthForm 
          type="sign-up"
          onSubmit={(data) => console.log('Sign up:', data)}
        />
      </div>
    </div>
  );
};

export default SignUpPage;