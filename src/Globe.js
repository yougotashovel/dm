import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import anime from "animejs";

const Globe = () => {
  const ref = useRef(0);

  const draw = (rotateX = 20, rotateY = -80) => {
    const width = 500;
    const height = width;

    const projection = d3.geo
      .orthographic()
      .translate([width / 2, height / 2])
      .scale(250)
      .clipAngle(90)
      .precision(0.1)
      .rotate([rotateX, rotateY]);

    const path = d3.geo.path().projection(projection);

    const svg = d3
      .select(ref.current)
      .select(".globe")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0,0,${width}px,${height}px`);
    // .attr("viewBox", "0, 0, " + width + ", " + height);

    const features = svg.append("g");

    features
      .append("path")
      .datum({ type: "Sphere" })
      .attr("class", "background")
      .attr("d", path);

    const graticule = d3.geo.graticule();

    features
      .append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path);
  };

  useEffect(() => {
    let angle = 0;
    // setInterval(() => {
    //   // draw(angle + 1 > 360 ? angle + 1 : 0);
    // }, 100);
    draw(0, -30);

    // return () => clearInterval(interval);
  }, []);

  return (
    <GlobeWrapper>
      <div class="globe-wrapper" ref={ref}>
        <div class="globe" />
        <div class="info" />
        poop
      </div>
    </GlobeWrapper>
  );
};

const GlobeWrapper = styled.div({
  position: "fixed",
  width: "500px",
  height: "500px",
  overflow: "hidden",
  // display: "flex",
  // alignItems: "center",
  top: 0,
  left: 0,
  zIndex: 20,
  svg: { width: "100%" },
  path: { fill: "none", stroke: "black" },
  ".background": {
    fill: "rgba(200,212,220,0)",
    strokeWidth: ".8px",
    stroke: "black"
  },
  ".graticule": { stroke: "rgba(0,0,0, .4)", strokeWidth: ".5px" },
  ".country": { cursor: "pointer" },
  ".country .land, .state .land": {
    fill: "white",
    stroke: "rgba(0,0,0, .2)",
    strokeWidth: ".3px"
  },
  ".state .overlay": { fill: "blue", fillOpacity: 0 },
  ".country .overlay": { fill: "orange", fillOpacity: 0 }
});

export default Globe;
