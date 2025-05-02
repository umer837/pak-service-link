
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <header className={`py-12 text-center ${className}`}>
      <h1 className="text-4xl font-bold text-connectpro-navy mb-3">{title}</h1>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </header>
  );
};

export default Header;
