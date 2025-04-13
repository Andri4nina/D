

import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { SkeletonUtils } from "three-stdlib"
import { RigidBody } from '@react-three/rapier'


export function Drone({ isMoving, setIsMoving, color = "red", ...props }) {
  const group = useRef()
  const { scene, materials, animations } = useGLTF('/object3d/drone_2.glb')
  const { actions } = useAnimations(animations, group)

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

  const { nodes } = useGraph(clone)

  useEffect(() => {
    if (actions && actions["hover"]) {
      if (isMoving) {
        actions["hover"].reset().fadeIn(0.5).play();
      } else {
        actions["hover"].fadeOut(0.5);
      }
    }
  }, [actions, isMoving]);



  return (

    <group ref={group} {...props} dispose={null}  >

      <group name="Sketchfab_Scene" scale={.3} rotation={[0, -Math.PI, 0]}>

        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.412}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal1_1">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_50"
                      geometry={nodes.Object_50.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_50.skeleton}
                    >
                      <meshStandardMaterial color={color} />
                    </skinnedMesh>
                    <group name="drone44_44_correction">
                      <group name="drone44_44" />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>

      </group>

    </group >

  )
}

useGLTF.preload('/object3d/drone_2.glb')
