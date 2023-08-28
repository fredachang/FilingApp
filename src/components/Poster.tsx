/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 GluedPosterv2.gltf --transform --types
*/

import * as THREE from "three";
import { Object3DNode, useLoader } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import GTPressura from "../assets/GTPressura.json";
import { useState } from "react";

extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

const fontColour = new THREE.Color("rgb(0, 0, 0)");

interface Props {
  position: any;
}

export function GluedPoster(props: Props) {
  const [active, setActive] = useState(false);

  const { position } = props;
  const font = new FontLoader().parse(GTPressura);
  const colorMap = useLoader(THREE.TextureLoader, "FileStrokeTexture.png");

  const rotation90 = Math.PI / 2;
  const fontSize = 0.06;

  const { scale } = useSpring({ scale: active ? 1.5 : 1 });

  return (
    <animated.group
      {...props}
      dispose={null}
      scale={scale}
      rotation={[-rotation90, 0, 0]}
      position={position}
      onClick={() => setActive(!active)}
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
          map={colorMap}
          toneMapped={false}
          transparent={true}
        />
      </mesh>
    </animated.group>
  );
}
