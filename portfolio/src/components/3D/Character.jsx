import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Drone } from './Drone';
import { useAtom } from 'jotai';


import { Html } from '@react-three/drei'; // Pour afficher la bulle de discussion
import { charactersAtom, socket } from '../SocketManager';
import { useSpecialistPositionContext } from '../../contexts/SpecialistPositionContext';

const Character = ({ isNight, droneColor }) => {
  const [isMoving, setIsMoving] = useState(false);
  const [isMovingForward, setIsMovingForward] = useState(false);
  const [isMovingBackward, setIsMovingBackward] = useState(false);
  const [isTurningLeft, setIsTurningLeft] = useState(false);
  const [isTurningRight, setIsTurningRight] = useState(false);
  const [isAscending, setIsAscending] = useState(false);
  const [isDescending, setIsDescending] = useState(false);
  const rigidBodyRef = useRef()

  const groupRef = useRef();
  const { camera, mouse } = useThree();
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [keyboardLayout, setKeyboardLayout] = useState('qwerty');
  const { updateDronePosition, glowingSpecialist } = useSpecialistPositionContext();  // Utiliser le contexte

  const cameraDistance = 5;
  const cameraHeight = 2;
  const moveSpeed = 0.1;
  const turnSpeed = 0.05;
  const tiltAngle = 0.2;
  const verticalSpeed = 0.05;
  const gravity = 0.1;
  const lateralSpeed = 0.05;
  const forwardTiltAngle = 0.1;
  const backwardTiltAngle = -0.1;

  useEffect(() => {
    // Fonction pour détecter la disposition du clavier
    const detectKeyboardLayout = () => {
      // Test basique - vérifie si la touche 'a' produit 'q' (ce qui serait le cas sur AZERTY)
      // Note: Cette méthode n'est pas parfaite mais peut donner une indication
      try {
        if (navigator.keyboard && navigator.keyboard.getLayoutMap) {
          navigator.keyboard.getLayoutMap().then(layoutMap => {
            if (layoutMap.get('KeyA') === 'q') {
              setKeyboardLayout('azerty');
            } else {
              setKeyboardLayout('qwerty');
            }
          });
        } else {
          // Fallback pour les navigateurs qui ne supportent pas Keyboard API
          const isProbablyAzerty = navigator.language.includes('fr') ||
            navigator.languages.some(lang => lang.includes('fr'));
          setKeyboardLayout(isProbablyAzerty ? 'azerty' : 'qwerty');
        }
      } catch (e) {
        console.error("Erreur de détection du clavier:", e);
      }
    };

    detectKeyboardLayout();
  }, []);



  useEffect(() => {
    const interval = setInterval(() => {
      if (groupRef.current) {
        const position = [
          groupRef.current.position.x,
          groupRef.current.position.y,
          groupRef.current.position.z,
        ];
        const rotation = [
          groupRef.current.rotation.x,
          groupRef.current.rotation.y,
          groupRef.current.rotation.z,
        ];
        socket.emit('updateCharacter', {
          position,
          rotation,
          color: droneColor,
          isMoving,
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isMoving, droneColor]);

  useFrame(() => {
    if (!groupRef.current) return;

    const { current: group } = groupRef;
    if (!group.position) return; // Vérifier si group.position est défini

    group.rotation.y = mouse.x * Math.PI;

    const direction = new THREE.Vector3();
    if (isMoving) {
      if (isMovingForward || isMovingBackward) {
        direction.set(
          Math.sin(group.rotation.y) * (isMovingBackward ? 1 : -1),
          0,
          Math.cos(group.rotation.y) * (isMovingBackward ? 1 : -1)
        ).normalize();
        group.position.add(direction.multiplyScalar(moveSpeed));
        group.rotation.x = THREE.MathUtils.lerp(
          group.rotation.x,
          isMovingForward ? forwardTiltAngle : backwardTiltAngle,
          0.1
        );
      }
      if (isTurningLeft || isTurningRight) {
        group.rotation.z = THREE.MathUtils.lerp(
          group.rotation.z,
          isTurningLeft ? tiltAngle : -tiltAngle,
          0.1
        );
        direction.set(isTurningLeft ? -1 : 1, 0, 0).applyQuaternion(group.quaternion);
        group.position.add(direction.multiplyScalar(lateralSpeed));
      }
    } else {
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, 0, 0.1);
      group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, 0, 0.1);
      if (group.position.y > 0) {
        group.position.y = Math.max(0, group.position.y - gravity);
      }
    }

    if (isAscending) group.position.y += verticalSpeed;
    if (isDescending) group.position.y = Math.max(0, group.position.y - verticalSpeed);

    const angle = group.rotation.y;
    camera.position.set(
      group.position.x + Math.sin(angle) * cameraDistance,
      group.position.y + cameraHeight,
      group.position.z + Math.cos(angle) * cameraDistance
    );
    camera.lookAt(group.position);
    updateDronePosition(group.position.clone());
  });

  // Gestion des événements clavier
  useEffect(() => {
    const handleKeyDown = (event) => {


      const keyMap = {
        moveForward: keyboardLayout === 'azerty' ? 'z' : 'w',
        moveBackward: keyboardLayout === 'azerty' ? 's' : 's',
        turnLeft: keyboardLayout === 'azerty' ? 'q' : 'a',
        turnRight: keyboardLayout === 'azerty' ? 'd' : 'd',
        ascend: keyboardLayout === 'azerty' ? 'a' : 'z', // Note: 'a' sur AZERTY est à gauche de 'z'
        descend: 'x'
      };




      switch (event.key.toLowerCase()) {
        case 'p':
          setIsMoving((prevIsMoving) => !prevIsMoving);
          break;
        case keyMap.moveForward:
          setIsMovingForward(true);
          break;
        case keyMap.moveBackward:
          setIsMovingBackward(true);
          break;
        case keyMap.turnLeft:
          setIsTurningLeft(true);
          break;
        case keyMap.turnRight:
          setIsTurningRight(true);
          break;
        case keyMap.ascend:
          setIsAscending(true);
          break;
        case keyMap.descend:
          setIsDescending(true);

          break;
        /*   case 'enter': // Ouvrir la bulle de discussion
            if (glowingSpecialist) { // Vérifier si le drone est proche d'un spécialiste
              setShowDialog(true);
            }
            break; */
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      const keyMap = {
        moveForward: keyboardLayout === 'azerty' ? 'z' : 'w',
        moveBackward: keyboardLayout === 'azerty' ? 's' : 's',
        turnLeft: keyboardLayout === 'azerty' ? 'q' : 'a',
        turnRight: keyboardLayout === 'azerty' ? 'd' : 'd',
        ascend: keyboardLayout === 'azerty' ? 'a' : 'z',
        descend: 'x'
      };

      switch (event.key.toLowerCase()) {
        case keyMap.moveForward:
          setIsMovingForward(false);
          break;
        case keyMap.moveBackward:
          setIsMovingBackward(false);
          break;
        case keyMap.turnLeft:
          setIsTurningLeft(false);
          break;
        case keyMap.turnRight:
          setIsTurningRight(false);
          break;
        case keyMap.ascend:
          setIsAscending(false);
          break;
        case keyMap.descend:
          setIsDescending(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [/* glowingSpecialist */]);


  return (
    <>
      {/* Drone local */}
      <group ref={groupRef}>
        <group position={[0, 0, 0]}>
          <Drone isMoving={isMoving} color={droneColor} />
          {isNight && (
            <pointLight
              position={[0, 2, 0]}
              color="white"
              intensity={5}
              distance={20}
              decay={2}
            />
          )}
        </group>
      </group>

      {/* Drones des autres utilisateurs */}
      {characters
        .filter((character) => character.id !== socket.id)
        .map((character) => (
          <group
            key={character.id}
            position={character.position}
            rotation={character.rotation}
          >
            <Drone
              color={character.color}
              isMoving={character.isMoving}
            />
            {isNight && (
              <pointLight
                position={[0, 1.5, 0]}
                color="white"
                intensity={5}
                distance={20}
                decay={2}
              />
            )}
          </group>
        ))}

    </>
  );
};

export default Character;