
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function StreetStraight(props) {
  const { nodes, materials } = useGLTF('/elements/Street Straight.glb')
  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' colliders="cuboid">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Street_Straight.geometry}
          material={materials['Atlas.009']}
          scale={100}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/elements/Street Straight.glb')