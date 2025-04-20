import React, { useState } from "react";

const TouchDrone = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="hidden md:block absolute bottom-5 left-5 bg-gray-800 w-[300px] p-4 rounded-lg shadow-lg text-sm border border-gray-700">
      {/* Chevron pour afficher/cacher */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h3 className="text-center font-bold text-gray-200">🎮 Contrôles du Drone</h3>
        <span
          className={`transition-transform duration-300 text-gray-200 ${isVisible ? "rotate-0" : "rotate-180"
            }`}
        >
          ▼
        </span>
      </div>

      {/* Contenu avec animation */}
      <div className={`overflow-hidden transition-all ${isVisible ? "h-[220px]" : "h-0"}`}>{/*250  */}
        <div className="flex items-center gap-5 my-2">
          <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">Échap</span>
          <div className="text-gray-200">Quitter le mode immersif</div>
        </div>

        {/* <div className="flex items-center gap-5 my-2">
          <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">Tab</span>
          <div className="text-gray-200">Afficher/Cacher discussion</div>
        </div> */}

        <div className="flex items-center gap-5 my-2">
          <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">P</span>
          <div className="text-gray-200">Allumer/Éteindre le drone</div>
        </div>

        <div className="flex items-center gap-5 my-2">
          <div className="grid grid-cols-3 gap-1 text-center">
            <div></div>
            <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">W</span>
            <div></div>

            <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">A</span>
            <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">S</span>
            <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">D</span>
          </div>
          <div className="text-gray-200">Déplacement</div>
        </div>

        <div className="flex items-center gap-5 my-2">
          <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">Z</span>
          <div className="text-gray-200">Monter</div>
        </div>

        <div className="flex items-center gap-5 my-2">
          <span className="bg-gray-700 w-10 h-7 flex items-center justify-center rounded text-gray-200">X</span>
          <div className="text-gray-200">Descendre</div>
        </div>
      </div>
    </div>
  );
};

export default TouchDrone;