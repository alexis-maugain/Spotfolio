export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Logo animé */}
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-.2.3-.5.4-.8.4-.2 0-.3 0-.5-.1-2.4-1.5-5.4-1.8-9-.9-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 4-.9 7.3-.5 10.1 1.1.4.2.5.7.3 1zm1.1-2.5c-.2.4-.7.5-1.1.3-2.8-1.7-7-2.2-10.3-1.2-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.8-1.1 8.4-.6 11.6 1.4.4.2.6.7.4 1.1zm.1-2.6c-3.4-2-9-2.2-12.2-1.2-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 3.7-1.1 10.1-.9 14.1 1.4.5.3.7 1 .4 1.5-.3.5-1 .7-1.5.4z"/>
          </svg>
        </div>
        
        {/* Barre de chargement */}
        <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
