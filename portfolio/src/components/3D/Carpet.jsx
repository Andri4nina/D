import React from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'

export function Carpet(props) {
  const { nodes, materials } = useGLTF('/elements/Rug Round.glb')
  const texture = useTexture('/textures/TechN.png')

  // Inversion de l'image horizontalement
  texture.flipY = false
  texture.flipX = false
  texture.repeat.set(-1, 1)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rug.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={150}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/elements/Rug Round.glb')
