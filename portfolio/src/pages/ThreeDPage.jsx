import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import VolumeSelected from '../components/VolumeSelected';
import TouchDrone from '../components/TouchDrone';
import MapBouton from '../components/MapBouton';
import Immersive3DLayouts from '../layouts/Immersive3DLayouts';
import { SpecialistPositionProvider } from '../contexts/SpecialistPositionContext';
import MobileControls from '../components/MobileController';

const ThreeDPage = ({ setPlayGame }) => {
  const [mute, setMute] = useState(false);
  const [localColor, setLocalColor] = useState(() => generateRandomColor());

  function generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPlayGame(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setPlayGame]);

  return (
    <>

      <SpecialistPositionProvider>
        <section className="w-full h-screen relative">
          <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 2, 5], fov: 50 }}>
            <Immersive3DLayouts droneColor={localColor} />
          </Canvas>
          {/* VolumeSelected */}
          <div className="absolute top-5 right-5">
            <VolumeSelected setMute={setMute} />
            <div className="relative mt-2 w-[50px] h-[50px]  rounded-full  overflow-hidden"> {/* Ajoutez une marge en haut pour espacer les éléments */}
              <input
                id="drone-color"
                type="color"
                value={localColor}
                onChange={(e) => setLocalColor(e.target.value)}
                className="aboslute  -translate-y-5 -translate-x-5 w-[80px] h-[80px]  cursor-pointer " /* Styles pour le rendre rond */
                style={{
                  appearance: "none", // Supprime l'apparence par défaut de l'input
                  backgroundColor: "transparent", // Fond transparent
                  padding: 0, // Supprime le padding par défaut
                }}
              />
            </div>
          </div>
          {/* TouchDrone */}

          <TouchDrone />
          {/* MapBouton */}
          <MapBouton />

          <MobileControls />
        </section>
      </SpecialistPositionProvider>
    </>
  )
}

export default ThreeDPage