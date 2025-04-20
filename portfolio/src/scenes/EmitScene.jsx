import React from 'react'
import { AllEmit } from '../components/3D/Emit'



const EmitScene = ({isNight}) => {
  return (
    <>
    <group position={[0, 0, -50]} rotation={[0, 0, 0]} scale={1}>
      <AllEmit isNight={isNight}/>
    </group>
    </>
  )
}

export default EmitScene