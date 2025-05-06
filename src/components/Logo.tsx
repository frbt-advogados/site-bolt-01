import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 50 }) => {
  return (
    <div 
      className="relative" 
      style={{ 
        width: `${size}px`, 
        height: `${size}px` 
      }}
    >
      <div className="w-full h-full bg-primary border-2 border-secondary flex items-center justify-center">
        <div className="w-1/2 h-full bg-primary flex items-center justify-center">
          <span className="font-serif text-white font-bold" style={{ fontSize: `${size * 0.5}px` }}>F</span>
        </div>
        <div className="w-1/2 h-full bg-secondary flex items-center justify-center">
          <span className="font-serif text-primary font-bold" style={{ fontSize: `${size * 0.5}px` }}>B</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;