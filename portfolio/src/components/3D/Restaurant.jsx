import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Restaurant({ isNight, ...props }) {
  const { nodes, materials } = useGLTF('/object3d/restaurant_lowpoly.glb')
  return (
    <group {...props} dispose={null}>
      <pointLight
        position={[0, 5, 0]}
        color="white"
        intensity={isNight ? 50 : 0}
        distance={50}
        decay={2}
      />
      <group scale={.2}>
        <group position={[-12.48, 8.538, 12.634]} scale={[0.678, 17.075, 0.678]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Parede_Parede_Meio_0.geometry}
            material={materials.Parede_Meio}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Parede_Parede_Alto_0.geometry}
            material={materials.Parede_Alto}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Parede_Parede_Baixo_0.geometry}
            material={materials.Parede_Baixo}
          />
        </group>
        <group position={[8.55, 2.529, 2.15]} scale={[2.066, 0.213, 1.873]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <group position={[-8.113, 6.669, 5.783]} scale={[2.109, 1.403, 0.172]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Monitor_Pastico_Preto_0.geometry}
            material={materials.Pastico_Preto}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Monitor_M_Tela_0.geometry}
            material={materials.M_Tela}
          />
        </group>
        <group
          position={[-4.522, 5.122, 6.181]}
          rotation={[0, 0.475, 0]}
          scale={[0.36, 0.109, 0.653]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maquininha_de_Cartao_M_Maquininha_0.geometry}
            material={materials.M_Maquininha}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maquininha_de_Cartao_M_Tela_0.geometry}
            material={materials.M_Tela}
          />
        </group>
        <group
          position={[-3.619, 5.122, 6.181]}
          rotation={[0, 0.475, 0]}
          scale={[0.36, 0.109, 0.653]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maquininha_de_Cartao1_M_Maquininha2_0.geometry}
            material={materials.M_Maquininha2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maquininha_de_Cartao1_M_Tela_0.geometry}
            material={materials.M_Tela}
          />
        </group>
        <group
          position={[-2.681, 5.122, 6.181]}
          rotation={[0, 0.475, 0]}
          scale={[0.36, 0.109, 0.653]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maquininha_de_Cartao2_M_Maquininha3_0.geometry}
            material={materials.M_Maquininha3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maquininha_de_Cartao2_M_Tela_0.geometry}
            material={materials.M_Tela}
          />
        </group>
        <group position={[-8.312, 3.362, -9.713]} scale={[1.098, 0.191, 1.098]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo_M_Banquinho_0.geometry}
            material={materials.M_Banquinho}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
        </group>
        <group
          position={[8.55, 2.529, 8.348]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[2.066, 0.213, 1.873]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira2_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira2_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira2_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <group
          position={[9.579, 2.529, -3.525]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[2.066, 0.213, 1.873]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira3_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira3_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira3_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <group position={[9.579, 2.529, -9.723]} scale={[2.066, 0.213, 1.873]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira4_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira4_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira4_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <group position={[1.228, 2.529, -4.963]} scale={[2.066, 0.213, 1.873]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira5_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira5_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira5_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <group
          position={[1.228, 2.529, 1.235]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[2.066, 0.213, 1.873]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira6_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira6_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cadeira6_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <group position={[5.341, 9.578, 11.903]} scale={[3.418, 4.27, 0.185]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Quadro1_Quadro_0.geometry}
            material={materials.Quadro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Quadro1_M_Quadro_0.geometry}
            material={materials.M_Quadro}
          />
        </group>
        <group position={[-8.312, 3.362, -5.872]} scale={[1.098, 0.191, 1.098]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo1_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo1_M_Banquinho_0.geometry}
            material={materials.M_Banquinho}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo1_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
        </group>
        <group position={[-8.312, 3.362, -1.601]} scale={[1.098, 0.191, 1.098]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo2_M_Madeira_0.geometry}
            material={materials.M_Madeira}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo2_M_Banquinho_0.geometry}
            material={materials.M_Banquinho}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BancoNovo2_Acolchoado_cadeira_0.geometry}
            material={materials.Acolchoado_cadeira}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso1_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso2_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso3_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso4_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso5_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso6_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso7_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-10.336, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcao_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[-6.857, 4.841, 6.655]}
          scale={[9.811, 0.455, 3.288]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bancada_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[-10.759, 4.841, -5.668]}
          scale={[3.056, 0.455, 11.948]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesa_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[9.625, 4.341, -6.233]}
          scale={[3.234, 0.17, 3.234]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pe_da_Mesa_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[1.849, 0, -0.776]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesa2_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[8.608, 4.341, 5.067]}
          scale={[3.234, 0.17, 3.234]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pe_da_Mesa1_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[0.832, 0, 10.65]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pe_da_Mesa2_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[-6.408, 0, 3.228]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesa1_M_Madeira_0.geometry}
          material={materials.M_Madeira}
          position={[1.252, 4.341, -2.179]}
          scale={[3.234, 0.17, 3.234]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mousepad_M_Mousepad_0.geometry}
          material={materials.M_Mousepad}
          position={[-6.437, 5.083, 6.712]}
          scale={[1.251, 0.028, 1.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mouse_Pastico_Preto_0.geometry}
          material={materials.Pastico_Preto}
          position={[-6.514, 5.191, 6.755]}
          scale={[0.265, 0.161, 0.395]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Caixa_Registradora_Pastico_Preto_0.geometry}
          material={materials.Pastico_Preto}
          position={[-10.472, 5.33, 6.951]}
          rotation={[0, 0.238, 0]}
          scale={[1.382, 0.463, 1.707]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Toalha_de_Mesa_M_Maquininha2_0.geometry}
          material={materials.M_Maquininha2}
          position={[1.252, 4.544, -2.179]}
          scale={[5.519, 1, 5.519]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Toalha_de_Mesa2_M_Maquininha2_0.geometry}
          material={materials.M_Maquininha2}
          position={[8.608, 4.544, 5.067]}
          scale={[5.519, 1, 5.519]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Toalha_de_Mesa3_M_Maquininha2_0.geometry}
          material={materials.M_Maquininha2}
          position={[9.625, 4.544, -6.233]}
          scale={[5.519, 1, 5.519]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vidro_M_Vidro_0.geometry}
          material={materials.M_Vidro}
          position={[-12.475, 10.062, -5.698]}
          scale={[0.118, 3.787, 10.771]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso8_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso9_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso10_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso11_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso12_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso13_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso14_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso15_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-7.197, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso16_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso17_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso18_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso19_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso20_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso21_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso22_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso23_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-4.057, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso24_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso25_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso26_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso27_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso28_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso29_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso30_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso31_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[-0.918, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso32_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso33_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso34_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso35_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso36_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso37_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso38_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso39_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[2.222, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso40_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso41_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso42_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso43_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso44_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso45_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso46_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso47_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[5.362, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso48_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso49_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso50_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso51_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso52_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso53_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso54_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso55_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[8.501, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso56_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, 10.479]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso57_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, -1.531]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso58_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, -10.538]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso59_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, -7.536]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso60_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, 4.474]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso61_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, -4.533]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso62_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, 7.477]}
          scale={[3, 0.35, 3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Piso63_M_Piso_0.geometry}
          material={materials.M_Piso}
          position={[11.641, 0.137, 1.472]}
          scale={[3, 0.35, 3]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/object3d/restaurant_lowpoly.glb')
