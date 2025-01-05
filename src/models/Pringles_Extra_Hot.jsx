import React, { useState,useEffect, useRef } from 'react'
import { PivotControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";


const Pringles_Extra_Hot = (props) => {
  const { nodes, materials } = useGLTF('/assets/Pringles_Extra_Hot.glb')

  const Can = useRef()
  const Cap = useRef()
  const rotationMatrix = new THREE.Matrix4();
  rotationMatrix.makeRotationZ(Math.PI / 6);

  useFrame(()=>{
    if(Can.current){
     Can.current.rotation.y += 0.02
      //setCanRotation([Can.current.rotation.x, Can.current.rotation.y, Can.current.rotation.z])
      if(props.transition){
        const startAngle = Math.PI / 6; 
        const endAngle = -Math.PI / 3; 
        const interpolatedAngle = (1 - props.transit) * startAngle + props.transit * endAngle;

        let Value = props.transit * 25
        Cap.current.position.y = Value

    
      rotationMatrix.makeRotationZ(interpolatedAngle);
      }
    }
  })

 useGSAP(()=>{
  gsap.to(
    Can.current.position, {
      y: Can.current.position.y + 0.5,
      duration: 3,
      repeat: -1,
      yoyoEase: true,
    }
  )

 })

  return (
    <PivotControls  matrix={rotationMatrix} visible = {false}>
    <group {...props} dispose={null}>
      <group scale={0.2} ref = {Can}>
        <group position={[-10, -13, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extra_Hot_Pringels_Extra_Hot_0.geometry}
            material={materials.Pringels_Extra_Hot}
            position={[9.998, 0, 0]}
          />
          <mesh ref={Cap}
            castShadow
            receiveShadow
            geometry={nodes.Extra_Hot_Transparent_0.geometry}
            material={materials.Transparent}
            position={[9.998, 0, 0]}
          />
        </group>
      </group>
    </group>
    </PivotControls>
  )
}

useGLTF.preload('/assets/Pringles_Extra_Hot.glb')
export default Pringles_Extra_Hot