import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-purple-400">{role}</p>
    </div>
  );
};

export default TeamMember;