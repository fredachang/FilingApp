import * as THREE from "three";
import { Object3DNode, useFrame, useLoader } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import GTPressura from "../assets/GTPressura.json";
import { useEffect, useRef, useState } from "react";

extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

const fontColour = new THREE.Color("rgb(0, 0, 0)");

interface Props {
  position: any;
  rotation: any;
}

export function File(props: Props) {
  const ref = useRef<any | null>(null);
  const [active, setActive] = useState(false);

  console.log(active);

  const { position, rotation } = props;
  const font = new FontLoader().parse(GTPressura);
  const colorMap = useLoader(THREE.TextureLoader, "FileStrokeTexture.png");

  const fontSize = 0.06;

  const [spring, setSpring] = useSpring(() => ({
    position: position,
    rotation: rotation,
    config: { mass: 0.5, friction: 50, tension: 200 },
  }));

  useEffect(() => {
    if (active) {
      setSpring({ position: [0, 1.7, 1.8], rotation: [0, 0, 0] });
    } else {
      setSpring({ position: position, rotation: rotation });
    }
  }, [active, position, rotation, spring]);

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
  };

  useFrame((state) => {
    const vec = new THREE.Vector3(0, active ? 0 : 2, active ? 0.4 : 4.5);
    state.camera.position.lerp(vec, 0.03);
    state.camera.lookAt(ref.current.position);
  });

  return (
    <animated.group
      {...props}
      dispose={null}
      rotation={spring.rotation}
      position={spring.position}
      onClick={handleClick}
      ref={ref}
    >
      <mesh position={[-0.2, 0.55, 0.01]}>
        <textGeometry
          args={["Weather Report", { font, size: fontSize, height: 0 }]}
        />
        <meshBasicMaterial attach="material" color={fontColour} />
      </mesh>
      <mesh>
        <planeGeometry args={[2, 3, 16]} />

        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={colorMap}
          toneMapped={false}
          transparent={true}
        />
      </mesh>
    </animated.group>
  );
}
