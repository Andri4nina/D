/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function StreetT(props) {
  const { nodes, materials } = useGLTF('/object3d/Street T.glb')
  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' colliders="cuboid">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Street_T.geometry}
          material={materials['Atlas.010']}
          scale={100}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/object3d/Street T.glb')