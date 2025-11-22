import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function AnimatedSphere2() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8} position={[3, 1, -2]}>
      <MeshDistortMaterial
        color="#22d3ee"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  );
}

function AnimatedSphere3() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.18;
      meshRef.current.rotation.z = -state.clock.getElapsedTime() * 0.22;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5} position={[-2.5, -1, -1]}>
      <MeshDistortMaterial
        color="#a3e635"
        attach="material"
        distort={0.3}
        speed={1.8}
        roughness={0.25}
        metalness={0.75}
      />
    </Sphere>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#22d3ee" />
        <AnimatedSphere />
        <AnimatedSphere2 />
        <AnimatedSphere3 />
      </Canvas>
    </div>
  );
};
