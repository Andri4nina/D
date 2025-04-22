import React, { useEffect, useRef, useState } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { charactersAtom, socket } from '../components/SocketManager';
import { useAtom } from 'jotai';
import { Drone } from '../components/3D/Drone';

const CharacterScene = ({ isNight, droneColor }) => {
  const rigidBodyRef = useRef(null);
  const droneRef = useRef(null);
  const { camera } = useThree();
  const [keyboardLayout] = useState('qwerty');
  const [targetAltitude, setTargetAltitude] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [mouseRotation, setMouseRotation] = useState({ y: 0 });

  // Paramètres
  const mouseSensitivity = 0.02;
  const cameraDistance = 8;
  const cameraHeight = 3;
  const moveSpeed = 0.1;
  const tiltAmount = 0.1;
  const maxSpeed = 5;
  const altitudeTolerance = 0.1;
  const altitudeAdjustSpeed = 0.005;

  const controls = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    ascend: false,
    descend: false
  });

  const getKeyMap = () => ({
    forward: 's',
    backward: 'w',
    left: 'a',
    right: 'd',
    ascend: ' ',
    descend: 'shift'
  });

  // Gestion des entrées
  useEffect(() => {
    const keyMap = getKeyMap();

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'p') setIsMoving(prev => !prev);
      if (!isMoving) return;

      if (key === keyMap.forward) controls.current.forward = true;
      if (key === keyMap.backward) controls.current.backward = true;
      if (key === keyMap.left) controls.current.left = true;
      if (key === keyMap.right) controls.current.right = true;
      if (key === keyMap.ascend) controls.current.ascend = true;
      if (key === keyMap.descend) controls.current.descend = true;
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      const keyMap = getKeyMap();

      if (key === keyMap.forward) controls.current.forward = false;
      if (key === keyMap.backward) controls.current.backward = false;
      if (key === keyMap.left) controls.current.left = false;
      if (key === keyMap.right) controls.current.right = false;
      if (key === keyMap.ascend) controls.current.ascend = false;
      if (key === keyMap.descend) controls.current.descend = false;
    };

    const handleMouseMove = (e) => {
      if (!isMoving) return;
      setMouseRotation(prev => ({
        y: prev.y - e.movementX * -mouseSensitivity
      }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMoving]);

  // Logique de mouvement
  useFrame((state, delta) => {
    if (!rigidBodyRef.current || !droneRef.current) return;

    const rigidbody = rigidBodyRef.current;
    const drone = droneRef.current;
    const { forward, backward, left, right, ascend, descend } = controls.current;
    const position = rigidbody.translation();

    // Gestion altitude
    if (isMoving) {
      if (ascend) setTargetAltitude(prev => prev + delta * 2);
      if (descend) setTargetAltitude(prev => Math.max(0, prev - delta * 2));
    }

    // Calcul altitude
    const altitudeDifference = targetAltitude - position.y;
    const impulse = new THREE.Vector3();

    if (Math.abs(altitudeDifference) > altitudeTolerance) {
      const lift = Math.min(Math.max(altitudeDifference * altitudeAdjustSpeed, -0.5), 0.5);
      impulse.y += lift;
    }

    // Mouvement
    if (isMoving) {
      const forwardDir = new THREE.Vector3(
        Math.sin(mouseRotation.y),
        0,
        Math.cos(mouseRotation.y)
      ).normalize();

      const leftDir = new THREE.Vector3().crossVectors(
        new THREE.Vector3(0, 1, 0),
        forwardDir
      ).normalize();

      if (forward) impulse.add(forwardDir.multiplyScalar(moveSpeed));
      if (backward) impulse.add(forwardDir.multiplyScalar(-moveSpeed * 0.5));
      if (left) impulse.add(leftDir.multiplyScalar(-moveSpeed * 0.5));
      if (right) impulse.add(leftDir.multiplyScalar(moveSpeed * 0.5));

      // Rotation - méthode sécurisée
      const newRotation = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, mouseRotation.y, 0)
      );
      rigidbody.setRotation(newRotation, true);
    }

    rigidbody.applyImpulse(impulse, true);

    // Limite vitesse
    const linvel = rigidbody.linvel();
    const currentSpeed = Math.sqrt(linvel.x * linvel.x + linvel.y * linvel.y + linvel.z * linvel.z);

    if (currentSpeed > maxSpeed) {
      const brakeFactor = -0.1 * (currentSpeed - maxSpeed) / currentSpeed;
      const brake = new THREE.Vector3(
        linvel.x * brakeFactor,
        linvel.y * brakeFactor,
        linvel.z * brakeFactor
      );
      rigidbody.applyImpulse(brake, true);
    }

    // Inclinaison drone
    if (drone) {
      const targetRotation = new THREE.Euler(
        backward ? -tiltAmount : (forward ? tiltAmount : 0),
        mouseRotation.y,
        left ? tiltAmount : (right ? -tiltAmount : 0),
        'YXZ'
      );

      drone.rotation.x = THREE.MathUtils.lerp(drone.rotation.x, targetRotation.x, 0.1);
      drone.rotation.z = THREE.MathUtils.lerp(drone.rotation.z, targetRotation.z, 0.1);
    }

    // Caméra
    const cameraOffset = new THREE.Vector3(
      Math.sin(mouseRotation.y) * cameraDistance,
      cameraHeight,
      Math.cos(mouseRotation.y) * cameraDistance
    );
    camera.position.copy(position).add(cameraOffset);
    camera.lookAt(position.x, position.y + 1, position.z);
  });

  // Synchronisation réseau
  useEffect(() => {
    if (!socket) return;

    const interval = setInterval(() => {
      if (rigidBodyRef.current) {
        const rigidbody = rigidBodyRef.current;
        const position = rigidbody.translation();
        const rotation = new THREE.Euler().setFromQuaternion(
          new THREE.Quaternion().copy(rigidbody.rotation())
        );

        socket.emit('updateCharacter', {
          position: [position.x, position.y, position.z],
          rotation: [rotation.x, rotation.y, rotation.z],
          color: droneColor,
          isMoving,
        });
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isMoving, droneColor, socket]);

  // Gestion des déconnexions
  useEffect(() => {
    if (!socket) return;

    const handleDisconnect = (id) => {
      setCharacters(prev => prev.filter(char => char.id !== id));
    };

    socket.on('playerDisconnected', handleDisconnect);
    return () => {
      socket.off('playerDisconnected', handleDisconnect);
    };
  }, [setCharacters, socket]);

  // Rendu des autres joueurs
  const otherCharacters = characters
    .filter(character => character.id !== socket?.id)
    .map(character => {
      const position = character.position || [0, 0, 0];
      const rotation = character.rotation || [0, 0, 0];

      return (
        <group key={character.id} position={position}>
          <RigidBody
            colliders="cuboid"
            position={[0, 5, 0]}
            type="dynamic"
            enabledRotations={[false, true, false]}
            linearDamping={0.25}
            angularDamping={0.5}
            gravityScale={0.2}
          >
            <Drone
              color={character.color}
              isMoving={character.isMoving}
              rotation={new THREE.Euler(rotation[0], rotation[1], rotation[2])}
            />
          </RigidBody>

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
      );
    });

  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        colliders="cuboid"
        position={[0, 5, 0]}
        type="dynamic"
        enabledRotations={[false, true, false]}
        linearDamping={0.25}
        angularDamping={0.5}
        gravityScale={0.2}
      >
        <group ref={droneRef}>
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
      </RigidBody>

      {otherCharacters}
    </>
  );
};

export default CharacterScene;