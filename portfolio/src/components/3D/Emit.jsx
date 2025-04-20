
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AllEmit({isNight ,...props}) {
  const { nodes, materials } = useGLTF("/object3d/AllEmit.glb")
  return (
    <group {...props} dispose={null}>
      <group position={[46, 3.1, -40]} scale={[8, 0.1, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials['Matériau.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials['Matériau.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_2.geometry}
          material={materials['Matériau.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_3.geometry}
          material={materials.Matériau}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_4.geometry}
          material={materials['Matériau.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_5.geometry}
          material={materials['Matériau.004']}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/object3d/AllEmit.glb")
