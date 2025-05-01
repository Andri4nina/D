import { Drone } from '../components/3d/Drone';
import { charactersAtom, socket } from '../components/SocketManager';
import React, { useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useAtom } from 'jotai';

const CharacterScene = ({ droneColor }) => {
  const rigidBodyRef = useRef(null);
  const droneRef = useRef(null);
  const { camera } = useThree();
  const [characters, setCharacters] = useAtom(charactersAtom);

  const controls = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    ascend: false,
    descend: false
  });

  const isMovingRef = useRef(false);
  const mouseRotation = useRef({ y: 0 });
  const targetAltitudeRef = useRef(5);

  const moveSpeed = 5;
  const tiltAmount = 0.1;
  const maxSpeed = 20;
  const altitudeTolerance = 0.1;
  const altitudeAdjustSpeed = 2;
  const cameraDistance = 8;
  const cameraHeight = 3;
  const mouseSensitivity = 0.02;

  // Vecteurs pré-alloués pour éviter new Vector3() à chaque frame
  const forwardDirRef = useRef(new THREE.Vector3());
  const leftDirRef = useRef(new THREE.Vector3());
  const targetVelocityRef = useRef(new THREE.Vector3());
  const smoothedVelocityRef = useRef(new THREE.Vector3());
  const cameraOffsetRef = useRef(new THREE.Vector3());
  const rotationEulerRef = useRef(new THREE.Euler());

  const getKeyMap = () => ({
    forward: 's',
    backward: 'w',
    left: 'a',
    right: 'd',
    ascend: ' ',
    descend: 'shift'
  });

  useEffect(() => {
    const keyMap = getKeyMap();

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'p') isMovingRef.current = !isMovingRef.current;
      if (!isMovingRef.current) return;

      if (key === keyMap.forward) controls.current.forward = true;
      if (key === keyMap.backward) controls.current.backward = true;
      if (key === keyMap.left) controls.current.left = true;
      if (key === keyMap.right) controls.current.right = true;
      if (key === keyMap.ascend) controls.current.ascend = true;
      if (key === keyMap.descend) controls.current.descend = true;
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (!isMovingRef.current) return;
      const keyMap = getKeyMap();

      if (key === keyMap.forward) controls.current.forward = false;
      if (key === keyMap.backward) controls.current.backward = false;
      if (key === keyMap.left) controls.current.left = false;
      if (key === keyMap.right) controls.current.right = false;
      if (key === keyMap.ascend) controls.current.ascend = false;
      if (key === keyMap.descend) controls.current.descend = false;
    };

    const handleMouseMove = (e) => {
      if (!isMovingRef.current) return;
      mouseRotation.current.y -= e.movementX * -mouseSensitivity;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!rigidBodyRef.current || !droneRef.current) return;
    const rigidbody = rigidBodyRef.current;
    const { forward, backward, left, right, ascend, descend } = controls.current;
    const position = rigidbody.translation();

    // Gestion altitude
    if (isMovingRef.current) {
      if (ascend) targetAltitudeRef.current += delta * 2;
      if (descend) targetAltitudeRef.current = Math.max(0, targetAltitudeRef.current - delta * 2);
    }

    const altitudeDifference = targetAltitudeRef.current - position.y;
    if (Math.abs(altitudeDifference) > altitudeTolerance) {
      rigidbody.setLinvel(new THREE.Vector3(
        rigidbody.linvel().x,
        altitudeDifference * altitudeAdjustSpeed,
        rigidbody.linvel().z
      ), true);
    }

    if (isMovingRef.current) {
      const forwardDir = forwardDirRef.current;
      forwardDir.set(Math.sin(mouseRotation.current.y), 0, Math.cos(mouseRotation.current.y)).normalize();

      const leftDir = leftDirRef.current;
      leftDir.crossVectors(new THREE.Vector3(0, 1, 0), forwardDir).normalize();

      const targetVelocity = targetVelocityRef.current;
      targetVelocity.set(0, 0, 0);
      if (forward) targetVelocity.add(forwardDir.clone().multiplyScalar(moveSpeed));
      if (backward) targetVelocity.add(forwardDir.clone().multiplyScalar(-moveSpeed));
      if (left) targetVelocity.add(leftDir.clone().multiplyScalar(-moveSpeed));
      if (right) targetVelocity.add(leftDir.clone().multiplyScalar(moveSpeed));

      const currentVelocity = rigidbody.linvel();
      const smoothedVelocity = smoothedVelocityRef.current;
      smoothedVelocity.set(
        THREE.MathUtils.lerp(currentVelocity.x, targetVelocity.x, 0.2),
        currentVelocity.y,
        THREE.MathUtils.lerp(currentVelocity.z, targetVelocity.z, 0.2)
      );

      rigidbody.setLinvel(smoothedVelocity, true);

      const newRotation = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, mouseRotation.current.y, 0)
      );
      rigidbody.setRotation(newRotation, true);
    } else {
      rigidbody.setLinvel(new THREE.Vector3(
        rigidbody.linvel().x,
        rigidbody.linvel().y * 0.98,
        rigidbody.linvel().z
      ), true);
      targetAltitudeRef.current = position.y;
    }

    if (droneRef.current) {
      const drone = droneRef.current;
      drone.rotation.x = THREE.MathUtils.lerp(drone.rotation.x, backward ? -tiltAmount : (forward ? tiltAmount : 0), 0.1);
      drone.rotation.z = THREE.MathUtils.lerp(drone.rotation.z, left ? tiltAmount : (right ? -tiltAmount : 0), 0.1);
    }

    const cameraOffset = cameraOffsetRef.current;
    cameraOffset.set(
      Math.sin(mouseRotation.current.y) * cameraDistance,
      cameraHeight,
      Math.cos(mouseRotation.current.y) * cameraDistance
    );
    camera.position.copy(position).add(cameraOffset);
    camera.lookAt(position.x, position.y + 1, position.z);
  });

  useEffect(() => {
    if (!socket) return;

    const interval = setInterval(() => {
      if (!rigidBodyRef.current) return;
      const rigidbody = rigidBodyRef.current;
      const position = rigidbody.translation();
      const rotationEuler = rotationEulerRef.current;

      rotationEuler.setFromQuaternion(new THREE.Quaternion().copy(rigidbody.rotation()));

      socket.emit('updateCharacter', {
        position: [position.x, position.y, position.z],
        rotation: [rotationEuler.x, rotationEuler.y, rotationEuler.z],
        color: droneColor,
        isMoving: isMovingRef.current,
      });
    }, 200);

    return () => clearInterval(interval);
  }, [droneColor]);

  useEffect(() => {
    if (!socket) return;

    const handleDisconnect = (id) => {
      setCharacters(prev => prev.filter(char => char.id !== id));
    };

    socket.on('playerDisconnected', handleDisconnect);
    return () => {
      socket.off('playerDisconnected', handleDisconnect);
    };
  }, [setCharacters]);

  const otherCharacters = characters
    .filter(character => character.id !== socket?.id)
    .map(character => {
      const position = character.position || [0, 0, 0];
      const rotation = character.rotation || [0, 0, 0];

      return (
        <group key={character.id} position={position}>
            <Drone
              color={character.color}
              isMoving={character.isMoving}
              rotation={new THREE.Euler(rotation[0], rotation[1], rotation[2])}
            />
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
        linearDamping={0.5}
        angularDamping={0.7}
        gravityScale={isMovingRef.current ? 0 : 1}
      >
        <group ref={droneRef}>
          <Drone isMoving={isMovingRef.current} color={droneColor} />
          
        </group>
      </RigidBody>

      {otherCharacters}
    </>
  );
};

export default CharacterScene;
