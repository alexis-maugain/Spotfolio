import { Play, Pause, SkipBack, SkipForward, Heart, Maximize2, Minimize2 } from 'lucide-react';
import { Project } from '../types';
import { useState, useEffect, memo, useRef } from 'react';

interface PlayerProps {
  currentProject: Project | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onToggleFavorite: (projectId: string) => void;
  isFavorite: boolean;
  onExpand: () => void;
  isProjectViewOpen: boolean;
}

export const Player = memo(function Player({ 
  currentProject, 
  isPlaying, 
  onTogglePlay, 
  onPrevious, 
  onNext,
  onToggleFavorite,
  isFavorite,
  onExpand,
  isProjectViewOpen
}: PlayerProps) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Setup Audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / (audio.duration || 1)) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 180);
    };

    // End of audio -> auto next project maybe? (Optional)
    const handleEnded = () => {
      onNext();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      // Wait, we don't want to destroy audio on rerender, just remove listeners if umount
    };
  }, [onNext]);

  // Handle Play/Pause and track change
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (currentProject && currentProject.podcast) {
      const src = window.location.origin + currentProject.podcast;
      if (audio.src !== src) {
        audio.src = currentProject.podcast;
        audio.load();
      }
      
      if (isPlaying) {
        audio.play().catch(e => console.log('Audio play failed', e));
      } else {
        audio.pause();
      }
    } else {
      // No podcast for this project
      if (!audio.paused) {
        audio.pause();
      }
      audio.currentTime = 0;
    }
  }, [currentProject, isPlaying]);

  // Dummy progression for non-audio projects
  useEffect(() => {
    if (isPlaying && currentProject && !currentProject.podcast) {
      setDuration(180); // Reset to 180 max
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev >= 180 ? 0 : prev + 1;
          setProgress((next / 180) * 100);
          return next;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentProject]);

  // Reset counters when switching track (especially non-audio tracks)
  useEffect(() => {
    if (currentProject && !currentProject.podcast && audioRef.current) {
      setCurrentTime(0);
      setProgress(0);
      setDuration(180);
    } else if (currentProject?.podcast && audioRef.current) {
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
        setCurrentTime(audioRef.current.currentTime);
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    }
  }, [currentProject]);

  if (!currentProject) {
    return null;
  }

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      className="fixed bottom-0 left-0 bg-neutral-950 border-t border-neutral-800 z-[60] md:bottom-0 bottom-16 animate-slide-up"
      style={{ right: 'var(--scrollbar-width, 0px)' }}
    >
      {/* Progress Bar */}
      <div className="relative h-1 bg-neutral-800 group cursor-pointer">
        <div
          className="absolute h-full bg-green-500 transition-[width] duration-1000 linear"
          style={{ width: `${progress}%` }}
        />
        <div 
          className="absolute h-full hover:bg-green-400/20 w-full"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            setProgress(percentage);
            const clickTime = (percentage / 100) * duration;
            setCurrentTime(clickTime);
            if (audioRef.current && currentProject.podcast) {
              audioRef.current.currentTime = clickTime;
            }
          }}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        {/* Current Project Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <img
            src={currentProject.cover}
            alt=""
            className="w-14 h-14 rounded-md object-cover cursor-pointer hidden md:block hover:scale-105 transition-transform"
            onClick={onExpand}
            loading="lazy"
          />
          <div className="min-w-0">
            <p className="text-white truncate cursor-pointer hover:underline text-sm md:text-base font-semibold" onClick={onExpand}>
              {currentProject.title}
            </p>
            <p className="text-xs md:text-sm text-neutral-400 truncate">{currentProject.category}</p>
          </div>
          <button
            onClick={() => onToggleFavorite(currentProject.id)}
            aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            className={`hidden md:block cursor-pointer hover:scale-110 active:scale-95 transition-transform ${
              isFavorite ? 'text-green-500' : 'text-neutral-400 hover:text-white'
            } transition-colors`}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-4">
            <button
              onClick={onPrevious}
              aria-label="Projet précédent"
              className="text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <SkipBack size={20} />
            </button>
            
            <button
              onClick={onTogglePlay}
              aria-label={isPlaying ? 'Pause' : 'Lecture'}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-0.5" />}
            </button>
            
            <button
              onClick={onNext}
              aria-label="Projet suivant"
              className="text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <SkipForward size={20} />
            </button>
          </div>
          
          {/* Progress Time */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>{currentProject.podcast ? formatTime(currentTime) : `${Math.floor(currentTime)}s`}</span>
            <span>/</span>
            <span>{currentProject.podcast ? formatTime(duration) : `${Math.floor(duration)}s`}</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center justify-end gap-2 flex-1">
          <button
            onClick={onExpand}
            aria-label={isProjectViewOpen ? 'Réduire le projet' : 'Agrandir le projet'}
            className="bg-green-500 hover:bg-green-400 hover:scale-120 active:scale-95 rounded-full p-2 transition-all shadow-lg shadow-green-500/50 cursor-pointer"
          >
            {isProjectViewOpen ? <Minimize2 size={20} className="text-black" /> : <Maximize2 size={20} className="text-black" />}
          </button>
        </div>
      </div>
    </div>
  );
});