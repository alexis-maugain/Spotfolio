import { Home, Trophy, Grid3x3, User, Mail } from 'lucide-react';

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
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'about', label: 'Profil', icon: User }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 bg-neutral-950 border-t border-neutral-800 z-50 pb-safe" style={{ right: 'var(--scrollbar-width, 0px)' }}>
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
              </div>
              <span className="text-[10px] truncate max-w-[60px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}