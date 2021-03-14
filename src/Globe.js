import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Globe = ({ color = "orange" }) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={mesh}
      visible
      scale={[1, 1.1, 1]}
      // onClick={(e) => setActive(!active)}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e) => setHover(false)}
    >
      <sphereBufferGeometry args={[1, 10, 15]} />
      <meshStandardMaterial color={color} />
    </mesh>
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
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Globe {...props} />
    </Canvas>
  </CanvasWrapper>
);
