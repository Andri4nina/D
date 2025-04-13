import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function StreetLight({isNight,...props}) {
  const { nodes, materials } = useGLTF(
    "/object3d/Street Light.glb"
  );

  return (
    <group {...props} dispose={null}>
      <pointLight
        position={[0, 5, 2]}
        color="white"
        intensity={isNight? 100 : 0}
        distance={20}
        decay={2}
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

useGLTF.preload("/object3d/Street Light.glb");
