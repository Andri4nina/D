/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: abdullahyeahyea (https://sketchfab.com/abdullahyeahyea)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com3D-models/low-poly-gaming-desk-6f1bc394de704e488d44e77134f23993
Title: Low Poly Gaming Desk
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";


export function Pc(props) {
  const { nodes, materials } = useGLTF("/elements/Pc.glb");
  const screenTexture = useTexture("/textures/ScreenCode.png");

  const screenRef = useRef();

  const [scrollState, setScrollState] = useState("idle");

  screenTexture.wrapS = THREE.RepeatWrapping; // Répéter la texture horizontalement
  screenTexture.wrapT = THREE.RepeatWrapping; // Répéter la texture verticalement

  // Durées de l'animation
  const idleDuration = 5;
  const scrollDownDuration = 2;
  const scrollUpDuration = 3;
  const totalAnimationDuration = idleDuration + scrollDownDuration + scrollUpDuration;

  useFrame((state) => {
    if (!screenTexture) return;

    // Utiliser l'état pour contrôler le mouvement
    if (scrollState === "scrollDown") {
      screenTexture.offset.y -= state.clock.getDelta() / scrollDownDuration; // Défilement vers le bas
      if (screenTexture.offset.y < -1) screenTexture.offset.y = -1; // Limiter la descente
    } else if (scrollState === "scrollUp") {
      screenTexture.offset.y += state.clock.getDelta() / scrollUpDuration; // Défilement vers le haut
      if (screenTexture.offset.y > 0) screenTexture.offset.y = 0; // Limiter le retour à la position d'origine
    }
  });
  useEffect(() => {
    // D'abord, rester immobile pendant la durée de idle
    const idleTimeout = setTimeout(() => {
      setScrollState("scrollDown"); // Commencer le défilement vers le bas
    }, idleDuration * 1000); // Convertir en millisecondes

    // Après avoir descendu, faire défiler vers le haut
    const scrollDownTimeout = setTimeout(() => {
      setScrollState("scrollUp"); // Commencer le défilement vers le haut
    }, (idleDuration + scrollDownDuration) * 1000);

    // Après avoir remonté, revenir à la position d'origine
    const scrollUpTimeout = setTimeout(() => {
      setScrollState("idle"); // Revenir à l'état immobile
    }, (idleDuration + scrollDownDuration + scrollUpDuration) * 1000);

    // Nettoyer les timeouts
    return () => {
      clearTimeout(idleTimeout);
      clearTimeout(scrollDownTimeout);
      clearTimeout(scrollUpTimeout);
    };
  }, []);



  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.315}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.145, -2.841, -1.506]} scale={[1, 1, 0.876]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Plastic}
            />
          </group>
          <group position={[-0.913, 0.552, -1.553]} scale={[0.523, 0.1, 0.339]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Plastic}
              ref={screenRef}
            >
              <pointLight
                position={[0, 0, 0]}
                color="blue"
                intensity={5}
                distance={2}
                decay={2}
              />

              <meshStandardMaterial map={screenTexture} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.blue_light}
            />
          </group>
          <group
            position={[-1.3, 0.474, -0.429]}
            rotation={[0, Math.PI / 12, -Math.PI]}
            scale={[-1.405, 0.024, 0.421]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.blue_light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.black}
            />
          </group>
          <group position={[-0, 0.465, -0.781]} scale={[0.114, 0.107, 0.204]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.blue_light}
            />
          </group>
          <group position={[-2.962, 1.463, -1.59]} scale={[0.438, 1, 1.09]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.blue_light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Plastic}
            />
          </group>
          <group
            position={[0.888, 1.043, -1.684]}
            rotation={[-1.702, 0, Math.PI / 2]}
            scale={[-0.235, 0.037, 0.235]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.blue}
            />
          </group>
          <group position={[0, 0.474, -0.754]} scale={0.576}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.blue_light}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/elements/Pc.glb");
