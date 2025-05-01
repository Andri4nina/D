import React, { useEffect, useRef, useState } from 'react';
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Sky } from "@react-three/drei";
import { Desk } from './3d/Desk';
import { MyAvatar } from './3d/MyAvatar';
import { Chair } from './3d/Chair';

const Experience3D = ({ themeColor, darkMode }) => {
  const directionalLightRef = useRef();
  const skyRef = useRef();
  const ambientLightRef = useRef();

  // États pour gérer les transitions manuelles
  const [sunPosition, setSunPosition] = useState([1, 1, 0]);
  const [lightIntensity, setLightIntensity] = useState(1.5);
  const [ambientIntensity, setAmbientIntensity] = useState(0.5);
  const [skyColor, setSkyColor] = useState(new THREE.Color(0x87ceeb));
  const [lightColor, setLightColor] = useState(new THREE.Color(0xffffff));

  useEffect(() => {
    const dayConfig = {
      sunPosition: [1, 1, 0],
      lightIntensity: 1.5,
      ambientIntensity: 0.5,
      skyColor: new THREE.Color(0x87ceeb), // Bleu ciel
      lightColor: new THREE.Color(0xffffff) // Blanc
    };

    const nightConfig = {
      sunPosition: [-1, -0.2, 0],
      lightIntensity: 0.1,
      ambientIntensity: 0.15,
      skyColor: new THREE.Color(0x0c1445), // Bleu nuit
      lightColor: new THREE.Color(0xb9d5ff) // Bleu clair (lune)
    };

    // Animation en douceur avec setTimeout
    const transitionDuration = 2000; // 2 secondes
    const steps = 20; // Nombre d'étapes pour une transition fluide
    let currentStep = 0;

    const animateTransition = () => {
      const progress = currentStep / steps;

      setSunPosition(prev => prev.map((v, i) => v + (darkMode ? nightConfig.sunPosition[i] - v : dayConfig.sunPosition[i] - v) * progress));
      setLightIntensity(prev => prev + (darkMode ? nightConfig.lightIntensity - prev : dayConfig.lightIntensity - prev) * progress);
      setAmbientIntensity(prev => prev + (darkMode ? nightConfig.ambientIntensity - prev : dayConfig.ambientIntensity - prev) * progress);
      setSkyColor(new THREE.Color().lerpColors(skyColor, darkMode ? nightConfig.skyColor : dayConfig.skyColor, progress));
      setLightColor(new THREE.Color().lerpColors(lightColor, darkMode ? nightConfig.lightColor : dayConfig.lightColor, progress));

      if (currentStep < steps) {
        currentStep++;
        setTimeout(animateTransition, transitionDuration / steps);
      }
    };

    animateTransition();
  }, [darkMode]);

  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
      {/* Fond animé */}
      <color attach="background" args={[skyColor]} />
      <OrbitControls />
      {/* Ciel animé */}
      <group ref={skyRef}>
        <Sky
          distance={450000}
          sunPosition={sunPosition}
          inclination={0}
          azimuth={180}
          mieCoefficient={0.005}
          mieDirectionalG={0.8}
          rayleigh={0.5}
        />
      </group>

      {/* Lumière ambiante */}
      <ambientLight ref={ambientLightRef} intensity={ambientIntensity} />

      {/* Lumière principale (soleil/lune) */}
      <directionalLight
        ref={directionalLightRef}
        position={sunPosition.map(v => v * 10)}
        intensity={lightIntensity}
        color={lightColor}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      {/* Si c'est la nuit, ajouter une lumière de lune supplémentaire */}
      {darkMode && (
        <directionalLight
          position={sunPosition.map((v, i) => (i === 1 ? Math.abs(v) * 10 : -v * 10))}
          intensity={0.2}
          color={lightColor}
        />
      )}

      <ContactShadows blur={2} />
      <group position={[0, 0, 1]}>
        <group position={[-1, 0, 1]} rotation={[0, Math.PI / 6, 0]}>
          <Desk themeColor={themeColor} darkMode={darkMode} />
        </group>
        <group position={[-.5, 0, .5]} rotation={[0, -Math.PI / 6, 0]}>
          <Chair />
          <pointLight
            position={[.5, 2.5, .5]}
            color='#fff'
            intensity={darkMode ? 5 : 0}
            distance={100}
            decay={2}
          />
          <MyAvatar themeColor={themeColor} darkMode={darkMode} />
        </group>
      </group>
    </Canvas>
  );
}

export default Experience3D