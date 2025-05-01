
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function FenceEnd(props) {
    const { nodes, materials } = useGLTF('/elements/Fence End.glb')
    return (
        <group {...props} dispose={null}>
            <RigidBody type="fixed" colliders="hull" restitution={0.1} friction={0.5} position={[0, 0, 0]}>
                <group position={[0, 0.269, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={56}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FenceEnd_1.geometry}
                        material={materials.brick_shade1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FenceEnd_2.geometry}
                        material={materials.brick_shade2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FenceEnd_3.geometry}
                        material={materials.sandstone_light}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FenceEnd_4.geometry}
                        material={materials.metal_fence}
                    />
                </group>
            </RigidBody>
        </group>
    )
}

useGLTF.preload('/elements/Fence End.glb')