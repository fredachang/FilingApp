import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

// function Rig({ children }: { children: ReactNode }) {
//   const ref = useRef<THREE.Group>(null);

//   useFrame((state) => {
//     if (ref.current) {
//       ref.current.rotation.y = THREE.MathUtils.lerp(
//         ref.current.rotation.y,
//         (state.mouse.x * Math.PI) / 10,
//         0.03
//       );

//       ref.current.rotation.x = THREE.MathUtils.lerp(
//         ref.current.rotation.x,
//         (state.mouse.y * Math.PI) / 10,
//         0.03
//       );
//     }
//   });

//   return <group ref={ref}>{children}</group>;
// }

const loaderStyles = {
  container: {
    backgroundColor: "#fafaf9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "transparent",
    borderRadius: "10%",
  },
  bar: {
    backgroundColor: "black",
    height: "5px",
  },
  data: {
    color: "black",
    fontSize: "20px",
    fontFamily: "Sohne-Regular",
  },
};

const lightColours = {
  mint: "rgb(194,255,188)",
  lightBlue: "rgb(171, 203, 255)",
};

export const Placeholder = () => {
  return (
    <>
      <div className="bg-stone-50 fixed top-0 bottom-0 w-screen h-screen z-50">
        <Canvas>
          <Suspense fallback={null}>
            <Environment files="/clear_land.hdr" background blur={0.01} />
            <axesHelper args={[5]} />

            <hemisphereLight
              color={lightColours.lightBlue}
              groundColor={lightColours.mint}
              intensity={0.6}
              position={[0, 5, 3]}
            />

            <mesh
              visible
              userData={{ hello: "world" }}
              position={[1, 2, 3]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color="hotpink" transparent />
            </mesh>

            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
        <Loader
          containerStyles={loaderStyles.container}
          innerStyles={loaderStyles.inner}
          barStyles={loaderStyles.bar}
          dataStyles={loaderStyles.data}
          dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
        />
      </div>
    </>
  );
};