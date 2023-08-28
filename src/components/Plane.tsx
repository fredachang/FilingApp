import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

export const PlaneButton = () => {
  const [active, setActive] = useState(false);

  useFrame((state) => {
    const vec = new THREE.Vector3(0, 2, active ? 2.5 : 4.5);
    state.camera.position.lerp(vec, 0.03);
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <mesh onClick={() => setActive(!active)}>
      <planeGeometry args={[0.5, 1, 3]} />
      <meshStandardMaterial color="hotpink" transparent />
    </mesh>
  );
};
