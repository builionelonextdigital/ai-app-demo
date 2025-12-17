import React from 'react';
import { Tab, NavItem } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: Tab.HOME, icon: 'home', label: 'Home' },
  { id: Tab.GRID, icon: 'grid_view', label: 'Browse' },
  { id: Tab.LIKES, icon: 'favorite', label: 'Likes' },
  { id: Tab.PROFILE, icon: 'person', label: 'Profile' },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="relative z-20 px-6 pb-8 pt-2 w-full max-w-md mx-auto">
      <div className="h-20 w-full rounded-3xl bg-[#1c1c0d]/80 backdrop-blur-xl border border-white/10 flex items-center justify-around px-2 shadow-2xl ring-1 ring-black/20">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`group flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'bg-white/10 text-primary translate-y-[-4px] shadow-lg shadow-black/20' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <span 
                className={`material-symbols-outlined text-2xl transition-transform duration-300 ${isActive ? 'filled scale-110' : 'group-hover:scale-110'}`} 
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              
              {/* Active Indicator Dot */}
              {isActive && (
                <span className="h-1 w-1 bg-primary rounded-full absolute bottom-2"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;