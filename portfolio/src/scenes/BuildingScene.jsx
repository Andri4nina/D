import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from 'three';
import { Capitol, GasStation, Pharmacy, Police } from '../components/3d/buildings/PublicBuildings';
import { Coffee, Pizza, Shop } from '../components/3d/buildings/BusinessBuildings';
import { Building1 } from '../components/3d/buildings/Building1';
import { Building7 } from '../components/3d/buildings/Building7';
import { Building4 } from '../components/3d/buildings/Building4';
import { Building8 } from '../components/3d/buildings/Building8';
import { Building2 } from '../components/3d/buildings/Building2';
import { Building3 } from '../components/3d/buildings/Building3';
import { Building6 } from '../components/3d/buildings/Building6';
import { Building5 } from '../components/3d/buildings/Building5';

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

const BuildingScene = () => {
  return (
    <>
      <DistanceGroup position={[-5.5, 0, 30.5]} >
        <group rotation={[0, Math.PI / 2, 0]}>
          <Police />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[8, 0, 32]} >
        <group rotation={[0, Math.PI / 2, 0]}>
          <Building2 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[8, 0, 40]} >
        <group rotation={[0, Math.PI / 2, 0]}>
          <Building3 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[8, 0, 48]} >
        <group rotation={[0, Math.PI / 2, 0]}>
          <Building6 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-0, 0, 48]} >
        <group rotation={[0, 2 * Math.PI, 0]}>
          <Building5 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-8, 0, 40]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building7 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-8, 0, 48]} >
        <group rotation={[0, 2 * Math.PI, 0]}>
          <Building8 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-45, 0, 22]} >
        <group rotation={[0, 2 * Math.PI, 0]}>
          <GasStation />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[0, 0, -32]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Capitol />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[24, 0, -32]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building1 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[24, 0, -24]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building7 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[24, 0, -16]}>
        <group rotation={[0, -Math.PI, 0]}>
          <Shop />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[24, 0, -8]}>
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building4 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[24, 0, 0]}>
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building8 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-24, 0, 40]}>
        <group rotation={[0, Math.PI / 2, 0]}>
          <Building6 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-24, 0, 32]}>
        <group rotation={[0, Math.PI / 2, 0]}>
          <Building2 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-24, 0, 24]} >
        <group rotation={[0, 2 * Math.PI, 0]}>
          <Pharmacy />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[72, 0, 16]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building5 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[72, 0, 32]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building2 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[72, 0, 40]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building3 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[72, 0, 48]} >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <Building6 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[72, 0, 24]}>
        <group rotation={[0, Math.PI, 0]}>
          <Pizza />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-32, 0, 48]}>
        <group rotation={[0, Math.PI, 0]}>
          <Building1 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-40, 0, 48]}>
        <group rotation={[0, Math.PI, 0]}>
          <Building2 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-48, 0, 48]}>
        <group rotation={[0, Math.PI, 0]}>
          <Building3 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-56, 0, 48]}>
        <group rotation={[0, Math.PI, 0]}>
          <Building4 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-64, 0, 48]}>
        <group rotation={[0, Math.PI, 0]}>
          <Building5 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-71, 0, 47]}>
        <group rotation={[0,Math.PI/4,0]}>
          <Coffee />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-72, 0, 40]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building6 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, 32]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building7 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, 24]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building8 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, 16]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building1 />
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-72, 0, 0]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building2 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, -8]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building3 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, -16]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building3 />
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, -24]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building2/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, -32]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building2/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, -40]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-72, 0, -48]}>
        <group rotation={[0, Math.PI/2, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-64, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-56, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-48, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-40, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[-32, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>

      <DistanceGroup position={[-8, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building4/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[0, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building5/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[8, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building6/>
        </group>
      </DistanceGroup>

      <DistanceGroup position={[24, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building1/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[32, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building2/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[40, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[48, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building7/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[56, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building8/>
        </group>
      </DistanceGroup>
      <DistanceGroup position={[64, 0, -48]}>
        <group rotation={[0, 2*Math.PI, 0]}>
          <Building3/>
        </group>
      </DistanceGroup>


    </>
  )
}

export default BuildingScene