import { Lantern } from '../components3D/Lantern'
import React, { useMemo, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const LanternInstances = ({ positions, }) => {
  const groupRef = useRef()
  const visibilityRef = useRef(new Array(positions.length).fill(true))
  const frustumRef = useRef(new THREE.Frustum())
  const matrixRef = useRef(new THREE.Matrix4())
  const sphereRef = useRef(new THREE.Sphere())

  // ⚡ Pré-allocation des Vector3 pour éviter de recréer à chaque frame
  const vectorCache = useRef(positions.map(pos => new THREE.Vector3(...pos)))

  useFrame(({ camera }) => {
    if (!groupRef.current) return

    // Mise à jour du frustum (ok de le faire à chaque frame vu qu'OrbitControls bouge souvent)
    matrixRef.current.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    frustumRef.current.setFromProjectionMatrix(matrixRef.current)

    // Vérification de visibilité optimisée
    positions.forEach((_, index) => {
      const child = groupRef.current.children[index]
      if (!child) return

      sphereRef.current.set(vectorCache.current[index], 20.5)
      const isVisible = frustumRef.current.intersectsSphere(sphereRef.current)

      if (visibilityRef.current[index] !== isVisible) {
        visibilityRef.current[index] = isVisible
        child.visible = isVisible
      }
    })
  })

  // Initialisation de la visibilité
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.visible = visibilityRef.current[index]
      })
    }
  }, [])

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <group
          key={`lantern-${index}`}
          position={pos}
        >
          <Lantern />
        </group>
      ))}
    </group>
  )
}

const LanternScene = () => {
  const positions = useMemo(() => [
    /* Lantern QG */
    [-5, 0, -5], [-4, 0, -4], [-6, 0, -7],
    [-9, 0, -5], [-7, 0, -4], [-9, 0, -8],
    [1.4, 2.35, 0], [-1.4, 2.35, 0], [5, 0, -6],
    /* Lantern sur ancient portfolio */
    [-7, 0, 18],
    /* Lantern sur F1 */
    [7, 0, 18],

  ], [])

  return <LanternInstances positions={positions} />
}

export default React.memo(LanternScene)
