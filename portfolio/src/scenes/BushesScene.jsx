import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Bush } from '../components/3d/trees/Trees';


const VISIBILITY_DISTANCE = 100;

const BushInstances = ({ positions }) => {
  const groupRef = useRef();
  const camera = useThree((state) => state.camera);

  const instances = useMemo(() =>
    positions.map((pos, index) => ({
      position: new THREE.Vector3(...pos),
      visible: true,
      key: `bush-${index}`
    })),
    [positions]
  );

  useFrame(() => {
    if (!groupRef.current) return;

    const camPosition = camera.position;

    groupRef.current.children.forEach((child, index) => {
      if (!child) return;
      const instance = instances[index];
      if (!instance) return;

      const distance = camPosition.distanceTo(instance.position);
      const isVisible = distance <= VISIBILITY_DISTANCE;

      if (instance.visible !== isVisible) {
        instance.visible = isVisible;
        child.visible = isVisible;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {instances.map(({ position, key }) => (
        <group key={key} position={position} scale={0.5}>
          <Bush />
        </group>
      ))}
    </group>
  );
};

const BushesScene = () => {
  const positions = useMemo(() => [
    /* QG */
    [1, 0, 1], [-1, 0, 1],
    [-5, 0, -3], [-4, 0, -7], [-6, 0, -4],
    [-6, 0, -6], [-7, 0, -8], [-2, 0, -2],
    [4, 0, -5], [5, 0, -3], [1, 0, -7],
    [7, 0, -6], [3, 0, -4], [2, 0, -8],
    [-1, 0, -5], [0, 0, -5], [2, 0, -6],
    [-4, 0, -6], [3, 0, -8], [1, 0, -9],
    [-1, 0, -7], [4, 0, -10], [5, 0, -7],
    [-10, 0, 1], [-9.9, 0, 0.7], [-9.0, 0, 1.3],
    [-8.2, 0, 0.6], [-7.5, 0, 1.4], [-6.8, 0, 0.5],
    [-6.0, 0, 1.5], [-5.2, 0, 0.7], [-4.5, 0, 1.2],
    [-4, 0, 1],
    [10, 0, 1], [9.9, 0, 0.7], [9.0, 0, 1.3],
    [8.2, 0, 0.6], [7.5, 0, 1.4], [6.8, 0, 0.5],
    [6.0, 0, 1.5], [5.2, 0, 0.7], [4.5, 0, 1.2],
    [4, 0, 1],

    /* Capitol */
    [-11.5, 0, -28.5],[-10.5, 0, -28.5],[-9.5, 0, -28.5],[-8.5, 0, -28.5],[-7.5, 0, -28.5],[-6.5, 0, -28.5],[-5.5, 0, -28.5],[-4.5, 0, -28.5],
    [11.5, 0, -28.5],[10.5, 0, -28.5],[9.5, 0, -28.5],[8.5, 0, -28.5],[7.5, 0, -28.5],[6.5, 0, -28.5],[5.5, 0, -28.5],[4.5, 0, -28.5],
    [-11.5, 0, -35.5],[-10.5, 0, -35.5],[-9.5, 0, -35.5],[-8.5, 0, -35.5],[-7.5, 0, -35.5],
    [11.5, 0, -35.5],[10.5, 0, -35.5],[9.5, 0, -35.5],[8.5, 0, -35.5],[7.5, 0, -35.5],
    [11.5, 0, -34.5],[11.5, 0, -33.5], [11.5, 0, -32.5],[11.5, 0, -31.5], [11.5, 0, -30.5],[11.5, 0, -29.5],
    [-11.5, 0, -34.5],[-11.5, 0, -33.5], [-11.5, 0, -32.5],[-11.5, 0, -31.5], [-11.5, 0, -30.5],[-11.5, 0, -29.5],

    /* Shop */
    [22.5, 0, -12.5], [23.5, 0, -12.5],[24.5, 0, -12.5], [25.5, 0, -12.5],[26.5, 0, -12.5], [27.5, 0, -12.5],[22.5, 0, -19.5], [23.5, 0, -19.5],[24.5, 0, -19.5], [25.5, 0, -19.5],[26.5, 0, -19.5], [27.5, 0, -19.5],
    [27.5, 0, -13.5],[27.5, 0, -14.5],[27.5, 0, -15.5],[27.5, 0, -16.5],[27.5, 0, -17.5],[27.5, 0, -18.5]
  ], []);

  return <BushInstances positions={positions} />;
};

export default React.memo(BushesScene);
