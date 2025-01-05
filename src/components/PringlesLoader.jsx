import React from 'react'
import Particles from './PrimaryParticles'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

const PringlesLoader = ({children}) => {
  return (

    <div id = "can">
        <Canvas id = 'canvas'>
          <ambientLight color={'#FFFFFF'} intensity={5}/>
          <directionalLight color = {'#F99721'} intensity = '1' />
          <PerspectiveCamera/>
          {children}
          <Particles primaryCanvas={true}/>
        </Canvas>
    </div>
  )
}

export default PringlesLoader