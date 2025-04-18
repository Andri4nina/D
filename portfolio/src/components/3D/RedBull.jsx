/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Redgrund (https://sketchfab.com/redgrund)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/oracle-red-bull-f1-car-rb19-2023-e4afe46f3aab4b23a418da06fc163821
Title: Oracle Red Bull F1 Car RB19 2023
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RedBull(props) {
  const { nodes, materials } = useGLTF('/object3d/RB.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.138, 0.324]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Full_Body_Baked}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Full_Body_Baked}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Full_Body_Baked}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Full_Body_Baked}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Full_Body_Baked}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Full_Body_Baked}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Full_Body_Baked}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/object3d/RB.glb')