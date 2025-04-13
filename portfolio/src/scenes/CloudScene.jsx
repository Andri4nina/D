import React, { useMemo, useRef } from 'react'
import { Cloud } from '../components/3D/Cloud'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CloudScene = () => {
  const cloudRefs = useRef([])
  const bounds = useRef({
    minX: -200, maxX: 200,
    minY: 50, maxY: 150,
    minZ: -300, maxZ: 300
  })

  // Création initiale des nuages
  const clouds = useMemo(() => {
    const result = []
    for (let i = 0; i < 50; i++) {
      result.push(createCloud(bounds.current))
    }
    return result
  }, [])

  // Fonction pour créer un nuage avec position aléatoire dans les bounds
  function createCloud(bounds) {
    return {
      opacity: 1 + Math.random(),
      scale: [
        2 + Math.random() * 0.6,
        2 + Math.random() * 0.6,
        2 + Math.random() * 0.6,
      ],
      position: [
        bounds.minX + Math.random() * (bounds.maxX - bounds.minX),
        bounds.minY + Math.random() * (bounds.maxY - bounds.minY),
        bounds.minZ + Math.random() * (bounds.maxZ - bounds.minZ),
      ],
      rotationY: Math.random() * Math.PI,
      speed: 0.02 + Math.random() * 0.03 // Vitesse aléatoire
    }
  }

  useFrame(() => {
    cloudRefs.current.forEach((ref, index) => {
      if (ref) {
        // Déplacement avec vitesse individuelle
        ref.position.x -= clouds[index].speed
        
        // Recyclage des nuages qui sortent du champ
        if (ref.position.x < bounds.current.minX - 50) {
          const newCloud = createCloud(bounds.current)
          ref.position.set(
            bounds.current.maxX + 50,
            newCloud.position[1],
            newCloud.position[2]
          )
          ref.scale.set(...newCloud.scale)
          ref.rotation.y = newCloud.rotationY
          clouds[index] = newCloud
        }
      }
    })
  })

  return (
    <>
      {clouds.map((cloud, index) => (
        <Cloud
          key={`cloud-${index}`}
          opacity={cloud.opacity}
          scale={cloud.scale}
          position={cloud.position}
          rotation-y={cloud.rotationY}
          ref={(el) => (cloudRefs.current[index] = el)}
        />
      ))}
    </>
  )
}

export default React.memo(CloudScene)