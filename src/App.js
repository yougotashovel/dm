import "normalize.css";
import "./styles.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const randomFromArray = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

const useArray = (array, speed = 200) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(index < array.length ? index + 1 : 0);
    }, getRandomInt(speed * 0.5, speed * 2));
  }, [index]);

  return array[index];
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  const fontFamily = useArray(
    ["Helvetica", "Arial", "Wingdings", "Times", "Courier New", "Comic Sans"],
    200
  );
  const fontSize = useArray(
    ["3em", "3em", "3em", "3em", "3em", "1em", "2em", "3.5em", "6em", "10em"],
    800
  );
  const background = useArray(
    // ["red", "green", "blue", "orange", "black", "yellow"],
    // ["#E4FF1A", "#FFB800", "#06D6A0", "#F42C04", "#00A1E4", "#000000" ],
    ["#f9c80e", "#f86624", "#ea3546", "#662e9b", "#43bccd", "#065143"],
    2000
  );

  const textTransform = useArray(
    ["lowercase", "lowercase", "uppercase", "capitalize", "default"],
    100
  );

  const transform = useArray(
    [
      "none",
      "perspective(75em) rotateX(18deg)",
      "perspective(750em) rotateX(-18deg)",
      "rotate3d(0,0,0,0deg) rotate(0deg)",
      "rotate3d(0,0,0,0deg) rotate(-5deg)",
      "perspective(-75em) rotateX(180deg)",
      "perspective(-75em) rotateX(-180deg)",
      "perspective(1000px) rotateX(4deg) rotateY(-16deg) rotateZ(4deg)",
      "perspective(600px) rotateX(20deg) rotateY(-16deg) rotateZ(-4deg)",
      "perspective(-1000px) rotateX(-10deg) rotateY(50deg) rotateZ(6deg)"
    ],
    500
  );

  const colors = useArray([
    "black",
    "white",
    "rgba(255,255,255,0.25)",
    "rgba(0,0,0,0.25)"
  ]);
  const color =
    background === "black"
      ? "white"
      : background === "white"
      ? "black"
      : colors;

  const colorSimple = {
    black: "black",
    white: "white",
    "rgba(255,255,255,0.25)": "white",
    "rgba(0,0,0,0.25)": "black"
  };

  return (
    <Wrapper style={{ background }}>
      {/* <header style={{ background: colorSimple[color] }} /> */}
      {/* <footer style={{ background: colorSimple[color] }} /> */}
      <div>
        <h1 style={{ fontFamily, textTransform, fontSize, color }}>
          <span className="transform" style={{ transform }}>
            {"Dan McHugh".split("").map((letter, i) => {
              const top = randomFromArray([
                ...Array(20).fill("0"),
                "-0.05em",
                "0.05em",
                "-0.1em",
                "0.1em",
                "1em",
                "-1em"
              ]);
              return (
                <span key={i} style={{ position: "relative", top }}>
                  {letter}
                </span>
              );
            })}
          </span>
        </h1>
        <Button href="mailto:hi@danmchugh.co.uk">
          {"talk to me".split("").map((letter, i) => (
            <span key={i} style={{}}>
              {letter}
            </span>
          ))}
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  fontFamily: "sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  transition: "100ms ease all",
  textAlign: "center",
  overflow: "hidden",

  "> div": {
    position: "relative",
    height: "300px",
    width: "100%",
    maxWidth: "800px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  ".transform": {
    display: "inline-block",
    transition: "10ms ease all",
    transformOrigin: "center"
  },

  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "10%",
    background: "black"
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "10%",
    background: "black"
  },

  h1: {
    marginTop: "-40px"
  }
});

const Button = styled.a({
  display: "block",
  margin: "0 auto",
  width: "100%",
  position: "absolute",
  bottom: "0em",
  textAlign: "center",
  textTransform: "uppercase",
  textDecoration: "none",

  transition: "100ms ease all",
  transform: "perspective(1000px) rotateX(-4deg) rotateY(0deg) rotateZ(0deg)",
  "&:hover, &:focus": {
    transform: "perspective(1000px) rotateX(4deg) rotateY(-16deg) rotateZ(4deg)"
  },

  span: {
    transition: "10ms bounce border",
    border: "1px solid transparent",
    padding: "1em 0.25em",
    borderRadius: "0px",
    // background: "black",
    // color: "white",
    background: "transparent",
    color: "black",
    letterSpacing: "3px",

    "&:first-of-type": {
      borderRadius: "60px 0 0 60px",
      padding: "1em 0.25em 1em 2em"
    },

    "&:last-of-type": {
      borderRadius: "0 60px 60px 0",
      padding: "1em 2em 1em 0.25em"
    },

    "&:hover, &:focus": {
      background: "transparent",
      borderColor: "white",
      color: "white"
    }
  }
});
