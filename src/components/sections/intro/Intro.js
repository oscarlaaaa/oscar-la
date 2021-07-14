import React from "react";
import "react-typist/dist/Typist.css";
import AnimatedText from "./AnimatedText";
import './Intro.css';

const Intro = () => {
  return (
    <div>
      <div id="introsect" style={{marginTop: "10%"}}>
        <h1 id="hometitle">hi, i'm oscar</h1>{" "}
        <AnimatedText />
      </div>
    </div>
  );
};

export default Intro;
