/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Pedro Silva (https://sketchfab.com/pxdrosilva)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com3D-models/desk-low-poly-ed62a64f51bf4d80a13e1344093c3909
Title: Desk Low-Poly
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Desk(props) {
    const { nodes, materials } = useGLTF('/elements/desk.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={.35}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Boxes_Boxes_0.geometry}
                    material={materials.Boxes}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Boxes_B_Tranaparency_0.geometry}
                    material={materials.B_Tranaparency}
                />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={.35}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.PC_Monitor_PC_Monitor_0.geometry}
                    material={materials.PC_Monitor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.PC_Monitor_PC_Screen_0.geometry}
                    material={materials.PC_Screen}
                />
            </group>
            <group position={[.1, 0, .1]} rotation={[0, Math.PI / 6, 0]}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={.35}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.PC_Keyboard_PC_Keyboard_0.geometry}
                        material={materials.material_0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.PC_Keyboard_Keyboard_light_0.geometry}
                        material={materials.Keyboard_light}
                    />
                </group>
            </group>

            <group rotation={[-Math.PI / 2, 0, 0]} scale={.35}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cell_phone_Cell_phone_0.geometry}
                    material={materials.Cell_phone}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cell_phone_Cell_screen_0.geometry}
                    material={materials.Cell_screen}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Desk_Desk_0.geometry}
                material={materials.Desk}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Paper_Paper_0.geometry}
                material={materials.Paper}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.PC_Speaker_PC_Speakers_0.geometry}
                material={materials.PC_Speakers}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            {/*   <mesh
                castShadow
                receiveShadow
                geometry={nodes.Keyboard_wire_WIre_0.geometry}
                material={materials.WIre}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            /> */}
            
            <group position={[.05,0,.15]} rotation={[0,Math.PI/6,0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.PC_Mouse_PC_Mouse_0.geometry}
                    material={materials.PC_Mouse}
                    scale={.35}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mousepad_Mousepad_0.geometry}
                    material={materials.Mousepad}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={.35}
                />
            </group>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mouse_wire_WIre_0.geometry}
                material={materials.WIre}
                position={[0, 0, -47.153]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Books_Books_0.geometry}
                material={materials.Books}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Notebook_Notebook_0.geometry}
                material={materials.Notebook}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Notebook_wire_WIre_0.geometry}
                material={materials.WIre}
                position={[0, 0, 290.967]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pen_Pen_0.geometry}
                material={materials.material_1}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Eraser_Eraser_0.geometry}
                material={materials.Eraser}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Dish_Cup_0.geometry}
                material={materials.material}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={.35}
            />

        </group>
    )
}

useGLTF.preload('/elements/desk.glb')
