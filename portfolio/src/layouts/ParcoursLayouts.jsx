import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const ParcoursLayouts = ({ themeColor }) => {
    const parcoursItems = [
      {
        year: "2021-2022",
        title: "Licence 1",
        description: "DA2I Emit Fianarantsoa"
      },
      {
        year: "2022-2023",
        title: "Licence 2",
        description: "DA2I Emit Fianarantsoa"
      },
      {
        year: "Juin - Août 2023",
        title: "Stage en Informatique",
        description: "Ministere de l'Energie et des Hydrocarbures (M.E.H)"
      },
      {
        year: "Oct - Déc 2023",
        title: "Collaboration en Informatique",
        description: "Ministere de l'Energie et des Hydrocarbures (M.E.H)"
      },
      {
        year: "Oct 2023 - Présent",
        title: "Développeur à temps partiel",
        description: "Hope for a Future Madagascar (H.4.F)"
      },
      {
        year: "2023-2024",
        title: "Licence 3",
        description: "DA2I Emit Fianarantsoa"
      },
      {
        year: "2024-2025",
        title: "Master 1",
        description: "Science des Données & Intelligence Artificielle"
      }
    ];
  
    const timelineRef = useRef(null);
    const x = useMotionValue(0);
    const containerWidth = parcoursItems.length * 300;
    const dragConstraints = {
      left: -(containerWidth - (window.innerWidth || 0)),
      right: 0
    };
  
    const handleDragEnd = (event, info) => {
      if (info.offset.x < -100) {
        // Glisser vers la gauche
        x.set(x.get() - 300);
      } else if (info.offset.x > 100) {
        // Glisser vers la droite
        x.set(x.get() + 300);
      }
    };
  
    return (
      <section className="relative py-20 px-4" id="parcours">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 text-center" style={{ color: themeColor }}>
            Mon Parcours Académique & Professionnel
          </h3>
          
          <div className="relative h-96">
            {/* Ligne de temps */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2" />
            
            {/* Conteneur horizontal avec drag */}
            <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
              <motion.div 
                ref={timelineRef}
                className="inline-flex h-full items-center relative cursor-grab active:cursor-grabbing"
                style={{ x }}
                drag="x"
                dragConstraints={dragConstraints}
                onDragEnd={handleDragEnd}
                dragElastic={0.1}
                dragMomentum={false}
              >
                {parcoursItems.map((item, index) => (
                  <div 
                    key={index}
                    className="relative inline-block h-full px-8"
                    style={{ width: '300px' }}
                  >
                    {/* Point sur la ligne */}
                    <div 
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                      style={{ backgroundColor: themeColor }}
                    />
                    
                    {/* Carte */}
                    <div className={`
                      h-64 w-full p-6 rounded-xl shadow-lg
                      ${index % 2 === 0 ? 'mt-16' : 'mb-16'}
                      bg-white dark:bg-gray-800
                      inline-flex flex-col justify-between
                      transform hover:scale-105 transition-transform duration-300
                    `}>
                      <div>
                        <div 
                          className="text-sm font-semibold mb-2"
                          style={{ color: themeColor }}
                        >
                          {item.year}
                        </div>
                        <h4 className="text-xl font-bold dark:text-white mb-2">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-300 dark:text-gray-400">
            Glissez horizontalement pour voir tout mon parcours
          </p>
  
          {/* Boutons de navigation (optionnel) */}
          <div className="flex justify-center mt-4 space-x-4">
            <button 
              onClick={() => x.set(x.get() + 300)}
              className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
            >
              ←
            </button>
            <button 
              onClick={() => x.set(x.get() - 300)}
              className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
            >
              →
            </button>
          </div>
        </div>
      </section>
    );
  };

export default ParcoursLayouts