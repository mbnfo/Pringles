import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import All_together from '../models/All_Pringles'
import Particles from './PrimaryParticles'

const Alltogether = () => {
  return (
    <Canvas>
        <ambientLight color={'#FFFFFF'} intensity={5}/>
        <directionalLight color = {'#F99721'} intensity = '1' />
        <PerspectiveCamera/>
        <All_together/>
        <Particles primaryCanvas = {false}/>
    </Canvas>
  )
}

export default Alltogether