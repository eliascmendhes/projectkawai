import { useState, useEffect } from 'react';

const PersistentAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance once
    const audioElement = new Audio('https://streaming.radio.co/sefac315e7/listen');
    setAudio(audioElement);

    // Store audio state in localStorage
    const storedIsPlaying = localStorage.getItem('audioIsPlaying') === 'true';
    setIsPlaying(storedIsPlaying);
    
    if (storedIsPlaying) {
      audioElement.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
        localStorage.setItem('audioIsPlaying', 'false');
      });
    }

    return () => {
      audioElement.pause();
      audioElement.src = '';
    };
  }, []);

  useEffect(() => {
    // Update localStorage whenever isPlaying changes
    localStorage.setItem('audioIsPlaying', isPlaying.toString());
    
    if (audio) {
      if (isPlaying) {
        audio.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border-2 border-kawaii-lavender"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <svg
          className="w-6 h-6 text-pink-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-pink-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </button>
  );
};

export default PersistentAudioPlayer;
