
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';

function Sphare() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
  const sphereScale = isMobile ? 1.5 : 2.5;
  return (
     <>
      <Sphere args={[1, 100, 200]} scale={sphereScale}>
        <MeshDistortMaterial
          color="#DB8B9B"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  )
}

export default Sphare