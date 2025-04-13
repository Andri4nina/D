import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useMemo } from "react";

import { Pc } from "./Pc";
import { Carpet } from "./Carpet";
import { MyAvatar } from "./MyAvatar";
import { Cabinet } from "./Cabinet";
import { AndoAvatar } from "./AndoAvatar";
import { Bed } from "./Bed";
import { Chair } from "./Chair";
import { Server } from "./Server";
import { MiniBot } from "./MiniBot";
import { Holoprojector } from "./HoloProjector";

const MyHouse = ({ isNight }) => {
  const woodTexture = useTexture("/textures/wood.jpg");

  const material = useMemo(() => ({ map: woodTexture }), [woodTexture]);

  // Configuration des rangées
  const solRows = useMemo(() => [0, 1, 2, -1, -2], []);
  const solColumns = useMemo(() => [0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7], []);

  const wallZ = useMemo(() => [0, 1, -1, 2, -2], []);

  return (
    <>
      {/* sol en bois */}
      <RigidBody colliders="cuboid" type="fixed">
        {solRows.map(z => (
          <group key={`row-${z}`} position={[0, 0.1, z]}>
            {solColumns.map(x => (
              <mesh key={`col-${x}`} position={[x, 0, 0]}>
                <boxGeometry args={[1, 0.1, 1]} />
                <meshStandardMaterial {...material} />
              </mesh>
            ))}
          </group>
        ))}
      </RigidBody>

      {/* mur */}
      <RigidBody colliders="cuboid" type="fixed">
        <group position={[-7.75, 1.5, 0]}>
          {wallZ.map(z => (
            <mesh key={`left-${z}`} position={[0, 0, z]}>
              <boxGeometry args={[0.5, 3, 1]} />
              <meshStandardMaterial {...material} />
            </mesh>
          ))}
        </group>
        <group position={[7.75, 1.5, 0]}>
          {wallZ.map(z => (
            <mesh key={`right-${z}`} position={[0, 0, z]}>
              <boxGeometry args={[0.5, 3, 1]} />
              <meshStandardMaterial {...material} />
            </mesh>
          ))}
        </group>
        <group position={[0, 1.5, -2.75]}>
          <group position={[0, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>

          <group position={[1, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-1, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[2, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-2, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[3, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-3, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[4, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-4, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>

          <group position={[5, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-5, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[6, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-6, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>

          <group position={[7, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-7, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>

          <group position={[7.75, 0, 0]}>
            <mesh>
              <boxGeometry args={[0.5, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
          <group position={[-7.75, 0, 0]}>
            <mesh>
              <boxGeometry args={[0.5, 3, 0.5]} />
              <meshStandardMaterial map={woodTexture} />
            </mesh>
          </group>
        </group>
      </RigidBody>

      /* separation */
      <RigidBody colliders="cuboid" type="fixed">
        {[-2.5, 2.5].map(x => (
          <group key={x} position={[x, 1.5, 0]}>
            {[0, 1, 2, -2].map(z => (
              <mesh key={`main-${x}-${z}`} position={[0, 0, z]}>
                <boxGeometry args={[0.2, 3, 1]} />
                <meshStandardMaterial {...material} />
              </mesh>
            ))}
            <mesh key={`middle-${x}`} position={[0, 1.25, -1]}>
              <boxGeometry args={[0.2, 0.5, 1]} />
              <meshStandardMaterial {...material} />
            </mesh>
          </group>
        ))}
      </RigidBody>

    
      {/* Chambre 1 */}
      <RigidBody colliders="cuboid" type="fixed">
        <group position={[-6, 0, -1]}><Bed /></group>
      </RigidBody>
      <RigidBody type="fixed">
        <group position={[-3.8, 0.8, -1.45]}><Pc /></group>
      </RigidBody>
      <group position={[-5, 0.15, 0]}><Carpet /></group>
      <group position={[-4.1, 0.2, -1]} rotation={[0, Math.PI, 0]}><MyAvatar /></group>
      <RigidBody type="fixed">
        <group position={[-4.1, 0.15, -1]} rotation={[0, Math.PI, 0]}><Chair /></group>
      </RigidBody>
      <RigidBody type="fixed">
        <group position={[-3.15, 1.25, 1]} rotation={[0, Math.PI, 0]}><Cabinet /></group>
      </RigidBody>
      <group position={[-5.45, 0.05, -0.5]} rotation={[0, Math.PI / 2, 0]}><AndoAvatar /></group>

      {/* Chambre 2 */}
      <group position={[-2.15, 2.5, 0]}>
      {isNight && (
          <pointLight
            position={[0, 10, 0]}
            color="white"
            intensity={200}
            distance={20}
            decay={2}
          />
        )}
        <group position={[0, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.5, 0.1, 1]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
        <group position={[0, 0, 1]}>
          <mesh>
            <boxGeometry args={[0.5, 0.1, 1]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
        <group position={[0, 0, 2]}>
          <mesh>
            <boxGeometry args={[0.5, 0.1, 1]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
      </group>
      <group position={[2.15, 2.5, 0]}>
        <group position={[0, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.5, 0.1, 1]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
        <group position={[0, 0, 1]}>
          <mesh>
            <boxGeometry args={[0.5, 0.1, 1]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
        <group position={[0, 0, 2]}>
          <mesh>
            <boxGeometry args={[0.5, 0.1, 1]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
      </group>
      <group position={[0, 2.5, -2.25]}>
        <group position={[0, 0, 0]}>
          <mesh>
            <boxGeometry args={[1, 0.1, 0.5]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>

        <group position={[1, 0, 0]}>
          <mesh>
            <boxGeometry args={[1, 0.1, 0.5]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
        <group position={[-1, 0, 0]}>
          <mesh>
            <boxGeometry args={[1, 0.1, 0.5]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
        <group position={[2, 0, 0]}>
          <mesh>
            <boxGeometry args={[1, 0.1, 0.5]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
        <group position={[-2, 0, 0]}>
          <mesh>
            <boxGeometry args={[1, 0.1, 0.5]} />
            <meshStandardMaterial map={woodTexture} />
          </mesh>
        </group>
      </group>
      <group position={[-1, 0, -1.5]}>
        <group position={[0, 0.8, 0]}>
          <RigidBody type="fixed">
            <Pc />
          </RigidBody>
        </group>
        <group position={[-0.4, 0.15, 0.5]} rotation={[0, Math.PI, 0]}>
          <RigidBody type="fixed">
            <Chair />
          </RigidBody>
        </group>
        <group position={[0.5, 0.15, 0.5]} rotation={[0, (-3 * Math.PI) / 4, 0]}>
          <RigidBody type="fixed">
            <Chair />
          </RigidBody>
        </group>
      </group>
      <group position={[1.5, 0, -1.5]}>
        <group position={[0, 0.8, 0]}>
          <RigidBody type="fixed">
            <Pc />
          </RigidBody>
        </group>
        <group position={[-0.4, 0.15, 0.5]} rotation={[0, Math.PI, 0]}>
          <RigidBody type="fixed">
            <Chair />
          </RigidBody>
        </group>
      </group>
      <group position={[-1.4, 0, 1]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[0, 0.8, 0]}>
          <RigidBody type="fixed">
            <Pc />
          </RigidBody>
        </group>
        <group position={[-0.4, 0.15, 0.5]} rotation={[0, Math.PI, 0]}>
          <RigidBody type="fixed">
            <Chair />
          </RigidBody>
        </group>
        <group position={[0.5, 0.15, 0.5]} rotation={[0, (-3 * Math.PI) / 4, 0]}>
          <RigidBody type="fixed">
            <Chair />
          </RigidBody>
        </group>
      </group>
      <group position={[1.4, 0, 1]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[0, 0.8, 0]}>
          <RigidBody type="fixed">
            <Pc />
          </RigidBody>
        </group>
        <group position={[-0.4, 0.15, 0.5]} rotation={[0, Math.PI, 0]}>
          <RigidBody type="fixed">
            <Chair />
          </RigidBody>
        </group>
        <group position={[0.5, 0.15, 0.5]} rotation={[0, (-3 * Math.PI) / 4, 0]}>
          <RigidBody type="fixed">
            <Chair />
          </RigidBody>
        </group>
      </group>


      {/* Chambre 3 */}
      <group position={[3.1, 0.15, 0]}>
        <Server />
      </group>
      <group position={[3.1, 0.15, 1]}>
        <Server />
      </group>
      <group position={[5.1, 0.15, -2]} rotation={[0, -Math.PI / 2, 0]}>
        <Server />
      </group>
      <group position={[6.1, 0.15, -2]} rotation={[0, -Math.PI / 2, 0]}>
        <Server />
      </group>
      <group position={[7.1, 0.15, -2]} rotation={[0, -Math.PI / 2, 0]}>
        <Server />
      </group>
      <group position={[3.1, 0.15, 2]}>
        <Server />
      </group>
      <group position={[6, .5, 1]}>
        <MiniBot />
      </group>
      <group position={[6, 0, 1]}>
        <Holoprojector />
      </group>
    </>
  );
};

export default MyHouse;
