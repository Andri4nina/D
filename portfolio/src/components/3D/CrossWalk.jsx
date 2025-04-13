
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function CrossWalk(props) {
  const { nodes, materials } = useGLTF('/object3d/Cross walk.glb')
  return (
    <group {...props} dispose={null}>
    <RigidBody type='fixed' colliders="cuboid">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Street_4Way.geometry}
        material={materials['Atlas.005']}
        scale={100}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/object3d/Cross walk.glb')
