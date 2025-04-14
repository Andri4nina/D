import React, { useState, useEffect } from 'react';

const Loader = ({ onLoaded, themeColor}) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const loadingMessages = [
    "Initialisation du moteur 3D...",
    "Compression des textures...",
    "Adaptation à votre matériel...",
    "Presque terminé!",
    "Dernières optimisations..."
  ];

  // Génération de particules aléatoires
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Créer 15 particules flottantes
    const newParticles = Array.from({ length: 15 }).map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.3 + 0.1,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    // Animation de chargement
    const totalDuration = 12000;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(newProgress);
      
      setMessageIndex(Math.floor((elapsed / 3000) % loadingMessages.length));
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(onLoaded, 500); // Petit délai pour la fin de l'animation
      }
    };
    
    updateProgress();
    
    return () => cancelAnimationFrame(updateProgress);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50 text-white font-sans overflow-hidden">
      {/* Particules flottantes */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: themeColor,
            opacity: particle.opacity,
            animationDuration: `${particle.speed}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Animation centrale améliorée */}
      <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
        {/* Cercle externe pulsant */}
        <div 
          className="absolute inset-0 rounded-full border-2 opacity-20"
          style={{
            borderColor: themeColor,
            animation: 'pulse 2s infinite alternate'
          }}
        />
        
        {/* Sphère 3D avec gradient */}
        <div 
          className="relative w-24 h-24 rounded-full shadow-lg"
          style={{
            background: `radial-gradient(circle at 30% 30%, white, ${themeColor})`,
            boxShadow: `0 0 20px ${themeColor}`
          }}
        >
          {/* Reflets */}
          <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white opacity-30 blur-sm"></div>
        </div>
      </div>
      
      {/* Barre de progression améliorée */}
      <div className="w-64 h-2.5 bg-gray-800 rounded-full mb-4 overflow-hidden relative">
        <div 
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{ 
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${themeColor}, ${adjustBrightness(themeColor, 1.3)})`,
            boxShadow: `0 0 8px ${themeColor}`
          }}
        />
        {/* Effet de remplissage */}
        <div 
          className="absolute top-0 left-0 h-full w-8 bg-white opacity-30 animate-progressGlow"
          style={{ left: `${progress}%` }}
        />
      </div>
      
      {/* Contenu textuel */}
      <div className="text-center mb-2">
        <p className="text-lg font-medium">{loadingMessages[messageIndex]}</p>
        <p className="text-sm opacity-80 mt-1">{Math.floor(progress)}%</p>
      </div>
      
      {/* Légende technique avec effet de fondu */}
      <div className="text-xs opacity-60 max-w-xs text-center animate-fadeInOut">
        <p>Chargement optimisé • {navigator.userAgent.split(' ')[0]}</p>
      </div>

      {/* Styles CSS-in-JS pour les animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(5px); }
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.2; }
          100% { transform: scale(1.05); opacity: 0.4; }
        }
        @keyframes progressGlow {
          0% { opacity: 0; }
          50% { opacity: 0.4; }
          100% { opacity: 0; }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-float { animation-name: float; animation-iteration-count: infinite; }
        .animate-progressGlow { animation: progressGlow 1.5s infinite; }
        .animate-fadeInOut { animation: fadeInOut 3s infinite; }
      `}</style>
    </div>
  );
};

// Fonction utilitaire pour ajuster la luminosité d'une couleur HEX
function adjustBrightness(color, factor) {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const adjusted = (num) => Math.min(255, Math.floor(num * factor));
  
  return `#${adjusted(r).toString(16).padStart(2, '0')}${adjusted(g).toString(16).padStart(2, '0')}${adjusted(b).toString(16).padStart(2, '0')}`;
}

export default Loader;