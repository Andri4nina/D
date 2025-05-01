import React, { useRef, useEffect } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { ContactShadows, Sky } from "@react-three/drei";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import BushesScene from "../scenes/BushesScene";
import CharacterScene from "../scenes/CharacterScene";
import { SocketManager } from "../components/SocketManager";
import QgScene from "../scenes/QgScene";
import LanternScene from "../scenes/LanternScene";
import WayScene from "../scenes/WayScene";
import ProjectScene from "../scenes/ProjectScene";
import { DayNightProvider, useDayNight } from "../contexts/DayNightContext";
import BuildingScene from "../scenes/BuildingScene";
import TeamScene from "../scenes/TeamScene";
import CloudScene from "../scenes/CloudScene";
import TreeScene from "../scenes/TreeScene";

const WORLD_SIZE = 512;
const VIEW_DISTANCE = 100;
const FOG_DENSITY = 0.001;

const Immersive3DContent = ({ droneColor }) => {
  const directionalLightRef = useRef();
  const controlsRef = useRef();
  const playerPositionRef = useRef([0, 0, 0]);
  const { scene } = useThree();
  const { skyColor, isNight, timeOfDay, fogColor } = useDayNight();

  useEffect(() => {
    scene.fog = new THREE.FogExp2(fogColor, FOG_DENSITY);
    return () => (scene.fog = null);
  }, [scene, fogColor]);

  useFrame(() => {
    if (controlsRef.current) {
      const { x, y, z } = controlsRef.current.object.position;
      playerPositionRef.current = [x, y, z];

      if (scene.fog) {
        scene.fog.color.copy(fogColor);
        scene.fog.density = FOG_DENSITY * (1 + (y / 10));
      }
    }
  });

  useEffect(() => {
    if (directionalLightRef.current) {
      const [x, y, z] = timeOfDay.sunPosition;
      directionalLightRef.current.position.set(x * 10, y * 10, z * 10);
      directionalLightRef.current.intensity = timeOfDay.lightIntensity;
    }
  }, [timeOfDay]);

  return (
    <>
      <color attach="background" args={[skyColor]} />
      <Sky
        distance={450000}
        sunPosition={timeOfDay.sunPosition}
        inclination={0}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        rayleigh={0.5}
      />

      <ambientLight intensity={timeOfDay.ambientIntensity} />
      <directionalLight
        ref={directionalLightRef}
        position={[
          timeOfDay.sunPosition[0] * 10,
          timeOfDay.sunPosition[1] * 10,
          timeOfDay.sunPosition[2] * 10
        ]}
        intensity={timeOfDay.lightIntensity}
        castShadow
        shadow-mapSize={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />


      <directionalLight
        position={[
          -timeOfDay.sunPosition[0] * 10,
          Math.abs(timeOfDay.sunPosition[1]) * 10,
          -timeOfDay.sunPosition[2] * 10
        ]}
        intensity={0.2}
        color="#b9d5ff"
      />


      <ContactShadows blur={2} />
      <Physics gravity={[0, -9.81, 0]} >
        {/* Terrain */}
        <RigidBody type="static">
          <mesh
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[WORLD_SIZE, WORLD_SIZE]} />
            <meshStandardMaterial
              color="springgreen"
              emissive={isNight ? "#163616" : "#000000"}
              emissiveIntensity={isNight ? 0.2 : 0}
            />
          </mesh>
        </RigidBody>

        {/* Scènes */}
         <SocketManager />
        <group>
          <CharacterScene droneColor={droneColor}/>
          <QgScene />
          <TreeScene />
          <BushesScene />
          <LanternScene />
          <BuildingScene />
          <WayScene />
          <TeamScene />
          <ProjectScene />
        </group>
      </Physics>

      {/* <CloudScene /> */}

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan
        enableZoom
        enableRotate
      />
    </>
  );
};

const Immersive3DLayouts = ({ droneColor }) => {
  return (
    <DayNightProvider>
      <Immersive3DContent droneColor={droneColor} />
    </DayNightProvider>
  );
};

export default React.memo(Immersive3DLayouts);
