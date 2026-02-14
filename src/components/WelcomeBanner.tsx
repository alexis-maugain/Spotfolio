import { } from 'lucide-react';

export function WelcomeBanner() {
  return (
    <div
      className="relative bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-6 md:p-12 overflow-visible animate-fade-in"
      style={{ marginBottom: '2rem' }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/20 to-green-700/40 rounded-2xl" />
      
      {/* Decorative circles - contained to prevent horizontal overflow */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-start gap-4">
      {/* Avatar */}
      <div className="hidden md:block absolute right-6 z-10" style={{ bottom: '-10rem', right: '8rem' }}>
        <img src="./assets/avatar.svg" alt="Avatar" className="w-32 h-auto" />
      </div>

        <div className="flex-1">
          <h1
            className="text-white mb-2 text-2xl md:text-[2.5rem]"
            style={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            Bienvenue dans mon univers.
          </h1>
          
          <p className="text-white/90 text-sm md:text-lg">
            Ici, chaque projet est un morceau, chaque compétence une note, et chaque domaine une playlist.
          </p>
        </div>
      </div>
    </div>
  );
}