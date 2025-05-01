import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useDayNight } from "../../../contexts/DayNightContext";
import * as THREE from 'three';

const MAX_LIGHT_DISTANCE = 50;

export function StreetLight({ ...props }) {
  const { nodes, materials } = useGLTF(
    "/elements/Street Light.glb"
  );
     const { isNight } = useDayNight();
      const lightRef = useRef();
      const { camera } = useThree();
  
      useFrame(() => {
          if (!lightRef.current) return;
  
          const lanternPos = lightRef.current.getWorldPosition(new THREE.Vector3());
          const distance = lanternPos.distanceTo(camera.position);
  
          const shouldLight = isNight && distance < MAX_LIGHT_DISTANCE;
          const targetIntensity = shouldLight ? 15 : 0;
  
          lightRef.current.intensity = THREE.MathUtils.lerp(
              lightRef.current.intensity,
              targetIntensity,
              0.1 // Vitesse de fade
          );
      });
  

  return (
    <group {...props} dispose={null}>
      <pointLight
        ref={lightRef}
        position={[0, 2, 4]}
        color="white"
        intensity={0}
        distance={10}
        decay={1}
      />
      <group scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StreetLights_1.geometry}
          material={materials["Atlas.053"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StreetLights_2.geometry}
          material={materials.Light}
        />
        {/* RigidBody activé avec collision + cube transparent */}
        <RigidBody type="fixed" position={[0, 0, 0]} colliders="cuboid">
          <mesh scale={.05}>
            <boxGeometry args={[0.05, 2, 0.05]} />
            <meshBasicMaterial color="red" transparent opacity={0} />
          </mesh>
        </RigidBody>
      </group>
    </group>

  );
}

useGLTF.preload("/elements/Street Light.glb");
