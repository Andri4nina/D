import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useMemo, useRef } from "react";
import { Pc } from "./Pc";
import { Carpet } from "./Carpet";
import { Chair } from "./Chair";
import { Bed } from "./Bed";
import { Cabinet } from "./Cabinet";
import { Server } from "./Server";
import { useDayNight } from "../../contexts/DayNightContext";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import { MyAvatar } from "./MyAvatar";
import { AndoAvatar } from "./AndoAvatar";
import { Holoprojector } from "./HoloProjector";
import { MiniBot } from "./MiniBot";

const MAX_LIGHT_DISTANCE = 50;

const MyHouse = () => {
  const woodTexture = useTexture("/textures/wood.jpg");
  const { isNight } = useDayNight();
  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const lightRef3 = useRef();
  const { camera } = useThree();

  const woodMaterial = useMemo(() => <meshStandardMaterial map={woodTexture} />, [woodTexture]);

  useFrame(() => {
    [lightRef1, lightRef2, lightRef3].forEach(lightRef => {
      if (lightRef.current) {
        const distance = lightRef.current.getWorldPosition(new THREE.Vector3()).distanceTo(camera.position);
        const shouldLight = isNight && distance < MAX_LIGHT_DISTANCE;
        const targetIntensity = shouldLight ? 10 : 0;
        lightRef.current.intensity = THREE.MathUtils.lerp(
          lightRef.current.intensity,
          targetIntensity,
          0.1
        );
      }
    });
  });

  const solRows = [0, 1, 2, -1, -2];
  const solColumns = [0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7];
  const wallZ = [0, 1, -1, 2, -2];

  return (
    <>
      <pointLight ref={lightRef1} position={[0, 3, 0]} color="white" intensity={0} distance={20} decay={1} />
      <pointLight ref={lightRef2} position={[4, 3, 0]} color="white" intensity={0} distance={20} decay={1} />
      <pointLight ref={lightRef3} position={[-4, 3, 0]} color="white" intensity={0} distance={20} decay={1} />
      {/* Sol en bois */}
      <RigidBody type="fixed">
        {solRows.map(z => (
          solColumns.map(x => (
            <mesh key={`tile-${x}-${z}`} position={[x, 0.1, z]}>
              <boxGeometry args={[1, 0.1, 1]} />
              {woodMaterial}
            </mesh>
          ))
        ))}
      </RigidBody>

      {/* Murs */}
      <RigidBody type="fixed">
        {wallZ.map(z => (
          <>
            <mesh key={`wall-left-${z}`} position={[-7.75, 1.5, z]}>
              <boxGeometry args={[0.5, 3, 1]} />
              {woodMaterial}
            </mesh>
            <mesh key={`wall-right-${z}`} position={[7.75, 1.5, z]}>
              <boxGeometry args={[0.5, 3, 1]} />
              {woodMaterial}
            </mesh>
          </>
        ))}
      </RigidBody>


      {/* Murs arrières */}
      <RigidBody type="fixed">
        {[...Array(17)].map((_, i) => {
          const offset = i - 8;
          const width = Math.abs(offset) === 8 ? 0.5 : 1;
          let xPosition = offset;

          // Correction pour les extrémités
          if (offset === -8) xPosition += 0.25;
          if (offset === 8) xPosition -= 0.25;

          return (
            <mesh key={`back-wall-${offset}`} position={[xPosition, 1.5, -2.75]}>
              <boxGeometry args={[width, 3, 0.5]} />
              {woodMaterial}
            </mesh>
          );
        })}
      </RigidBody>


      {/* Séparations */}
      <RigidBody type="fixed">
        {[-2.5, 2.5].map(x => (
          wallZ.map(z => (
            <mesh key={`sep-${x}-${z}`} position={[x, 1.5, z]}>
              <boxGeometry args={[0.2, 3, 1]} />
              {woodMaterial}
            </mesh>
          ))
        ))}
        {[-2.5, 2.5].map(x => (
          <mesh key={`middle-${x}`} position={[x, 1.25, -1]}>
            <boxGeometry args={[0.2, 0.5, 1]} />
            {woodMaterial}
          </mesh>
        ))}
      </RigidBody>

      {/* Chambre 1 */}
      <RigidBody type="fixed">
        <group position={[-6, 0, -1]}><Bed /></group>
      </RigidBody>
      <RigidBody type="fixed">
        <group position={[-3.8, 0.8, -1.45]}><Pc /></group>
      </RigidBody>
      <group position={[-5, 0.15, 0]}><Carpet /></group>
      <RigidBody type="fixed">
        <group position={[-4.1, 0.15, -1]} rotation={[0, Math.PI, 0]}><Chair /></group>
      </RigidBody>
      <RigidBody type="fixed">
        <group position={[-3.15, 1.25, 1]} rotation={[0, Math.PI, 0]}><Cabinet /></group>
      </RigidBody>

      {/* Chambre 2 */}
      <group position={[-2.15, 2.5, 0]}>
        {[0, 1, 2].map(z => (
          <mesh key={`bar1-${z}`} position={[0, 0, z]}>
            <boxGeometry args={[0.5, 0.1, 1]} />
            {woodMaterial}
          </mesh>
        ))}
      </group>

      <group position={[2.15, 2.5, 0]}>
        {[0, 1, 2].map(z => (
          <mesh key={`bar2-${z}`} position={[0, 0, z]}>
            <boxGeometry args={[0.5, 0.1, 1]} />
            {woodMaterial}
          </mesh>
        ))}
      </group>

      {/* Petits bureaux Pc + Chaises */}
      {[[-1, 0, -1.5], [1.5, 0, -1.5], [-1.4, 0, 1], [1.4, 0, 1]].map(([x, y, z], index) => (
        <group key={`pc-area-${index}`} position={[x, y, z]} rotation={index > 1 ? [0, Math.PI / 2 * (index === 2 ? 1 : -1), 0] : [0, 0, 0]}>
          <group position={[0, 0.8, 0]}>
            <RigidBody type="fixed"><Pc /></RigidBody>
          </group>
          <group position={[-0.4, 0.15, 0.5]} rotation={[0, Math.PI, 0]}>
            <RigidBody type="fixed"><Chair /></RigidBody>
          </group>
          {index < 2 && (
            <group position={[0.5, 0.15, 0.5]} rotation={[0, -8 * Math.PI / 9, 0]}>
              <RigidBody type="fixed"><Chair /></RigidBody>
            </group>
          )}
        </group>
      ))}

      {/* Chambre 3 (Serveurs) */}
      {[[3.1, 0.15, 0], [3.1, 0.15, 1], [3.1, 0.15, 2],
      [5.1, 0.15, -2], [6.1, 0.15, -2], [7.1, 0.15, -2]].map(([x, y, z], i) => (
        <group key={`server-${i}`} position={[x, y, z]} rotation={i >= 3 ? [0, -Math.PI / 2, 0] : [0, 0, 0]}>
          <Server />
        </group>
      ))}
      <group position={[-4.1, 0.2, -1]} rotation={[0, Math.PI, 0]}><MyAvatar /></group>
      <group position={[-5.45, 0.05, -0.5]} rotation={[0, Math.PI / 2, 0]}><AndoAvatar /></group>
      <group position={[6, .5, 1]}>
        <MiniBot />
      </group>
      <group position={[6, 0, 1]}>
        <Holoprojector />
      </group>
    </>
  );
};

export default MyHouse;
