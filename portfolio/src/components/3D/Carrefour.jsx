import { BigTrafficLight } from "./BigTrafficLight";
import { CrossWalk } from "./CrossWalk";


const Carrefour = ({isNight}) => {
  return (
    <>
      <CrossWalk isNight={isNight}/>
      <mesh
        position={[3.5, 0, -3.5]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <BigTrafficLight isNight={isNight}/>
      </mesh>
      <mesh position={[-3.5, 0, -3.5]} rotation={[0, Math.PI, 0]} receiveShadow>
        <BigTrafficLight isNight={isNight}/>
      </mesh>
      <mesh
        position={[-3.5, 0, 3.5]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <BigTrafficLight isNight={isNight}/>
      </mesh>
      <mesh
        position={[3.5, 0, 3.5]}
        rotation={[0, 2 * Math.PI, 0]}
        receiveShadow
      >
        <BigTrafficLight isNight={isNight}/>
      </mesh>
    </>
  );
};

export default Carrefour;
