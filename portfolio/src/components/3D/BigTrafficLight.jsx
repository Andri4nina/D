import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


export function BigTrafficLight(props) {
  const { nodes, materials } = useGLTF(
    "/object3d/Traffic Light-lg9AKWejnF.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrafficLight_2.geometry}
        material={materials["Atlas.052"]}
        scale={100}
      />

      <RigidBody type="fixed" position={[0, 0, 0]} colliders="cuboid">
        <mesh >
          <boxGeometry args={[.3, 10,.3]} />
          <meshBasicMaterial color="red" transparent  opacity={0} />
        </mesh>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/object3d/Traffic Light-lg9AKWejnF.glb");
