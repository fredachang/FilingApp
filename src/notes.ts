// const [clicked, setClicked] = useState(false);

const vec = new THREE.Vector3();
const cameraPosition = new THREE.Vector3(0, 0, 8);

// useFrame((state) => {
//   if (clicked) {
//     state.camera.lookAt(cameraPosition);
//     state.camera.position.lerp(vec.set(0, 0, 0), 0.01);
//     state.camera.updateProjectionMatrix();
//   }
//   return null;
// });

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

{
  /* 
            <mesh>
              <planeGeometry args={[2, 3, 16]} />
              <meshStandardMaterial
                color="hotpink"
                side={DoubleSide}
                transparent
              />
            </mesh> */
}
