import { Home, Trophy, Grid3x3, User, Heart } from 'lucide-react';

interface MobileNavProps {
  activeView: string;
  onNavigate: (view: string) => void;
  favoriteProjects: string[];
}

export function MobileNav({ activeView, onNavigate, favoriteProjects }: MobileNavProps) {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'top-france', label: 'Top', icon: Trophy },
    { id: 'all', label: 'Singles', icon: Grid3x3 },
    { id: 'favorites', label: 'Favoris', icon: Heart },
    { id: 'about', label: 'Profil', icon: User }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-neutral-800 z-50 pb-safe">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-0 cursor-pointer ${
                isActive
                  ? 'text-white'
                  : 'text-neutral-400'
              }`}
            >
              <div className="relative">
                <Icon size={22} />
                {item.id === 'favorites' && favoriteProjects.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-black text-[10px] rounded-full flex items-center justify-center">
                    {favoriteProjects.length}
                  </span>
                )}
              </div>
              <span className="text-[10px] truncate max-w-[60px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}