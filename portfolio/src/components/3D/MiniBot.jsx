import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

export function MiniBot(props) {
  const { nodes, materials } = useGLTF('/object3d/MiniBot.glb');
  const botRef = useRef();

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.color = new THREE.Color(0x66FFFF); // Bleu cyan
        material.emissive = new THREE.Color(0x66FFFF); // Émission de lumière bleue
        material.emissiveIntensity = 1; // Intensité lumineuse
        material.transparent = true;
        material.opacity = 0.3; // Semi-transparent
        material.wireframe = true; // Fil de fer pour l'effet holographique
        material.needsUpdate = true; // Mettre à jour le matériau
      });
    }
  }, [materials]);

  // Animation de flottement
  useFrame((state) => {
    if (botRef.current) {
      botRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.005;
    }
  });

  return (
    <group ref={botRef} {...props} dispose={null} scale={.1} >

      <pointLight
        position={[0, 0, 0]}
        color="blue"
        intensity={5}
        distance={2}
        decay={2}
      />

      <primitive object={nodes._rootJoint} />
      <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.main} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.main_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.main_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.leg_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.leg_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.foot}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.leg_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.leg_3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.leg_4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.foot_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.leg_5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.Face}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.main_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.leg_6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.leg_7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.leg_8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials.finger}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials.leg_9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.finger_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.leg_10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_45.geometry}
        material={materials.finger_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials.leg_11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials.leg_12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_51.geometry}
        material={materials.leg_13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials.finger_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.leg_14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials.finger_3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_57.geometry}
        material={materials.leg_15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials.finger_4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_60.geometry}
        material={materials.leg_16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_62.geometry}
        material={materials.leg_17}
      />
    </group>
  )
}

useGLTF.preload('/object3d/MiniBot.glb')