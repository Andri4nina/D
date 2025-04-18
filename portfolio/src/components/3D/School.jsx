/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Pappaji (https://sketchfab.com/abhijith0359)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-university-building-3d-model-b85f9de4cf2c423987b60b1e658557f5
Title: Low poly University Building 3D model
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function School({ isNight, ...props }) {
    const { nodes, materials } = useGLTF('/object3d/low_poly_university_building_3d_model.glb')
    return (
        <group {...props} dispose={null}>
            <pointLight
                position={[0, 8, 0]}
                color="white"
                intensity={isNight ? 50 : 0}
                distance={20}
                decay={2}
            />
            <group scale={0.01}>
                <group
                    position={[544.594, 166.76, -910.798]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={508.997}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3003_N_Exhaust_Fan_0.geometry}
                        material={materials.N_Exhaust_Fan}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3003_N_Black_0.geometry}
                        material={materials.N_Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3003_N_Exhaust_Base_0.geometry}
                        material={materials.N_Exhaust_Base}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3003_N_White__0.geometry}
                        material={materials.N_White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3003_N_Glass_0.geometry}
                        material={materials.N_Glass}
                    />
                </group>
                <group
                    position={[544.594, 166.76, -613.759]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={508.997}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3004_N_Exhaust_Fan_0.geometry}
                        material={materials.N_Exhaust_Fan}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3004_N_Black_0.geometry}
                        material={materials.N_Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3004_N_Exhaust_Base_0.geometry}
                        material={materials.N_Exhaust_Base}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3004_N_White__0.geometry}
                        material={materials.N_White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3004_N_Glass_0.geometry}
                        material={materials.N_Glass}
                    />
                </group>
                <group
                    position={[544.594, 166.76, -277.947]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={508.997}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3005_N_Exhaust_Fan_0.geometry}
                        material={materials.N_Exhaust_Fan}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3005_N_Black_0.geometry}
                        material={materials.N_Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3005_N_Exhaust_Base_0.geometry}
                        material={materials.N_Exhaust_Base}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3005_N_White__0.geometry}
                        material={materials.N_White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Street_light_3005_N_Glass_0.geometry}
                        material={materials.N_Glass}
                    />
                </group>
                <group position={[0, 103.841, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Building_orange_grey_0.geometry}
                        material={materials.orange_grey}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Building_Orange_0.geometry}
                        material={materials.Orange}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Building_white_0.geometry}
                        material={materials.white}
                    />
                </group>
                <group
                    position={[274.309, 150.677, 152.75]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    scale={[62.128, 62.128, 21.963]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Door_Orange_Light_0.geometry}
                        material={materials.Orange_Light}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Door_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[175.646, 650.923, 768.851]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_Orange_Light_0.geometry}
                        material={materials.Orange_Light}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[153.746, 529.649, 179.204]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_big_Orange_Light_0.geometry}
                        material={materials.Orange_Light}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_big_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group position={[-509.063, 923.217, -83.876]} scale={[74.125, 74.125, 203.559]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_Window_white_0.geometry}
                        material={materials.white}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_Window_Glass_0.geometry}
                        material={materials.Glass}
                    />
                </group>
                <group
                    position={[-422.255, 965.01, 335.1]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[46.497, 46.497, 6.308]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exhaust_N_grey_0.geometry}
                        material={materials.N_grey}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exhaust_white_0.geometry}
                        material={materials.white}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exhaust_blck_0.geometry}
                        material={materials.blck}
                    />
                </group>
                <group position={[251.552, -4.163, 847.775]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lawn_gREEN001_0.geometry}
                        material={materials['gREEN.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lawn_gREEN_0.geometry}
                        material={materials.gREEN}
                    />
                </group>
                <group position={[103.045, 580.402, -465.913]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wall_Bricks_Orange_0.geometry}
                        material={materials.Orange}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wall_Bricks_orange_grey_0.geometry}
                        material={materials.orange_grey}
                    />
                </group>
                <group
                    position={[-159.335, -18.575, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[-1135.403, 1135.403, 1135.403]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Footpath_white_0.geometry}
                        material={materials.white}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Footpath_Material001_0.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Piller__0.geometry}
                    material={materials.Piller__0}
                    position={[269.43, 279.508, 246.651]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[32.73, 32.73, 4.913]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light_3001__0.geometry}
                    material={materials.Piller__0}
                    position={[544.594, 166.76, 262.24]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={508.997}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bench004__0.geometry}
                    material={materials.Piller__0}
                    position={[547.454, 31.725, 400.965]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={508.997}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light_3002__0.geometry}
                    material={materials.Piller__0}
                    position={[544.594, 166.76, 559.279]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={508.997}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light_3006__0.geometry}
                    material={materials.Piller__0}
                    position={[544.594, 166.76, 895.091]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={508.997}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bench001__0.geometry}
                    material={materials.Piller__0}
                    position={[547.454, 31.725, 712.666]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={508.997}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bench002__0.geometry}
                    material={materials.Piller__0}
                    position={[547.454, 31.725, -440.831]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={508.997}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bench003__0.geometry}
                    material={materials.Piller__0}
                    position={[547.454, 31.725, -766.864]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={508.997}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/object3d/low_poly_university_building_3d_model.glb')
