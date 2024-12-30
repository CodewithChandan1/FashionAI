import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  );
};

export default PageHeader;