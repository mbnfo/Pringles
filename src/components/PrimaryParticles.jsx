import React, { forwardRef, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {  useTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Particles = ({primaryCanvas}) => {
  const texture = useTexture( "/assets/chip.png");

  const ref = useRef();
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);


  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 8; 
  }

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  useGSAP(() => {
    
    if(primaryCanvas == true){
      gsap.to(ref.current.position, { 
        scrollTrigger: {
          trigger: '#hero',
          start: 'top 1%',
          end: 'bottom 1%',
          scrub: true,
        },
        y: 15,
        duration: 2,
        ease: 'none',
      })}

  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={4}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={1.2}
        transparent
        alphaTest={0.5}
      />
    </points>
  );
}

export default Particles