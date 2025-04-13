import React, { useMemo } from 'react';
import Carrefour from '../components/3D/Carrefour';
import TurnT from '../components/3D/TurnT';
import { StreetStraight } from '../components/3D/StreetStraight';

const WayScene = ({isNight}) => {
  // Configuration mémoïsée des éléments
  const sceneConfig = useMemo(() => ({
    carrefours: [
      { position: [-16, 0, 7] },
      { position: [16, 0, 7] },

      { position: [-32, 0, 7] },
      { position: [-64, 0, -41],},
      { position: [-64, 0, 7],},

      { position: [64, 0, 7],},
      { position: [64, 0, 54],},
      { position: [16, 0, 54],},

      { position: [-64, 0, 39],},
    ],

    turnTs: [
      { position: [16, 0, -25], rotation: [0, -Math.PI / 2, 0] },
      { position: [-16, 0, -25], rotation: [0, 2*Math.PI , 0] },
      { position: [-16, 0, 23], rotation: [0, 0, 0] },
      { position: [16, 0, 23], rotation: [0, Math.PI, 0] },
      { position: [-32, 0, -41],rotation: [0, -Math.PI, 0] },

      { position: [48, 0, 7],rotation: [0, Math.PI/2, 0] },
      { position: [-32, 0, 31],rotation: [0, 2*Math.PI , 0] },
      { position: [-16, 0, 31], rotation: [0, -Math.PI , 0] },

      { position: [-32, 0, 39],rotation: [0, -Math.PI, 0] },
    ],

    streets: [
      { position: [0, 0, 7], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, 7], rotation: [0, Math.PI / 2, 0] },
      { position: [-8, 0, 7], rotation: [0, Math.PI / 2, 0] },

      { position: [0, 0, -25], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, -25], rotation: [0, Math.PI / 2, 0] },
      { position: [-8, 0, -25], rotation: [0, Math.PI / 2, 0] },

      { position: [24, 0, -25], rotation: [0, Math.PI / 2, 0] },
      { position: [32, 0, -25], rotation: [0, Math.PI / 2, 0] },
      { position: [40, 0, -25], rotation: [0, Math.PI / 2, 0] },

      { position: [24, 0, 7], rotation: [0, Math.PI / 2, 0] },
      { position: [32, 0, 7], rotation: [0, Math.PI / 2, 0] },
      { position: [40, 0,  7], rotation: [0, Math.PI / 2, 0] },

      { position: [16, 0, -17],},
      { position: [16, 0, -9],},
      { position: [16, 0, -1],},

      { position: [-16, 0, -17],},
      { position: [-16, 0, -9],},
      { position: [-16, 0, -1],},

      { position: [-16, 0, 15],},
      { position: [16, 0, 15],},

      { position: [0, 0, 23], rotation: [0, Math.PI / 2, 0] },
      { position: [8, 0, 23], rotation: [0, Math.PI / 2, 0] },
      { position: [-8, 0, 23], rotation: [0, Math.PI / 2, 0] },

      { position: [-24, 0, 7],rotation: [0, Math.PI / 2, 0] },

      { position: [-32, 0, 23],},
      { position: [-32, 0, 15],},

      { position: [-32, 0, -17],},
      { position: [-32, 0, -9],},
      { position: [-32, 0, -1],},
      { position: [-32, 0, -25],},
      { position: [-32, 0, -33],},
    
      { position: [-40, 0, -41],rotation: [0, Math.PI / 2, 0]},
      { position: [-48, 0, -41],rotation: [0, Math.PI / 2, 0]},
      { position: [-56, 0, -41],rotation: [0, Math.PI / 2, 0]},

      { position: [-64, 0, -17],},
      { position: [-64, 0, -9],},
      { position: [-64, 0, -1],},
      { position: [-64, 0, -25],},
      { position: [-64, 0, -33],},

      { position: [-40, 0, 7],rotation: [0, Math.PI / 2, 0]},
      { position: [-48, 0, 7],rotation: [0, Math.PI / 2, 0]},
      { position: [-56, 0, 7],rotation: [0, Math.PI / 2, 0]},

      { position: [48, 0, -1],},
      { position: [48, 0, -9],},
      { position: [48, 0, -17],},

    
      { position: [56, 0, 7],rotation: [0, Math.PI / 2, 0]},

      

      { position: [64, 0, 15],},
      { position: [64, 0, 23],},
      { position: [64, 0, 31],},
      { position: [64, 0, 39],},
      { position: [64, 0, 46],},

      { position: [16, 0, 31],},
      { position: [16, 0, 39],},
      { position: [16, 0, 46],},

      { position: [24, 0, 54],rotation: [0, Math.PI / 2, 0]},
      { position: [32, 0, 54],rotation: [0, Math.PI / 2, 0]},
      { position: [40, 0, 54],rotation: [0, Math.PI / 2, 0]},
      { position: [48, 0, 54],rotation: [0, Math.PI / 2, 0]},
      { position: [56, 0, 54],rotation: [0, Math.PI / 2, 0]},

      { position: [-24, 0, 31],rotation: [0, Math.PI / 2, 0]  },

      { position: [-64, 0, 31],},
      { position: [-64, 0, 23],},
      { position: [-64, 0, 15],},

      { position: [-40, 0, 39],rotation: [0, Math.PI / 2, 0]},
      { position: [-48, 0, 39],rotation: [0, Math.PI / 2, 0]},
      { position: [-56, 0, 39],rotation: [0, Math.PI / 2, 0]},

    ]
  }), []);

  return (
    <group position={[0, 0.05, 0]}>
      {/* Carrefours */}
      {sceneConfig.carrefours.map((item, i) => (
        <group key={`carrefour-${i}`} position={item.position}>
          <Carrefour isNight={isNight}/>
        </group>
      ))}

      {/* TurnTs */}
      {sceneConfig.turnTs.map((item, i) => (
        <group 
          key={`turnt-${i}`} 
          position={item.position} 
          rotation={item.rotation}
        >
          <TurnT isNight={isNight}/>
        </group>
      ))}

      {/* Rues droites avec positions absolues */}
      {sceneConfig.streets.map((street, i) => (
        <group 
          key={`street-${i}`}
          position={street.position}
          rotation={street.rotation || [0, 0, 0]}
        >
          <StreetStraight isNight={isNight}/>
        </group>
      ))}
    </group>
  );
};

export default React.memo(WayScene);