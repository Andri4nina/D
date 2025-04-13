import React from 'react'
import { OldRoom } from '../components/3D/OldRoom'
import { RedBull } from '../components/3D/RedBull'
import { Mclaren } from '../components/3D/McLaren'
import { Scuderia } from '../components/3D/Scuderia'
import { F1Tyre } from '../components/3D/F1Tyre'
import { School } from '../components/3D/School'
import { Garage } from '../components/3D/Garage'
import { PostOffice } from '../components/3D/PostOffice'
import { Shop } from '../components/3D/Shop'
import { RadioTower } from '../components/3D/RadioTower'
import { Restaurant } from '../components/3D/Restaurant'
import { Hospital } from '../components/3D/Hospital'
import { RedFactory } from '../components/3D/RedFactory'
import { Iot } from '../components/3D/Iot'
import { BusinessHouse } from '../components/3D/BusinessHouse'

const ProjectScene = ({ isNight }) => {
  return (
    <>
      <group position={[-7, 0, 15]}>
        <OldRoom isNight={isNight} />
      </group>

      <group position={[7, 0, 15]}>
        <group position={[3, 0, 0]} rotation={[0, -Math.PI / 6, 0]}>
          <Mclaren />
        </group>
        <group position={[0, 0, .35]} rotation={[0, 0, 0]}>
          <Scuderia />
        </group>
        <group position={[-3, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
          <RedBull />
        </group>
        <group position={[-1, .1, 3]} rotation={[0, Math.PI / 2, 0]}>
          <F1Tyre />
        </group>
        <pointLight
          position={[0, 5, 0]}
          color="white"
          intensity={isNight ? 50 : 0}
          distance={20}
          decay={2}
        />
      </group>


      <group position={[30, 0, -9]} rotation={[0, Math.PI, 0]}>
          <School isNight={isNight} />
        </group>

        <group position={[7, 0, 29.5]} rotation={[0, -Math.PI, 0]}>
          <Garage isNight={isNight} />
        </group>

        <group position={[-24, 0.05, 15]} rotation={[0, Math.PI / 2, 0]}>
          <PostOffice isNight={isNight} />
        </group>

        <group position={[-22, 0.05, 24]} rotation={[0, Math.PI, 0]}>
          <Shop isNight={isNight} />
        </group>

        <group position={[-26, 0.05, 24]} >
          <RadioTower isNight={isNight} />
        </group>

        <group position={[-9.6, 0.05, 29.4]} rotation={[0, Math.PI / 2, 0]}>
          <Restaurant isNight={isNight} />
        </group>

        <group position={[-48, 0.05, -20]} >
          <Hospital isNight={isNight} />
          <mesh
            castShadow
            receiveShadow
            position={[-0, .05, 3]}
            rotation={[Math.PI / 2, 0, Math.PI]}

          >
            <boxGeometry args={[24, 40, .2]} /> {/* Ajustez les dimensions si nécessaire */}
            <meshStandardMaterial
              color="#a3a3a3"  // Couleur gris ciment
              roughness={0.7}  // Surface légèrement rugueuse
              metalness={0.1}  // Très faible réflexion métallique
            />
          </mesh>
        </group>

        <group position={[41.5, 0.05, 33]} >
          <RedFactory isNight={isNight} />
          
        </group>

        <group position={[56.5, 2.6, 1]} >
          <Iot isNight={isNight} />
        </group>

        <group position={[-121.5, 0, 13.5]} rotation={[0, -Math.PI, 0]}>
          <BusinessHouse isNight={isNight} />
          <mesh
            castShadow
            receiveShadow
            position={[-73.5, .05, -9.5]}
            rotation={[Math.PI / 2, 0, Math.PI]}

          >
            <boxGeometry args={[24, 24, .2]} /> {/* Ajustez les dimensions si nécessaire */}
            <meshStandardMaterial
              color="#a3a3a3"  // Couleur gris ciment
              roughness={0.7}  // Surface légèrement rugueuse
              metalness={0.1}  // Très faible réflexion métallique
            />
          </mesh>
        </group>
    </>
  )
}

export default ProjectScene