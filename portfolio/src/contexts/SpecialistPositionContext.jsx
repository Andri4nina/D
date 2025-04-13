import React, { createContext, useState, useMemo, useContext, useEffect } from "react";
import * as THREE from "three";

// Créer le contexte
export const SpecialistPositionContext = createContext();

// Créer le Provider
export const SpecialistPositionProvider = ({ children }) => {
  const [specialists, setSpecialists] = useState([]); // Liste des spécialistes
  const [dronePosition, setDronePosition] = useState(new THREE.Vector3());
  const [closestSpecialist, setClosestSpecialist] = useState(null);
  const [glowingSpecialist, setGlowingSpecialist] = useState(null); // État pour l'effet de glow
 
  // Met à jour le spécialiste le plus proche du drone
  useEffect(() => {
   
    if (dronePosition && specialists.length > 0) {
      let minDistance = Infinity;
      let closest = null;

      specialists.forEach((specialist) => {
        const distance = dronePosition.distanceTo(specialist.position);
        if (distance < minDistance) {
          minDistance = distance;
          closest = specialist;
        }
      });

      setClosestSpecialist(closest);
     /*  console.log(glowingSpecialist) */
            // Activer ou désactiver l'effet de glow en fonction de la distance
      if (minDistance < 5) { // Distance seuil pour l'effet de glow
        setGlowingSpecialist(closest);
      } else {
        setGlowingSpecialist(null);
      }
    }
  }, [dronePosition, specialists]);

  // Fonction pour enregistrer un spécialiste dans la liste
  const registerSpecialist = (name, position) => {
    setSpecialists((prev) => {
      const isAlreadyRegistered = prev.some((specialist) => specialist.name === name);
      if (!isAlreadyRegistered) {
        return [...prev, { name, position }];
      }
      return prev;
    });
  };

  // Fonction pour mettre à jour la position du drone
  const updateDronePosition = (position) => {
    setDronePosition(position);
  };

  // Valeur du contexte
  const value = useMemo(() => ({
    specialists,
    registerSpecialist,
    dronePosition,
    updateDronePosition,
    closestSpecialist,
    glowingSpecialist, // Ajouter ici
  }), [specialists, dronePosition, closestSpecialist, glowingSpecialist]);

  return (
    <SpecialistPositionContext.Provider value={value}>
      {children}
    </SpecialistPositionContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useSpecialistPositionContext = () => {
  const context = useContext(SpecialistPositionContext);
  if (!context) {
    throw new Error(
      "useSpecialistPositionContext doit être utilisé à l'intérieur d'un SpecialistPositionProvider"
    );
  }
  return context;
};