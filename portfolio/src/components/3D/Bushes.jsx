import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Bushes = () => {
    const count = 520
    const groupRef = useRef()
    const windTime = useRef(0)
    
    // Stockage des données d'animation dans un tableau
    const animationData = useMemo(() => 
        Array.from({ length: count }, () => ({
            windIntensity: .1 + Math.random() * 0.3,
            windSpeed: .1 + Math.random() * 0.5,
            offset: Math.random() * 100,
            originalRotation: new THREE.Euler(
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            )
        }))
    , [])

    const meshes = useMemo(() => {
        const group = new THREE.Group()
        const baseColor = new THREE.Color('#3a5f0b')
        const highlightColor = new THREE.Color('#6b8c21')
        const baseGeometry = new THREE.PlaneGeometry(0.5, 0.5)

        animationData.forEach((data, i) => {
            const geometry = baseGeometry.clone()
            const position = new THREE.Vector3().setFromSpherical(
                new THREE.Spherical(
                    1 - Math.pow(Math.random(), 3),
                    Math.PI * 2 * Math.random(),
                    Math.PI * Math.random()
                )
            )

            geometry.rotateX(data.originalRotation.x)
            geometry.rotateY(data.originalRotation.y)
            geometry.rotateZ(data.originalRotation.z)
            geometry.translate(position.x, position.y, position.z)

            // Calcul couleur
            const normal = new THREE.Vector3(0, 0, 1)
                .applyEuler(data.originalRotation)
            const lightIntensity = Math.max(0.3, normal.dot(new THREE.Vector3(0, 1, 0)))
            const color = baseColor.clone().lerp(highlightColor, lightIntensity)

            const colors = new Array(geometry.attributes.position.count * 3).fill(0)
            for (let j = 0; j < colors.length; j += 3) {
                colors[j] = color.r
                colors[j+1] = color.g
                colors[j+2] = color.b
            }

            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
            
            const material = new THREE.MeshStandardMaterial({
                side: THREE.DoubleSide,
                vertexColors: true,
                roughness: 0.8
            })

            group.add(new THREE.Mesh(geometry, material))
        })

        return group
    }, [animationData])

    useFrame(({ clock }) => {
        windTime.current = clock.getElapsedTime()
        groupRef.current.children.forEach((mesh, i) => {
            const { originalRotation, windIntensity, windSpeed, offset } = animationData[i]
            
            const windEffect = Math.sin(windTime.current * windSpeed + offset) * windIntensity * 0.2
            mesh.rotation.set(
                originalRotation.x,
                originalRotation.y,
                originalRotation.z + windEffect
            )
        })
    })

    return (
        <group position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]} ref={groupRef}>
            <primitive object={meshes} />
        </group>
    )
}

export default React.memo(Bushes)