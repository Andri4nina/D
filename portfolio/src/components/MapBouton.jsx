import React, { useState } from 'react';

const MapBouton = () => {
  const [showMap, setShowMap] = useState(false); // État pour afficher ou masquer la carte

  return (
    <>
      <div className="hidden md:block absolute bottom-5 right-5">
        {/* Bouton avec icône de carte */}
        <button
          onClick={() => setShowMap(!showMap)}
          className="bg-gray-700 cursor-pointer text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        </button>

        {/* Carte avec animation de transition */}
        <div
          className={`mt-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
            showMap ? 'opacity-100 translate-y-0 h-[220px] w-96' : 'opacity-0 translate-y-4 pointer-events-none h-0 w-0'
          }`}
        >
          {/* Représentation simplifiée de ton monde 3D en 2D */}
          <div className="relative w-full h-full">
            {/* Exemple de contenu de la carte */}
            <div
              className="absolute w-4 h-4 bg-red-500 rounded-full"
              style={{ top: '20%', left: '30%' }}
            >
              {/* Point représentant un élément du monde 3D */}
            </div>
            <div
              className="absolute w-4 h-4 bg-blue-500 rounded-full"
              style={{ top: '50%', left: '60%' }}
            >
              {/* Autre point représentant un élément du monde 3D */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapBouton;