import React, { useEffect, useRef } from 'react'
import { PivotControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useFrame } from '@react-three/fiber'

const Prawn_Pringles = (props) => {
  const { nodes, materials } = useGLTF('/assets/Pringles_Prawn_Cocktail.glb')
  const Can = useRef()
  useGSAP (()=>{
    gsap.to(
      Can.current.position, {
        y: Can.current.position.y + 0.5,
        duration: 2,
        repeat: -1,
        yoyoEase: true,
      }
    )
  })


  return (
    <group {...props} dispose={null} ref={Can}>
      <group scale={0.5}>
        <group position={[100, -0.66, -8.253]} rotation={[-Math.PI / 2, -0.5, -0.5]} scale={120} >
          <group position={[0, 0, 1.513]} scale={[0.469, 0.469, 1.722]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cover_log009_Material_0.geometry}
              material={materials['Material.001']}
              position={[-3.261, -0.092, 0.689]}
              rotation={[0, 0, 0.902]}
            />
          </group>
          <group position={[0, 0, 1.535]} scale={[0.462, 0.462, 1.722]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cover010_cover_0.geometry}
              material={materials.cover}
              position={[-3.311, -0.094, 0.689]}
              rotation={[0, 0, 0.902]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.purple_Blue_0.geometry}
            material={materials.Blue}
            position={[-1.531, -0.043, 1.186]}
            rotation={[0, 0, 0.902]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/Pringles_Prawn_Cocktail.glb')
export default Prawn_Pringles