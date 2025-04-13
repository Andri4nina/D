import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier"; // Importation du composant RigidBody

const Flag = ({ texture }) => {
  const flagRef = useRef();
  const woodTexture = useTexture("/textures/wood.jpg");
  const flagTexture = useTexture(texture); // Charge chaque texture individuelle

  const geometry = useMemo(() => new THREE.PlaneGeometry(2, 1, 32, 16), []);

  useFrame((state) => {
    if (!flagRef.current) return;
    const time = state.clock.getElapsedTime();
    const position = flagRef.current.geometry.attributes.position;
    const vertices = position.array;

    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      vertices[i + 2] = Math.sin(x * 2 + time * 2) * 0.1;
    }

    position.needsUpdate = true;
  });

  return (
    <>
      {/* Drapeau */}
      <mesh ref={flagRef} geometry={geometry} position={[0, 2.4, 0]} castShadow receiveShadow>
        <meshStandardMaterial map={flagTexture} side={THREE.DoubleSide} />
      </mesh>

      {/* Mât avec RigidBody */}
      <RigidBody type="fixed" colliders="cuboid" position={[-1, 1, 0]} castShadow receiveShadow>
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, 4, 32]} />
          <meshStandardMaterial map={woodTexture} />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Flag;
