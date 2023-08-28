import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { File } from "./File";
import { PlaneButton } from "./Plane";

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

const initialPositions = [
  [0, 2, 0],
  [0, 1.9, 0],
  [0, 1.8, 0],
  [0, 1.7, 0],
  [0, 1.6, 0],
];

const initialRotation = [-Math.PI / 2, 0, -Math.PI / 4];

export const Placeholder = () => {
  return (
    <>
      <div className="bg-stone-50 fixed top-0 bottom-0 w-screen h-screen z-50">
        <Canvas
          camera={{
            fov: 50,
            position: [0, 2, 4.5],
          }}
        >
          <Suspense fallback={null}>
            <Environment files="/clear_land.hdr" background blur={0.01} />
            <axesHelper args={[5]} />

            {initialPositions.map((initialPosition, index) => (
              <File
                key={index}
                position={initialPosition}
                rotation={initialRotation}
              />
            ))}

            <PlaneButton />

            <OrbitControls enableZoom={true} />
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
