import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import { isPlaying } from '../stores/audioStore';
import { Play, Pause } from 'lucide-react';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const $isPlaying = useStore(isPlaying);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('https://streaming.radio.co/sefac315e7/listen');
    audioRef.current.preload = 'none';

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      setIsLoading(true);
      if (!$isPlaying) {
        await audioRef.current.play();
        isPlaying.set(true);
      } else {
        audioRef.current.pause();
        isPlaying.set(false);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={togglePlayPause}
      disabled={isLoading}
      className="fixed bottom-20 right-6 z-50 p-4 rounded-full
        bg-white/90 backdrop-blur-sm border-4 border-[#FFC0CB]
        hover:border-[#FF69B4] hover:scale-110 
        shadow-lg transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={$isPlaying ? 'Pausar música' : 'Tocar música'}
    >
      {isLoading ? (
        <div className="w-6 h-6 rounded-full border-4 border-[#FF69B4] border-t-transparent animate-spin" />
      ) : $isPlaying ? (
        <Pause className="w-6 h-6 text-[#FF69B4]" />
      ) : (
        <Play className="w-6 h-6 text-[#FF69B4]" />
      )}
    </button>
  );
};

export default MusicPlayer;
