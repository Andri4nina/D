import React, { useMemo } from 'react'
import { Instances, Instance, useTexture, Text3D } from '@react-three/drei'
import Flag from '../components/3D/Flag'
import NoticeBoard from '../components/3D/NoticeBoard'
import MyHouse from '../components/3D/MyHouse'
import { FenceEnd } from '../components/3D/FenceEnd'
import { StonePath } from '../components/3D/stones/StonePath'
import { Rocks } from '../components/3D/stones/Rocks'
import { Cobblestone } from '../components/3D/stones/CobbleStoneTile'
import { RigidBody } from '@react-three/rapier'


// Configuration externe pour permettre une réutilisation et un chargement plus facile
const SCENE_CONFIG = {
    flags: {
        textures: [
            "/textures/flags/Tailwind.jpg",
            "/textures/flags/React.png",
            "/textures/flags/NestJs.png",
            "/textures/flags/Madagascar.jpg"
        ],
        positions: [
            [9, 1, -9], [9, 1, -7.5], [9, 1, -6], [9, 1, -4.5]
        ],
        rotation: [0, -Math.PI / 6, 0]
    },
    noticeBoards: [
        { position: [-6.5, 1, -7], rotation: [0, -Math.PI / 6, 0] },
        { position: [-7, 1, -5], rotation: [0, 0, 0] },
        { position: [-6.5, 1, -3], rotation: [0, Math.PI / 6, 0] }
    ],
    fences: {
        xAxis: Array.from({ length: 6 }, (_, i) => [(i % 2 ? -1 : 1) * Math.ceil((i + 1) / 2), 0, 0]),
        zAxis: Array.from({ length: 8 }, (_, i) => [(i % 2 ? -1 : 1) * Math.floor(i / 2), 0, -6.06]),
        rotated: Array.from({ length: 12 }, (_, i) => ({
            pos: [(i < 6 ? 3.53 : -3.53), 0, -0.53 - (i % 6)],
            rot: [0, Math.PI / 2, 0]
        }))
    },
    housePosition: [0, 0, -14],
    groupScale: 1,
    fenceScale: 3
}

const QgScene = () => {
    // Utilisation de la configuration externe
    const { flags, noticeBoards, fences, housePosition, groupScale, fenceScale } = SCENE_CONFIG
    const texture = useTexture("/textures/brick.jpg");
    // Composants optimisés avec React.memo et séparation des lumières
    const FlagWithLight = React.memo(({ texture, position }) => (
        <group position={position} rotation={flags.rotation}>
            <Flag texture={texture} />

        </group>
    ))

    const NoticeBoardWithLight = React.memo(({ position, rotation }) => (
        <group position={position} rotation={rotation}>
            <NoticeBoard />

        </group>
    ))

    const FenceInstance = React.memo(({ position, rotation = [0, 0, 0] }) => (
        <group position={position} rotation={rotation}>
            <FenceEnd />
        </group>
    ))



    const NoticeBoardLight = React.memo(() => (
        <pointLight
            position={[0.5, 1, 0]}
            color="white"
            intensity={2}
            distance={20}
            decay={2}
        />
    ))

    // Créer un composant text réutilisable
    const PortfolioText = ({ char, position }) => (
        <RigidBody type="dynamic" colliders="cuboid" position={position}>
            <Text3D font="/fonts/gentilis_bold.typeface.json" size={1} height={0.3}>
                {char}
                <meshStandardMaterial map={texture} />
            </Text3D>
        </RigidBody>
    );

    // Utilisation d'Instances pour les éléments répétitifs comme les clôtures
    return (
        <group scale={groupScale} >
            {/* Drapeaux */}
            <group>
                {flags.textures.map((texture, index) => (
                    <FlagWithLight
                        key={`flag-${index}`}
                        texture={texture}
                        position={flags.positions[index]}
                    />
                ))}
            </group>

            {/* Panneaux d'affichage */}
            <group>
                {noticeBoards.map((board, index) => (
                    <NoticeBoardWithLight
                        key={`notice-${index}`}
                        position={board.position}
                        rotation={board.rotation}
                    />
                ))}
            </group>

            {/* Maison */}
            <group position={housePosition}>
                <MyHouse />
            </group>

            {/* Clôtures avec group scale appliqué une seule fois */}
            <group scale={fenceScale}>
                {/* Clôtures sur l'axe X */}
                {fences.xAxis.map((pos, i) => (
                    <FenceInstance key={`x-fence-${i}`} position={pos} />
                ))}

                {/* Clôtures sur l'axe Z */}
                {fences.zAxis.map((pos, i) => (
                    <FenceInstance key={`z-fence-${i}`} position={pos} />
                ))}

                {/* Clôtures rotatées */}
                {fences.rotated.map((fence, i) => (
                    <FenceInstance
                        key={`rot-fence-${i}`}
                        position={fence.pos}
                        rotation={fence.rot}
                    />
                ))}
            </group>

            {/* Chemin et pierres */}
            <group>
                {/* Cobblestones - regroupés quand possible */}
                <group position={[0, 0, 0]}>
                    <Cobblestone position={[0, 0, 0]} />
                    <Cobblestone position={[0, 0, -1.8]} />
                    <Cobblestone position={[0, 0, -3.6]} />
                    <Cobblestone position={[-1.8, 0, -3.6]} />
                    <Cobblestone position={[-2.7, 0, -5.3]} />
                    <Cobblestone position={[-2.7, 0, -7.1]} />
                    <Cobblestone position={[-0.9, 0, -8.9]} />
                </group>

                {/* StonePaths - instances avec rotation */}
                <StonePath position={[-2.7, 0, -9.0]} />
                <StonePath position={[-4.5, 0, -10.9]} rotation={[0, -Math.PI / 2, 0]} />
                <StonePath position={[1.8, 0, -10.9]} rotation={[0, Math.PI / 3, 0]} />
                <StonePath position={[-1.5, 0, -10.9]} rotation={[0, Math.PI / 3, 0]} />
                <StonePath position={[1.8, 0, -2.7]} />

                {/* Rocks - instances avec rotation */}
                <Rocks position={[-2.7, 0, -10.9]} rotation={[0, -Math.PI, 0]} />
                <Rocks position={[4.5, 0, -10.9]} rotation={[0, Math.PI / 3, 0]} />
                <Rocks position={[3.4, 0, -10.9]} rotation={[0, Math.PI / 3, 0]} />
                <Rocks position={[0, 0, -10.9]} />
                <Rocks position={[2, 0, -4]} />
                <Rocks position={[2, 0, -1]} />
                <Rocks position={[-2, 0, -1]} />
                <Rocks position={[4, 0, -1]} rotation={[0, -Math.PI / 2, 0]} />
                <Rocks position={[-4, 0, -2]} rotation={[0, -Math.PI / 2, 0]} />
                <Rocks position={[4, 0, -3]} rotation={[0, -Math.PI, 0]} />
            </group>



            <group>
                {/* Portfolio */}
                <group position={[-10, 0, 1]}>
                    {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map((char, i) => (
                        <PortfolioText key={`p-${i}`} char={char} position={[i * 0.7, 0, 0]} />
                    ))}
                </group>

                {/* retneC */}
                <group position={[10, 0, 1]}>
                    {["r", "e", "t", "n", "e", "C"].map((char, i) => (
                        <PortfolioText key={`c-${i}`} char={char} position={[-i * 0.7, 0, 0]} />
                    ))}
                </group>
            </group>

        </group>
    )
}

export default React.memo(QgScene)