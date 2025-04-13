import React, { useState, useEffect } from 'react';

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  // Messages plus courts et plus directs
  const loadingMessages = [
    "Initialisation du moteur 3D...",
    "Compression des textures...",
    "Adaptation à votre matériel...",
    "Presque terminé!",
    "Dernières optimisations..."
  ];

  // Durée totale réduite à 12 secondes
  useEffect(() => {
    const totalDuration = 12000; // 12 secondes
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(newProgress);
      
      // Changer de message toutes les 2-3 secondes
      setMessageIndex(Math.floor((elapsed / 3000) % loadingMessages.length));
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        onLoaded(); // Callback quand le chargement est terminé
      }
    };
    
    updateProgress();
    
    return () => cancelAnimationFrame(updateProgress);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50 text-white font-sans">
      {/* Animation plus simple et plus rapide */}
      <div className="relative w-32 h-32 mb-6">
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-blue-300 border-b-blue-200 border-l-blue-100 rounded-full animate-spin animate-duration-[0.8s]"></div>
        <div className="absolute inset-4 border-4 border-transparent border-t-purple-400 border-r-purple-300 border-b-purple-200 border-l-purple-100 rounded-full animate-spin-reverse animate-duration-[0.6s]"></div>
      </div>
      
      {/* Barre de progression visuelle */}
      <div className="w-64 h-2 bg-gray-700 rounded-full mb-4 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Message principal + pourcentage */}
      <div className="text-center mb-2">
        <p className="text-lg font-medium">{loadingMessages[messageIndex]}</p>
        <p className="text-sm opacity-80">{Math.floor(progress)}%</p>
      </div>
      
      {/* Info technique légère */}
      <div className="text-xs opacity-60 max-w-xs text-center">
        <p>Chargement optimisé pour votre configuration</p>
      </div>
    </div>
  );
};

export default Loader;