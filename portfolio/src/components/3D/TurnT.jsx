import { StreetLight } from "./StreetLight";
import { StreetT } from "./StreetT";
import { TrafficLight } from "./TrafficLight";


const TurnT = ({isNight}) => {
  return (
    <>
      <StreetT rotation={[0, -Math.PI, 0]} />
      <mesh
        position={[-3.5, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <StreetLight isNight={isNight}/>
      </mesh>
      <mesh>
      <TrafficLight position={[3.5, 0, -3.5]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow/>
      </mesh>
    </>
  );
};

export default TurnT;
