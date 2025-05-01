import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

import { Text3D, useTexture } from '@react-three/drei';
import { OldRoom } from '../components/3d/OldRoom';
import { WoodSign } from '../components/3d/WoodSign';
import { StonePath } from '../components/3d/stones/StonePath';
import { Rocks } from '../components/3d/stones/Rocks';
import { Cobblestone } from '../components/3d/stones/CobbleStoneTile';
import { F1Car } from '../components/3d/F1Car';

import { PostOffice } from '../components/3d/PostOffice';
import * as THREE from 'three';
import { Hopital, School } from '../components/3d/buildings/PublicBuildings';
import { useDayNight } from '../contexts/DayNightContext';
import { RadioTower } from '../components/3d/RadioTower';
import { RedFactory } from '../components/3d/RedFactory';
import { Restaurant } from '../components/3d/buildings/BusinessBuildings';


const MAX_LIGHT_DISTANCE = 50;
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

const ProjectScene = () => {
    const texture = useTexture("/textures/brick.jpg");
    const { isNight } = useDayNight();
    const lightRef = useRef();
    const { camera } = useThree();

    useFrame(() => {
        if (!lightRef.current) return;

        const lanternPos = lightRef.current.getWorldPosition(new THREE.Vector3());
        const distance = lanternPos.distanceTo(camera.position);

        const shouldLight = isNight && distance < MAX_LIGHT_DISTANCE;
        const targetIntensity = shouldLight ? 5 : 0;

        lightRef.current.intensity = THREE.MathUtils.lerp(
            lightRef.current.intensity,
            targetIntensity,
            0.1 // Vitesse de fade
        );
    });

    return (
        <>
            <group>
                {/* Ancient portfolio */}
                <DistanceGroup position={[-7, 0, 15]}>
                    <OldRoom />

                    <group position={[0, 0, 3]} scale={0.5} rotation={[0, -Math.PI, 0]}>
                        <WoodSign label={'Ancient portfolio'} />
                    </group>
                    <group position={[3, 0, 3]}>
                        <StonePath />
                    </group>
                    <group position={[3, 0, 1]}>
                        <Rocks />
                    </group>
                    <group position={[3, 0, -1]}>
                        <Rocks />
                    </group>
                    <group position={[3, 0, -3]}>
                        <Cobblestone />
                    </group>
                </DistanceGroup>

                {/* F1 Area */}
                <DistanceGroup position={[7, 0, 15]}>
                    <F1Car />
                    <group position={[3, 0, 0]}>
                        <F1Car />
                    </group>
                    <group position={[-3, 0, 0]}>
                        <F1Car />
                    </group>
                    <pointLight
                        ref={lightRef}
                        position={[-2, 2, 0]}
                        color="white"
                        intensity={0}
                        distance={8}
                        decay={1}
                    />
                    <group position={[0, 0, 3]} scale={0.5} rotation={[0, -Math.PI, 0]}>
                        <WoodSign label={'Formula 1'} />
                    </group>
                </DistanceGroup>

                {/* Poste Office */}
                <DistanceGroup position={[-25, 0, 15]}>
                    <group rotation={[0, Math.PI, 0]}>
                        <PostOffice />
                    </group>
                </DistanceGroup>

                {/* School */}
                <DistanceGroup position={[49, 0, -2.4]}>
                    <group rotation={[0, -Math.PI / 2, 0]}>
                        <School />
                    </group>
                    <group position={[0, 0, -6]} scale={0.5} rotation={[0, -Math.PI, 0]}>
                        <WoodSign />
                    </group>
                </DistanceGroup>

                {/* Restaurant */}
                <DistanceGroup position={[-23, 0, 49]} >
                    <group rotation={[0, 2*Math.PI, 0]}>
                        <Restaurant />
                    </group>
                </DistanceGroup >

                {/* Hopital */}
                <DistanceGroup position={[-43, 0, -17]}>
                    <group >
                        <Hopital />
                    </group>
                </DistanceGroup >

                {/* Radio */}
                <group position={[0, 0.05, 40]} >
                    <RadioTower />
                </group>

                {/* Iot */}


                {/* Warehouse */}
                <group position={[41.5, 0.05, 33]} >
                    <RedFactory />
                </group>

                {/* Business */}

            </group >
        </>
    );
};

export default React.memo(ProjectScene);
