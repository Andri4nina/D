import React, { useMemo } from 'react';
import Flag from '../components/3D/Flag';
import BricksWall from '../components/3D/BricksWall';
import NoticeBoard from '../components/3D/NoticeBoard';
import MyHouse from '../components/3D/MyHouse';

const QGScene = ({ isNight }) => {
  // Configuration mémoïsée des textures de drapeaux
  const flagTextures = useMemo(() => [
    "/textures/flags/Tailwind.jpg",
    "/textures/flags/React.png",
    "/textures/flags/NestJs.png",
    "/textures/flags/Madagascar.jpg"
  ], []);

  // Configuration mémoïsée des murs
  const wallsConfig = useMemo(() => {
    const horizontalWalls = [-3, 3, -6, 6, -9, 9, -3, 3, 0, -6, 6, -9, 9].map(x => ({
      position: [x, 0, x === 0 ? -19 : (Math.abs(x) >= 3 && Math.abs(x) <= 9) ? -19 : 0],
      rotation: [0, 0, 0]
    }));

    const verticalWalls = [-2, -5, -8, -11, -14, -17].map(z => ([
      { position: [-10, 0, z], rotation: [0, Math.PI / 2, 0] },
      { position: [10, 0, z], rotation: [0, Math.PI / 2, 0] }
    ])).flat();

    return [...horizontalWalls, ...verticalWalls];
  }, []);

  // Configuration mémoïsée des panneaux d'affichage
  const noticeBoardsConfig = useMemo(() => [
    { position: [0.5, 0, -2], rotation: [0, -Math.PI / 6, 0] },
    { position: [0, 0, 0], rotation: [0, 0, 0] },
    { position: [0.5, 0, 2], rotation: [0, Math.PI / 6, 0] }
  ], []);

  return (
    <>
      {/* Murs optimisés */}
      <group position={[0, 1, 0]} castShadow receiveShadow>
        {wallsConfig.map((wall, index) => (
          <BricksWall
            key={`wall-${index}`}
            position={wall.position}
            rotation={wall.rotation}
          />
        ))}
      </group>

      {/* Drapeaux optimisés */}
      <group position={[6, 1, -9]}>
        {flagTextures.map((texture, index) => (
          <FlagGroup
            key={`flag-${index}`}
            position={[3, 0, index * 1.5]}
            rotation={[0, -Math.PI / 6, 0]}
            texture={texture}
            isNight={isNight}
          />
        ))}
      </group>

      {/* Maison */}
      <HouseGroup position={[0, 0, -14]} isNight={isNight} />

      {/* Panneaux d'affichage optimisés */}
      <group position={[-7, 1, -5]}>
        {noticeBoardsConfig.map((config, index) => (
          <NoticeBoardGroup
            key={`notice-${index}`}
            position={config.position}
            rotation={config.rotation}
            isNight={isNight}
          />
        ))}
      </group>
    </>
  );
};

// Composants mémoïsés
const FlagGroup = React.memo(({ position, rotation, texture, isNight }) => (
  <group position={position} rotation={rotation}>
    <Flag texture={texture} />
    {isNight && (
      <pointLight
        position={[-1, 1, 0]}
        color="white"
        intensity={5}
        distance={20}
        decay={2}
      />
    )}
  </group>
));

const NoticeBoardGroup = React.memo(({ position, rotation, isNight }) => (
  <group position={position} rotation={rotation}>
    <NoticeBoard />
    {isNight && (
      <pointLight
        position={[0.5, 1, 0]}
        color="white"
        intensity={2}
        distance={20}
        decay={2}
      />
    )}
  </group>
));

const HouseGroup = React.memo(({ position, isNight }) => (
  <group position={position}>
    <MyHouse isNight={isNight} />
  </group>
));

export default React.memo(QGScene);