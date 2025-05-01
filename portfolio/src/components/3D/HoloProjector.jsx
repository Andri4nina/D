import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Holoprojector(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/elements/Holoprojector.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    // 1️⃣ Lancer ComingHolo
    actions.ComingHolo?.reset().fadeIn(0.5).play();

    setTimeout(() => {
      // 2️⃣ Transition vers ViewHolo après 8s
      actions.ComingHolo?.fadeOut(0.5);
      actions.ViewHolo?.reset().fadeIn(0.5).play();
    }, 8000);

    setTimeout(() => {
      // 3️⃣ Transition vers Idle après 7s
      actions.ViewHolo?.fadeOut(0.5);
      actions.Idle?.reset().fadeIn(0.5).play();
    }, 15000); // 8s + 7s = 15s

    setTimeout(() => {
      // 4️⃣ Transition vers HoloEnd après 12s
      actions.Idle?.fadeOut(0.5);
      actions.HoloEnd?.reset().fadeIn(0.5).play();
    }, 27000); // 15s + 12s = 27s

  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} scale={.2}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 1.518]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Porter_66">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.RingMat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group name="HologramProjector_65" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/elements/Holoprojector.glb')