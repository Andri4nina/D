import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useFrame, useThree } from '@react-three/fiber';
import { useDayNight } from '../../contexts/DayNightContext';
import * as THREE from 'three';

const MAX_LIGHT_DISTANCE = 50;

export function Lantern({ ...props }) {
    const { nodes, materials } = useGLTF('/elements/Lantern.glb');
    const { isNight } = useDayNight();
    const lightRef = useRef();
    const { camera } = useThree();

    useFrame(() => {
        if (!lightRef.current) return;

        const lanternPos = lightRef.current.getWorldPosition(new THREE.Vector3());
        const distance = lanternPos.distanceTo(camera.position);

        const shouldLight = isNight && distance < MAX_LIGHT_DISTANCE;
        const targetIntensity = shouldLight ? 3 : 0;

        lightRef.current.intensity = THREE.MathUtils.lerp(
            lightRef.current.intensity,
            targetIntensity,
            0.1 // Vitesse de fade
        );
    });

    return (
        <group {...props} dispose={null}>
            <RigidBody colliders="cuboid" type="fixed" position={[0, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lantern_standing.geometry}
                    material={materials.HalloweenBits}
                    scale={30}
                />
            </RigidBody>
            <pointLight
                ref={lightRef}
                position={[0, .25, 0]}
                color="yellow"
                intensity={0}
                distance={8}
                decay={2}
            />
        </group>
    );
}

useGLTF.preload('/elements/Lantern.glb');
