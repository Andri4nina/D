import { BigTrafficLight } from "./BigTrafficLight";
import { CrossWalk } from "./CrossWalk";


const Carrefour = () => {
  return (
    <>
      <CrossWalk />
      <mesh
        position={[3.5, 0, -3.5]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <BigTrafficLight />
      </mesh>
      <mesh position={[-3.5, 0, -3.5]} rotation={[0, Math.PI, 0]} receiveShadow>
        <BigTrafficLight />
      </mesh>
      <mesh
        position={[-3.5, 0, 3.5]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <BigTrafficLight />
      </mesh>
      <mesh
        position={[3.5, 0, 3.5]}
        rotation={[0, 2 * Math.PI, 0]}
        receiveShadow
      >
        <BigTrafficLight />
      </mesh>
    </>
  );
};

export default Carrefour;
