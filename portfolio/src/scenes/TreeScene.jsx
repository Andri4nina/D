import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import {
  Sapin1, Sapin2, Tree1, Tree2, Tree3, Tree4,
  DeathTree1, DeathTree2, DeathTree3, DeathTree4,
} from '../components3D/trees/Trees';

const VISIBILITY_DISTANCE = 150;

const DistanceGroup = ({ position, children }) => {
  const groupRef = useRef();
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    if (!groupRef.current) return;
    const distance = camera.position.distanceTo(new THREE.Vector3(...position));
    groupRef.current.visible = distance <= VISIBILITY_DISTANCE;
  });

  return <group ref={groupRef} position={position}>{children}</group>;
};

const TreeScene = () => {
  const sceneConfig = useMemo(() => ({
    sapin1: [
      { position: [30, 0, -32], rotation: [0, Math.PI / 9, 0] },
      { position: [30, 0, -27], rotation: [0, Math.PI / 9, 0] },
      { position: [30, 0, -22], rotation: [0, Math.PI / 9, 0] },
      { position: [30, 0, -17], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, -32], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, -27], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, -22], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, -17], rotation: [0, Math.PI / 9, 0] },
    ],
    sapin2: [
      { position: [30, 0, -12], rotation: [0, Math.PI / 9, 0] },
      { position: [30, 0, -7], rotation: [0, Math.PI / 9, 0] },
      { position: [30, 0, -2], rotation: [0, Math.PI / 9, 0] },
      { position: [30, 0, 3], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, -12], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, -7], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, -2], rotation: [0, Math.PI / 9, 0] },
      { position: [67, 0, 3], rotation: [0, Math.PI / 9, 0] },
    ],
    tree1: [
      { position: [0, 0, -6], rotation: [0, Math.PI / 6, 0] },
      { position: [21, 0, -18.5], rotation: [0, Math.PI / 6, 0] },
      { position: [50, 0, -33], rotation: [0, 7 * Math.PI / 9, 0] },
    ],
    tree2: [
      { position: [6, 0, -4], rotation: [0, Math.PI / 2, 0] },
      { position: [45, 0, -33], rotation: [0, 7 * Math.PI / 9, 0] },
      { position: [65, 0, -33], rotation: [0, Math.PI / 2, 0] },
    ],
    tree3: [
      { position: [-9, 0, -9] },
      { position: [21, 0, -12.5], rotation: [0, 9 * Math.PI / 5, 0] },
      { position: [40, 0, -35], rotation: [0, 2 * Math.PI / 9, 0] },
      { position: [60, 0, -34], rotation: [0, 7 * Math.PI / 5, 0] },
    ],
    tree4: [
      { position: [5, 0, -10], rotation: [0, Math.PI / 6, 0] },
      { position: [-10, 0, -32], rotation: [0, 9 * Math.PI / 5, 0] },
      { position: [10, 0, -32], rotation: [0, Math.PI / 9, 0] },
      { position: [35, 0, -32], rotation: [0, Math.PI / 9, 0] },
      { position: [55, 0, -35], rotation: [0, 7 * Math.PI / 6, 0] },
    ],
    deathTree1: [

    ],
    deathTree2: [

    ],
    deathTree3: [

    ],
    deathTree4: [

    ],
  }), []);

  const treeTypes = {
    sapin1: Sapin1,
    sapin2: Sapin2,
    tree1: Tree1,
    tree2: Tree2,
    tree3: Tree3,
    tree4: Tree4,
    deathTree1: DeathTree1,
    deathTree2: DeathTree2,
    deathTree3: DeathTree3,
    deathTree4: DeathTree4,
  };

  return (
    <>
      {Object.entries(sceneConfig).map(([type, trees]) =>
        trees.map((item, i) => {
          const TreeComponent = treeTypes[type];
          return (
            <DistanceGroup key={`${type}-${i}`} position={item.position} >
              <group rotation={item.rotation}>
                <TreeComponent />
              </group>
            </DistanceGroup>
          );
        })
      )}
    </>
  );
};

export default React.memo(TreeScene);
