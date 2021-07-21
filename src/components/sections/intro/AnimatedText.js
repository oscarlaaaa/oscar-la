import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import './AnimatedText.css';

const AnimatedText = () => {
  const [reset, setReset] = useState(1);

  useEffect(() => {
    setReset(1);
  }, [reset]);

  return (
    <div id="descriptionsect">
      <h3 className="descriptors" style={{marginRight: "10px"}}>
        bcit cst student;{" "}
      </h3>
      <div id="textbox" >
        {reset ? (
          <Typist
            avgTypingDelay={50}
            onTypingDone={() => {
              setReset(0);
            }}
            style={{ display: "inline-block", margin: "0" }}
          >
            <h3 style={{ display: "inline-block" }}>
              aspiring software developer
            </h3>
            <Typist.Backspace count={30} delay={5000} />
            <h3 className="descriptors">creative problem-solver</h3>
            <Typist.Backspace count={30} delay={5000} />
            <h3 className="descriptors">avid badminton athlete</h3>
            <Typist.Backspace count={30} delay={5000} />
            <h3 className="descriptors">boardgame enthusiast</h3>
            <Typist.Backspace count={30} delay={5000} />
            <h3 className="descriptors">PROGRAMMING LEGEND</h3>
            <Typist.Backspace count={30} delay={0} />
          </Typist>
        ) : (
          <div style={{ height: "100%" }}></div>
        )}
      </div>
    </div>
  );
};

export default AnimatedText;
