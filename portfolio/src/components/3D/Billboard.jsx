import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React, { useMemo } from 'react';
import * as THREE from 'three';

const Billboard = ({ texture }) => {
    const Texture = useTexture(texture);

    // Mémoïsation des matériaux
    const blackMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: "#0e0e0e" }), []);
    const textureMaterial = useMemo(() => new THREE.MeshStandardMaterial({ map: Texture }), [Texture]);

    // Configuration des éléments répétitifs (les lampes)
    const lampsConfig = useMemo(() => [1, -1, 0, 2, -2], []);

    return (
        <RigidBody type="fixed" colliders="trimesh">
            <group>
                {/* Structure principale */}
                <mesh position={[0, 0.25, 0]} geometry={new THREE.BoxGeometry(1, 0.5, 1)} material={blackMaterial} />
                <mesh position={[0, 3.5, 0]} geometry={new THREE.BoxGeometry(0.4, 7, 0.1)} material={blackMaterial} />
                <mesh position={[0, 7, 0.25]} geometry={new THREE.BoxGeometry(7, 4, 0.5)} material={blackMaterial} />
                <mesh position={[0, 7, 0.26]} geometry={new THREE.BoxGeometry(6.5, 3.5, 0.5)} material={textureMaterial} />
                <mesh position={[0, 5, 0.25]} geometry={new THREE.BoxGeometry(5, 0.5, 0.1)} material={blackMaterial} />
                <mesh position={[0, 4.7, 0.5]} geometry={new THREE.BoxGeometry(6, 0.1, 0.6)} material={blackMaterial} />

                {/* Éclairage */}
                <pointLight position={[-2, 7, 4]} color="white" intensity={20} distance={50} decay={2} />
            
                {/* Lampes */}
                {lampsConfig.map((x, i) => (
                    <Lamp key={i} position={[x, 4.7, 1]} />
                ))}
            </group>
        </RigidBody>
    );
};

// Composant mémoïsé pour les lampes
const Lamp = React.memo(({ position }) => {
    const blackMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: "#0e0e0e" }), []);

    return (
        <group position={position}>
            <mesh geometry={new THREE.BoxGeometry(0.1, 0.1, 0.7)} material={blackMaterial} />
            <mesh position={[0, 0.15, 0.4]} geometry={new THREE.BoxGeometry(0.1, 0.4, 0.1)} material={blackMaterial} />
            <mesh position={[0, 0.4, 0.4]} geometry={new THREE.BoxGeometry(0.4, 0.1, 0.1)} material={blackMaterial} />
        </group>
    );
});

export default React.memo(Billboard);