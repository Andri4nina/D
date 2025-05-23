/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: sleepyjoshua (https://sketchfab.com/sleepyjoshua)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com3D-models/lowpoly-office-chair-e5719afff2464e5e810115532e16cc05
Title: Lowpoly Office Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/elements/chair.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Black.Plastic']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Shiny.Metal']}
      />
    </group>
  )
}

useGLTF.preload('/elements/chair.glb')