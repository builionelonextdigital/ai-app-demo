import React, { useState, useRef, useEffect } from 'react';

const TRACKS = [
  { 
    title: "Deck the Halls", 
    url: "https://assets.mixkit.co/music/preview/mixkit-deck-the-halls-2993.mp3" 
  },
  { 
    title: "Jingle Bells", 
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Jazz_Sampler/Kevin_MacLeod_-_Jingle_Bells.mp3" 
  },
  { 
    title: "We Wish You", 
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Christmas_Rap/Kevin_MacLeod_-_We_Wish_you_a_Merry_Christmas.mp3" 
  }
];

const TopBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio object
  useEffect(() => {
    audioRef.current = new Audio(TRACKS[currentTrackIndex].url);
    audioRef.current.volume = 0.5;
    
    // Auto-advance to next track
    const handleEnded = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current = null;
      }
    };
  }, []);

  // Handle track changes
  useEffect(() => {
    if (!audioRef.current) return;

    // Check if URL changed
    if (audioRef.current.src !== TRACKS[currentTrackIndex].url) {
      audioRef.current.src = TRACKS[currentTrackIndex].url;
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [currentTrackIndex, isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio autoplay blocked interaction required", e));
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    if (!isPlaying) {
        setIsPlaying(true);
        // Effect will handle playing
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-end px-6 py-4 pt-12 md:pt-8 gap-2">
      <div className="flex items-center gap-3">
        {isPlaying && (
            <div className="text-white/80 text-xs font-medium animate-fade-in-down">
                ♫ {TRACKS[currentTrackIndex].title}
            </div>
        )}
        
        <div className="flex items-center bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/10">
            <button 
                onClick={toggleMusic}
                className={`flex items-center justify-center overflow-hidden rounded-full h-10 w-10 transition-all duration-300 shadow-lg ${
                isPlaying 
                    ? 'bg-primary text-black' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                {isPlaying ? 'music_note' : 'music_off'}
                </span>
                
                {/* Visual equalizer effect when playing */}
                {isPlaying && (
                <span className="absolute inset-0 flex items-center justify-center opacity-30">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                </span>
                )}
            </button>
            
            {/* Next Track Button */}
             <button 
                onClick={nextTrack}
                className="flex items-center justify-center h-10 w-8 text-white/70 hover:text-white transition-colors rounded-r-full"
                aria-label="Next track"
            >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                skip_next
                </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;