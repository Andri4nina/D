import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Bed(props) {
  const { nodes, materials } = useGLTF("/object3d/Bed.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bed.geometry}
          material={materials.Material}
          scale={150}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/object3d/Bed.glb");
