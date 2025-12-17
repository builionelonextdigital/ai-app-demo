import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const MainContent: React.FC = () => {
  const [giftOpened, setGiftOpened] = useState(false);

  const handleCelebrate = () => {
    // Fire confetti from the bottom center
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 50,
      colors: ['#f9f506', '#D42426', '#165B33', '#ffffff'] // Theme colors
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const openGift = () => {
    if (giftOpened) return;
    setGiftOpened(true);
    
    // Small confetti burst on gift open
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F8B229', '#ffffff'],
      shapes: ['star']
    });
  };

  return (
    <div className="relative z-10 flex flex-1 flex-col items-center justify-between pb-6 px-6 w-full max-w-md mx-auto">
      
      {/* Headline Section */}
      <div className="flex flex-col items-center mt-4 sm:mt-10 text-center animate-fade-in-down">
        <div className="px-4 py-1 bg-christmas-red/90 backdrop-blur-sm rounded-full mb-4 shadow-lg border border-white/10 ring-2 ring-white/20">
          <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Holiday Season</span>
        </div>
        
        <h1 className="text-white tracking-tight text-[42px] sm:text-6xl font-bold leading-none drop-shadow-xl">
          Spreading <br /> 
          <span className="text-primary relative inline-block">
            Joy!
            <svg className="absolute -top-4 -right-6 w-8 h-8 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </span>
        </h1>
        
        <p className="text-white/90 text-lg mt-3 font-medium drop-shadow-md max-w-[280px] sm:max-w-xs">
          Send warm wishes to your friends and family.
        </p>
      </div>

      {/* Interactive Area */}
      <div className="w-full flex flex-col gap-5 items-center mb-4">
        
        {/* Daily Gift Glassmorphism Card */}
        <div className={`w-full p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between transition-all duration-500 ${giftOpened ? 'bg-white/20 border-primary/50' : ''}`}>
          <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white shadow-inner transition-colors duration-500 ${giftOpened ? 'bg-christmas-gold' : 'bg-christmas-green'}`}>
              <span className={`material-symbols-outlined transition-transform duration-500 ${giftOpened ? 'rotate-12 scale-110' : ''}`}>
                {giftOpened ? 'card_giftcard' : 'redeem'}
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-base">
                {giftOpened ? 'Gift Opened!' : 'Daily Gift'}
              </span>
              <span className="text-white/70 text-xs">
                {giftOpened ? 'Come back tomorrow' : 'Waiting for you'}
              </span>
            </div>
          </div>
          <button 
            onClick={openGift}
            disabled={giftOpened}
            className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${
              giftOpened 
              ? 'text-white/50 cursor-default' 
              : 'bg-white/10 text-primary hover:bg-primary hover:text-black hover:shadow-lg'
            }`}
          >
            {giftOpened ? 'Done' : 'Open'}
          </button>
        </div>

        {/* Primary FAB (Floating Action Button style) */}
        <div className="w-full relative group">
          <button 
            onClick={handleCelebrate}
            className="relative z-10 flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-[2rem] h-20 px-2 bg-primary text-[#1c1c0d] shadow-[0_0_40px_-10px_rgba(249,245,6,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {/* Icon Circle */}
            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-christmas-red shadow-sm z-10 shrink-0">
              <span className="material-symbols-outlined filled text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                celebration
              </span>
            </div>
            
            {/* Text */}
            <span className="flex-1 text-center text-xl font-bold tracking-wide text-[#1c1c0d] z-10 uppercase mx-2">
              Tap to celebrate!
            </span>
            
            {/* Decorative End Icon */}
            <div className="h-16 w-16 flex items-center justify-center z-10 shrink-0">
              <span className="text-4xl animate-bounce-slight">🎄</span>
            </div>

            {/* Button Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
          </button>
          
          {/* Helper Text */}
          <p className="text-white/60 text-center text-xs font-medium mt-3 flex items-center justify-center gap-1">
            Press to release confetti & magic <span className="text-yellow-300">✨</span>
          </p>
        </div>
      </div>

    </div>
  );
};

export default MainContent;