import "normalize.css";
import "./styles.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const useArray = (array, speed = 200) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(index <= array.length ? index + 1 : 0);
    }, getRandomInt(speed * 0.5, speed * 2));
  }, [index]);

  return array[index];
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  const font = useArray([
    "Helvetica",
    "Arial",
    "Wingdings",
    "Times",
    "Courier New",
    "Comic Sans"
  ]);
  const bgColor = useArray(
    ["red", "green", "gray", "blue", "orange", "black", "yellow"],
    300
  );

  const textType = useArray([
    "lowercase",
    "uppercase",
    "capitalize",
    "default"
  ]);

  return (
    <Wrapper style={{ background: bgColor }}>
      <div>
        <h1 style={{ fontFamily: font, textTransform: textType }}>
          Dan McHugh
        </h1>
      </div>
      <Button href="mailto:hi@danmchugh.co.uk">Talk • to • me</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  fontFamily: "sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  transition: "100ms ease all",
  textAlign: "center",

  h1: {
    padding: 0,
    margin: 0
  }
});

const Button = styled.a({
  display: "block",
  position: "fixed",
  bottom: "10em",
  textAlign: "center",
  textTransform: "uppercase",
  border: "1px solid black",
  padding: "1.5em 2em",
  borderRadius: "50px",
  textDecoration: "none",
  color: "black",
  background: "black",
  color: "white",
  letterSpacing: "3px",
  transition: "10ms bounce all",
  transform: "scale(1)",

  "&:hover, &:focus": {
    background: "transparent",
    borderColor: "white",
    // padding: '2em 4em',
    transform: "scale(2)"
  }
});
