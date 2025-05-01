import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

const NoticeBoard = () => {
  const woodTexture = useTexture("/textures/wood.jpg");
  return (
    <>
      <RigidBody type="fixed" colliders="hull">
        <group>
          <group position={[0, 0, -1]}>
            <mesh>
              <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
              {/* 5 = rayon supérieur, 5 = rayon inférieur, 10 = hauteur, 32 = segments */}
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>

          <group position={[0, 0.2, 0]}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[.05, 1.2, 2]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>

          <group position={[0, 0, 1]}>
            <mesh>
              <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
              {/* 5 = rayon supérieur, 5 = rayon inférieur, 10 = hauteur, 32 = segments */}
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
        </group>
      </RigidBody>
    </>
  );
};

export default NoticeBoard;
