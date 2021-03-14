import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useUpdate } from "react-three-fiber";
import * as THREE from "three";

const Lemon = ({ color = "orange" }) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y -= 0.01;
  });

  return (
    <mesh ref={mesh} visible scale={[1, 1.1, 1]}>
      <sphereBufferGeometry args={[1, 10, 15]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// const Edges = (props) => {
//   if (props.geometry.current !== undefined) {
//     return (
//       <lineSegments>
//         <edgesGeometry attach="geometry" args={props.geometry.current} />
//         <lineBasicMaterial attach="material" />
//       </lineSegments>
//     );
//   }
//   return null;
// };

const Globe = ({ color = "orange" }) => {
  const mesh = useRef();
  const seg = useUpdate(
    (s) => (s.geometry = new THREE.EdgesGeometry(mesh.current.geometry)),
    []
  );

  useFrame(() => {
    // mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y += 0.001;
    mesh.current.rotation.x += 0.0001;
    // mesh.current.rotation.x = 0.6;
  });

  const size = 10;

  return (
    <>
      <mesh
        ref={mesh}
        visible
        scale={[size, size, size]}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}
      >
        <sphereBufferGeometry args={[1, 15, 15]} />
        <meshStandardMaterial color={color} visible={false} />
        <lineSegments ref={seg}>
          <meshBasicMaterial color="rgba(0,0,0,0.2)" opacity="0.05" />
        </lineSegments>
      </mesh>
    </>
  );
};

const CanvasWrapper = styled.div({
  position: "fixed",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  top: 0,
  left: 0,
  zIndex: 0
});

export default (props) => (
  <CanvasWrapper>
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Globe {...props} />
      <Lemon />
    </Canvas>
  </CanvasWrapper>
);
