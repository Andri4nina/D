import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Bushes from '../components/3d/Bushes';

const BushInstances = ({ positions }) => {
  const groupRef = useRef();
  const visibleRef = useRef(new Set());
  
  useFrame(({ camera }) => {
    if (!groupRef.current) return;
    
    // Frustum culling manuel
    const tempFrustum = new THREE.Frustum();
    const tempMatrix = new THREE.Matrix4().multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    );
    tempFrustum.setFromProjectionMatrix(tempMatrix);
    
    const box = new THREE.Box3();
    const sphere = new THREE.Sphere();
    
    positions.forEach((pos, index) => {
      const child = groupRef.current.children[index];
      if (!child) return;
      
      // Créer une sphère englobante approximative pour le buisson
      sphere.set(new THREE.Vector3(...pos), 1.5); // 1.5m de rayon
      
      if (tempFrustum.intersectsSphere(sphere)) {
        visibleRef.current.add(index);
        child.visible = true;
      } else {
        visibleRef.current.delete(index);
        child.visible = false;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <group key={`bush-${index}`} position={pos} scale={0.3}>
          <Bushes />
        </group>
      ))}
    </group>
  );
};

const BushesScene = () => {
  const positions = useMemo(() => [
    [-6, 0, -2],  [-6, 0, -2.5],[-6.5, 0, -2.3],  [-5.5, 0, -2.3],
  
  ], []);

  return (
    <BushInstances positions={positions} />
  );
};

export default React.memo(BushesScene);