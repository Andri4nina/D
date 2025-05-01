import React, { useMemo } from 'react';
import Carrefour from '../components3D/ways/Carrefour';
import TurnT from '../components3D/ways/TurnT';
import { StreetStraight } from '../components3D/ways/StreetStraight';
import { Turn } from '../components3D/ways/Turn';


const WayScene = () => {
  // Configuration mémoïsée des éléments
  const sceneConfig = useMemo(() => ({
    carrefours: [
      /* Qg */
      { position: [16, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [-16, 0, 8], rotation: [0, Math.PI / 2, 0] },


      /* Capitol */
      { position: [16, 0, -40], rotation: [0, 2 * Math.PI, 0] },

      /* School */
      { position: [72, 0, -40], rotation: [0, Math.PI / 2, 0] },

      /* Warehousered */
      { position: [64, 0, 56], rotation: [0, 0, 0] },
      { position: [16, 0, 56], rotation: [0, 0, 0] },

      /* Police */
      { position: [-16, 0, 56], rotation: [0, Math.PI / 2, 0] },

      /* Poste */
      { position: [-32, 0, 8], rotation: [0, 0, 0] },

      /* Gas Station */
      { position: [-64, 0, 8], rotation: [0, Math.PI / 2, 0] },
    ],

    turnTs: [
      /* Qg */
      { position: [16, 0, -24], rotation: [0, Math.PI, 0] },
      { position: [-16, 0, -24], rotation: [0, 2 * Math.PI, 0] },

      /* Capitol */
      { position: [-16, 0, -40], rotation: [0, 2 * Math.PI, 0] },

      /* School */
      { position: [64, 0, 8], rotation: [0, -Math.PI / 2, 0] },

      /* Ancient portfolio */
      { position: [-16, 0, 24], rotation: [0, 0, 0] },
      { position: [16, 0, 24], rotation: [0, -Math.PI, 0] },
    ],

    turns: [
      /* School */
      { position: [72, 0, 8], rotation: [0, Math.PI, 0] },

      /* Gas Station */
      { position: [-32, 0, 40], rotation: [0, Math.PI, 0] },
      { position: [-64, 0, 40], rotation: [0, Math.PI / 2, 0] },

      /* Hospital */
      { position: [-64, 0, -40], rotation: [0, 0, 0] },
      { position: [-32, 0, -40], rotation: [0, -Math.PI / 2, 0] },
    ],

    streets: [
      /* Qg */
      { position: [0, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [-8, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [-16, 0, 0], rotation: [0, 0, 0] },
      { position: [-16, 0, -8], rotation: [0, 0, 0] },
      { position: [-16, 0, -16], rotation: [0, 0, 0] },
      { position: [16, 0, 0], rotation: [0, 0, 0] },
      { position: [16, 0, -8], rotation: [0, 0, 0] },
      { position: [16, 0, -16], rotation: [0, 0, 0] },
      { position: [0, 0, -24], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, -24], rotation: [0, Math.PI / 2, 0] },
      { position: [-8, 0, -24], rotation: [0, Math.PI / 2, 0] },

      /* Capitol */
      { position: [0, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [-8, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [16, 0, -32], rotation: [0, 0, 0] },
      { position: [-16, 0, -32], rotation: [0, 0, 0] },

      /* School */
      { position: [24, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [32, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [40, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [48, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [56, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [24, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [32, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [40, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [48, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [56, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [64, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [72, 0, -32], rotation: [0, 0, 0] },
      { position: [72, 0, -24], rotation: [0, 0, 0] },
      { position: [72, 0, -16], rotation: [0, 0, 0] },
      { position: [72, 0, -8], rotation: [0, 0, 0] },
      { position: [72, 0, 0], rotation: [0, 0, 0] },

      /* Warehouse red */
      { position: [24, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [32, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [40, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [48, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [56, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [64, 0, 16], rotation: [0, 0, 0] },
      { position: [64, 0, 24], rotation: [0, 0, 0] },
      { position: [64, 0, 32], rotation: [0, 0, 0] },
      { position: [64, 0, 40], rotation: [0, 0, 0] },
      { position: [64, 0, 48], rotation: [0, 0, 0] },
      { position: [16, 0, 16], rotation: [0, 0, 0] },
      { position: [16, 0, 32], rotation: [0, 0, 0] },
      { position: [16, 0, 40], rotation: [0, 0, 0] },
      { position: [16, 0, 48], rotation: [0, 0, 0] },

      /* Ancient portfolio */
      { position: [-16, 0, 16], rotation: [0, 0, 0] },
      { position: [-8, 0, 24], rotation: [0, Math.PI / 2, 0] },
      { position: [-0, 0, 24], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, 24], rotation: [0, Math.PI / 2, 0] },

      /* Police */
      { position: [-8, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [-0, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, 56], rotation: [0, Math.PI / 2, 0] },
      { position: [-16, 0, 48], rotation: [0, 0, 0] },
      { position: [-16, 0, 40], rotation: [0, 0, 0] },
      { position: [-16, 0, 32], rotation: [0, 0, 0] },

      /* Poste */
      { position: [-24, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [-32, 0, 16], rotation: [0, 0, 0] },
      { position: [-32, 0, 24], rotation: [0, 0, 0] },
      { position: [-32, 0, 32], rotation: [0, 0, 0] },

      /* Gas Station */
      { position: [-40, 0, 40], rotation: [0, Math.PI / 2, 0] },
      { position: [-48, 0, 40], rotation: [0, Math.PI / 2, 0] },
      { position: [-56, 0, 40], rotation: [0, Math.PI / 2, 0] },
      { position: [-64, 0, 16], rotation: [0, 0, 0] },
      { position: [-64, 0, 24], rotation: [0, 0, 0] },
      { position: [-64, 0, 32], rotation: [0, 0, 0] },
      { position: [-40, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [-48, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [-56, 0, 8], rotation: [0, Math.PI / 2, 0] },
      { position: [-72, 0, 8], rotation: [0, Math.PI / 2, 0] },

      /* Hospital */
      { position: [-64, 0, 0], rotation: [0, 0, 0] },
      { position: [-64, 0, -8], rotation: [0, 0, 0] },
      { position: [-64, 0, -16], rotation: [0, 0, 0] },
      { position: [-64, 0, -24], rotation: [0, 0, 0] },
      { position: [-64, 0, -32], rotation: [0, 0, 0] },
      { position: [-32, 0, 0], rotation: [0, 0, 0] },
      { position: [-32, 0, -8], rotation: [0, 0, 0] },
      { position: [-32, 0, -16], rotation: [0, 0, 0] },
      { position: [-32, 0, -24], rotation: [0, 0, 0] },
      { position: [-32, 0, -32], rotation: [0, 0, 0] },
      { position: [-40, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [-48, 0, -40], rotation: [0, Math.PI / 2, 0] },
      { position: [-56, 0, -40], rotation: [0, Math.PI / 2, 0] },

    ]

  }), []);

  return (
    <group position={[0, 0.05, 0]}>
      {/* Carrefours */}
      {sceneConfig.carrefours.map((item, i) => (
        <group key={`carrefour-${i}`} position={item.position}>
          <Carrefour />
        </group>
      ))}

      {/* TurnTs */}
      {sceneConfig.turnTs.map((item, i) => (
        <group
          key={`turnt-${i}`}
          position={item.position}
          rotation={item.rotation}
        >
          <TurnT />
        </group>
      ))}

      {/* Rues droites avec positions absolues */}
      {sceneConfig.streets.map((street, i) => (
        <group
          key={`street-${i}`}
          position={street.position}
          rotation={street.rotation || [0, 0, 0]}
        >
          <StreetStraight />
        </group>
      ))}


      {sceneConfig.turns.map((turn, i) => (
        <group
          key={`turn-${i}`}
          position={turn.position}
          rotation={turn.rotation || [0, 0, 0]}
        >
          <Turn />
        </group>
      ))}
    </group>
  );
};

export default React.memo(WayScene);