import React, { useState } from 'react';
import SnowOverlay from './components/SnowOverlay';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import BottomNav from './components/BottomNav';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden font-display">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-[20s] hover:scale-105" 
          role="img"
          aria-label="Cozy Christmas living room with decorated tree and gifts by fireplace" 
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsSp_eqdrRuMPM6CafIXNylc6oaN8y8LdBGP7ROjckxRv14XAHMUPx3KT3fwxx6smG_vN397sR2EnLYPCbACRYtNmNepaMmxd-uFOzoD-jah7vSlsoR9jf6EX-mnHoIRRlnE-LjK3IJuLgHUiAqDTffDBUMYo1Z3dffMNSuKHs7iIp3jo9bfDBs6wyhhjLeQvP_0Vda5_JClzKE6YEA3MmzUOjQa6wnoq8duL4Oha2SYXgXQPSpL14rgkT7bUljA3lJIww6e7plqVY")'
          }}
        >
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
          {/* Subtle tint for theme cohesion */}
          <div className="absolute inset-0 bg-background-dark/20 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Decorative Snow Overlay */}
      <SnowOverlay />

      {/* Top Bar with Music Toggle */}
      <TopBar />

      {/* Main Interactive Content */}
      <MainContent />

      {/* Floating Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;