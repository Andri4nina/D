import React, { useRef, useEffect, useState } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { ContactShadows, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Character from "../components/3D/Character";
import { SocketManager } from "../components/SocketManager";
import QGScene from "../scenes/QGScene";
import CloudScene from "../scenes/CloudScene";
import ProjectScene from "../scenes/ProjectScene";
import WayScene from "../scenes/WayScene";
import TeamScene from "../scenes/TeamScene";
import EmitScene from "../scenes/EmitScene";
import CharacterScene from "../scenes/CharacterScene";
import BushesScene from "../scenes/BushesScene";

const Immersive3DLayouts = ({ droneColor }) => {
    const directionalLightRef = useRef();
    const skyRef = useRef();
    const [timeOfDay, setTimeOfDay] = useState({
        hour: 12,
        sunPosition: [0, 20, 0],
        lightIntensity: 1.5,
        ambientIntensity: 0.5
    });

    const isNight = timeOfDay.hour < 6 || timeOfDay.hour > 16;


    // Fonction pour calculer la position du soleil en fonction de l'heure
    const calculateSunPosition = (hour) => {
        // Convertir l'heure en angle (0h = -π/2, 12h = π/2, 24h = 3π/2)
        const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;

        // Calculer la position du soleil
        const x = Math.cos(angle);
        const y = Math.sin(angle);

        // Garantir que le soleil est sous l'horizon la nuit
        const yPos = Math.max(y, -0.2);

        return [x, yPos, 0];
    };

    // Calculer l'intensité de la lumière en fonction de l'heure
    const calculateLightIntensity = (hour) => {
        // Pleine intensité à midi, sombre la nuit
        if (hour >= 6 && hour <= 18) {
            // Jour: intensité maximale à midi
            return 1.5 * Math.sin(((hour - 6) / 12) * Math.PI);
        } else {
            // Nuit: intensité basse
            return 0.1;
        }
    };

    // Calculer l'intensité de la lumière ambiante en fonction de l'heure
    const calculateAmbientIntensity = (hour) => {
        // Lumière ambiante plus forte pendant la journée
        if (hour >= 6 && hour <= 18) {
            return 0.5 * Math.sin(((hour - 6) / 12) * Math.PI);
        } else {
            // Nuit: lumière ambiante faible mais non nulle
            return 0.15;
        }
    };

    // Mettre à jour l'heure et les paramètres associés
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hour = now.getHours() + now.getMinutes() / 60;

            const sunPosition = calculateSunPosition(hour);
            const lightIntensity = calculateLightIntensity(hour);
            const ambientIntensity = calculateAmbientIntensity(hour);

            setTimeOfDay({
                hour,
                sunPosition,
                lightIntensity,
                ambientIntensity
            });
        };

        // Mise à jour initiale
        updateTime();

        // Mise à jour toutes les minutes
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Mettre à jour la scène en fonction de l'heure
    useEffect(() => {
        if (directionalLightRef.current) {
            directionalLightRef.current.position.set(
                timeOfDay.sunPosition[0] * 10,
                timeOfDay.sunPosition[1] * 10,
                timeOfDay.sunPosition[2] * 10
            );
            directionalLightRef.current.intensity = timeOfDay.lightIntensity;
        }
    }, [timeOfDay]);

    // Calculer la couleur du ciel en fonction de l'heure
    const getSkyColor = () => {
        const hour = timeOfDay.hour;

        // Couleurs de base
        const dayColor = new THREE.Color(0x87ceeb);    // Bleu ciel
        const nightColor = new THREE.Color(0x0c1445);  // Bleu nuit foncé
        const sunsetColor = new THREE.Color(0xff7e50); // Orange/rose pour coucher de soleil
        const sunriseColor = new THREE.Color(0xffa07a); // Rose/orange pour lever de soleil

        // Transitions entre les couleurs
        if (hour >= 5 && hour < 8) {
            // Lever du soleil (5h-8h)
            const t = (hour - 5) / 3;
            return new THREE.Color().lerpColors(sunriseColor, dayColor, t);
        } else if (hour >= 8 && hour < 17) {
            // Journée (8h-17h)
            return dayColor;
        } else if (hour >= 17 && hour < 20) {
            // Coucher du soleil (17h-20h)
            const t = (hour - 17) / 3;
            return new THREE.Color().lerpColors(dayColor, sunsetColor, t);
        } else if (hour >= 20 && hour < 22) {
            // Transition vers la nuit (20h-22h)
            const t = (hour - 20) / 2;
            return new THREE.Color().lerpColors(sunsetColor, nightColor, t);
        } else {
            // Nuit (22h-5h)
            return nightColor;
        }
    };

    // Couleur du ciel basée sur l'heure
    const skyColor = getSkyColor();


    return (
        <>
            <color attach="background" args={[skyColor]} />
            <Sky
                ref={skyRef}
                distance={450000}
                sunPosition={timeOfDay.sunPosition}
                inclination={0}
                azimuth={180}
                mieCoefficient={0.005}
                mieDirectionalG={0.8}
                rayleigh={0.5}
            />

            <ambientLight intensity={timeOfDay.ambientIntensity} />
            <directionalLight
                ref={directionalLightRef}
                position={[
                    timeOfDay.sunPosition[0] * 10,
                    timeOfDay.sunPosition[1] * 10,
                    timeOfDay.sunPosition[2] * 10
                ]}
                intensity={timeOfDay.lightIntensity}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={0.1}
                shadow-camera-far={50}
            />

            {/* Si c'est la nuit, ajouter une lumière de lune */}
            {timeOfDay.hour < 6 || timeOfDay.hour > 18 ? (
                <directionalLight
                    position={[
                        -timeOfDay.sunPosition[0] * 10,
                        Math.abs(timeOfDay.sunPosition[1]) * 10,
                        -timeOfDay.sunPosition[2] * 10
                    ]}
                    intensity={0.2}
                    color="#b9d5ff"
                />
            ) : null}

            <ContactShadows blur={2} />
            <Physics gravity={[0, -9.81, 0]}>
                <RigidBody type="static">
                    <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, 0, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[1000, 1000]} />
                        <meshStandardMaterial
                            color="springgreen"
                            // Assombrir légèrement le sol la nuit
                            emissive={timeOfDay.hour < 6 || timeOfDay.hour > 18 ? "#163616" : "#000000"}
                            emissiveIntensity={timeOfDay.hour < 6 || timeOfDay.hour > 18 ? 0.2 : 0}
                        />
                    </mesh>
                </RigidBody>
                <QGScene isNight={isNight} />
                <CloudScene />
                <ProjectScene isNight={isNight} />
                <WayScene isNight={isNight} />
                <TeamScene isNight={isNight} />
                <EmitScene />
                <BushesScene />


             {/*    <SocketManager />
                <group position={[0, 0.2, 0]}>
                    <Character castShadow receiveShadow isNight={isNight} droneColor={droneColor} />
                </group> */}
              {/*   <CharacterScene /> */}

            </Physics>
            <OrbitControls />
        </>
    )
}

export default Immersive3DLayouts