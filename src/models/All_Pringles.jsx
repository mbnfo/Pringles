import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const All_together = (props) => {
  const groupRefs = {
    bbq: useRef(),
    extraHot: useRef(),
    frenchOnion: useRef(),
    paprika: useRef(),
    original: useRef(),
  };

  // Animate the groups when the component mounts
  useEffect(() => {
    // BBQ can tilts back and forth
    gsap.to(groupRefs.bbq.current.rotation, {
      z: Math.PI / 8,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });

    // Extra Hot can bobs up and down
    gsap.to(groupRefs.extraHot.current.position, {
      y: '+=0.2',
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    // French Onion can rotates in place
    gsap.to(groupRefs.frenchOnion.current.rotation, {
      y: Math.PI * 2,
      duration: 3,
      repeat: -1,
      ease: 'linear',
    });

    // Paprika can wobbles slightly
    gsap.to(groupRefs.paprika.current.rotation, {
      x: Math.PI / 16,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });

    // Original can spins slowly while slightly bobbing
    gsap.to(groupRefs.original.current.rotation, {
      y: Math.PI * 2,
      duration: 5,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to(groupRefs.original.current.position, {
      y: '+=0.1',
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Additional per-frame effects
    if (groupRefs.extraHot.current) {
      groupRefs.extraHot.current.rotation.z = Math.sin(t * 2) * 0.1; // Subtle wobble
    }
  });

  const { nodes, materials } = useGLTF('/assets/AllCans.glb');

  return (
    <group {...props} dispose={null}>
      <group scale={0.15} position={[0, -1, 0]}>
        <group ref={groupRefs.bbq} position={[-20, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBQ_Pringels_BBQ_0.geometry}
            material={materials.Pringels_BBQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BBQ_Transparent_0.geometry}
            material={materials.Transparent}
          />
        </group>
        <group ref={groupRefs.extraHot} position={[-10, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extra_Hot_Pringels_Extra_Hot_0.geometry}
            material={materials.Pringels_Extra_Hot}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extra_Hot_Transparent_0.geometry}
            material={materials.Transparent}
          />
        </group>
        <group ref={groupRefs.frenchOnion} position={[10, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.French_Onion_Pringels_French_Onion_0.geometry}
            material={materials.Pringels_French_Onion}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.French_Onion_Transparent_0.geometry}
            material={materials.Transparent}
          />
        </group>
        <group ref={groupRefs.paprika} position={[20, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Paprika_Pringels_Paprika_0.geometry}
            material={materials.Pringels_Paprika}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Paprika_Transparent_0.geometry}
            material={materials.Transparent}
          />
        </group>
        <group ref={groupRefs.original}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Original_Pringels_0.geometry}
            material={materials.Pringels}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Original_Transparent001_0.geometry}
            material={materials['Transparent.001']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/assets/AllCans.glb');
export default All_together;
