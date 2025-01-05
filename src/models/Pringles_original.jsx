import React, { useState,useEffect, useRef } from 'react'
import { PivotControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";

const Pringles_original = (props) => {
  const [canRotation, setCanRotation] = useState([0, 0, 0])
  
  const { nodes, materials } = useGLTF('/Pringles/assets/pringles_can__hd_textures__free_download.glb')
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
    <PivotControls matrix={rotationMatrix} visible = {false}>
    <group {...props} dispose={null} ref = {Can} >
      <group scale={0.18} position={[0, 0, 0]} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Pringels_0.geometry}
          material={materials.Pringels}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Transparent_0.geometry}
          material={materials.Transparent}
          ref = {Cap}
        />
      </group>
    </group>
    </PivotControls>
  )
}

useGLTF.preload('/Pringles/assets/pringles_can__hd_textures__free_download.glb')


export default Pringles_original