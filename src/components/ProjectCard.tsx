import { Play, Heart, Mic2 } from 'lucide-react';
import { Project } from '../types';
import { memo } from 'react';

interface ProjectCardProps {
  project: Project;
  onPlay: (project: Project) => void;
  onToggleFavorite: (projectId: string) => void;
  isFavorite: boolean;
  isPlaying: boolean;
}

export const ProjectCard = memo(function ProjectCard({ project, onPlay, onToggleFavorite, isFavorite, isPlaying }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-neutral-900 rounded-lg p-4 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
      onClick={() => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'project_click',
          project_name: project.title,
          project_category: project.category,
        });
        onPlay(project);
      }}
    >
      {/* Cover Image */}
      <div className="relative mb-4 aspect-square rounded-md overflow-hidden bg-neutral-800">
        <img 
          src={project.cover} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Play Button Overlay */}
        <div 
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer bg-green-500 hover:scale-105 active:scale-95 transition-transform duration-150"
            aria-label={`Lire ${project.title}`}
            onClick={(e) => {
              e.stopPropagation();
              onPlay(project);
            }}
          >
            <Play size={24} fill="black" className="text-black ml-0.5" />
          </button>
        </div>

        {/* Podcast Badge */}
        {project.podcast && (
          <div style={{ position: 'absolute', bottom: 8, left: 8, display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 999, backdropFilter: 'blur(4px)', whiteSpace: 'nowrap' }}>
            <Mic2 size={10} />
            Podcast dispo
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(project.id);
          }}
          aria-label={isFavorite ? `Retirer ${project.title} des favoris` : `Ajouter ${project.title} aux favoris`}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            isFavorite 
              ? 'bg-green-500 text-black' 
              : 'bg-black/60 text-neutral-400 hover:text-white opacity-0 group-hover:opacity-100'
          }`}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Project Info */}
      <div>
        <p className="text-white mb-1 truncate text-sm md:text-base font-semibold">{project.title}</p>
        <p className="text-xs md:text-sm text-neutral-400 truncate">{project.category}</p>
      </div>

      {/* Playing Indicator */}
      {isPlaying && (
        <div className="absolute bottom-4 right-4 flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 bg-green-500 rounded-full animate-pulse"
              style={{ height: '12px', animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );
});