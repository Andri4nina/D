import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

const BricksWall = React.memo((props) => {
  const brickTexture = useTexture("/textures/brick.jpg");
  const meshRef = useRef();
  
  // Configuration des instances
  const segments = useMemo(() => [
    { position: [0, 0.04, 0], offset: [0, 0, 0] },
    { position: [0, 0.04, 0], offset: [1, 0, 0] },
    { position: [0, 0.04, 0], offset: [-1, 0, 0] }
  ], []);

  useEffect(() => {
    const dummy = new THREE.Object3D();
    segments.forEach((segment, i) => {
      dummy.position.set(...segment.offset);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [segments]);

  return (
    <group {...props} dispose={null}>
      <RigidBody colliders="cuboid" type="fixed">
        <group position={[0, 0.04, 0]}>
          <instancedMesh ref={meshRef} args={[null, null, segments.length]}>
            <boxGeometry attach="geometry" args={[1, 2.2, 1]} />
            <meshStandardMaterial attach="material" map={brickTexture} />
          </instancedMesh>
        </group>
      </RigidBody>
    </group>
  );
});

export default BricksWall;