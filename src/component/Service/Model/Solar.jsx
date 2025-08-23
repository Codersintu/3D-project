import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Scene from "../../../../public/Scene"
import { Environment, OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
function Solar() {
  return (
    <>
    <Canvas
      className="w-full h-full object-contain"
      camera={{ position: [0, 0, 7], fov: 50 }}
    >
      <Suspense fallback={null}>
        <Stage environment="night" intensity={0.}>
          <Scene />
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
    </>
  )
}

export default Solar