import React from 'react';

const SnowOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 snow-overlay" aria-hidden="true" />
  );
};

export default SnowOverlay;