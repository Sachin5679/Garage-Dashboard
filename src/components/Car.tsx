"use client";
import {
  Bounds,
  Center,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";

const CarModel = () => {
  const gltf = useGLTF("/maruti_800_ac.glb");

  useEffect(() => {
    console.log("Loaded model:", gltf);
  }, [gltf]);

  return (
    <Center>
      <primitive object={gltf.scene} scale={0.5} rotation={[0, Math.PI, 0]} />
    </Center>
  );
};

export function CarViewer() {
  return (
    <div className="h-56 w-full rounded-t-md overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} />
          <Environment preset="sunset" />
          <Bounds fit clip observe margin={0.5}>
            <CarModel />
          </Bounds>
          <OrbitControls autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
