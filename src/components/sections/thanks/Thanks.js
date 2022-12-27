import React from "react";
import "./Thanks.css";

const Thanks = () => {
  return (
    <div
      style={{
        padding: "3%",
      }}
    >
      <h1>
        Special thanks to these individuals who have been supporting me
        throughout my journey:
      </h1>
      <hr />
      <ul style={{ textAlign: "left", margin: "5%", fontSize: "18pt" }}>
        <li>
          <span className="thankName">Vivian Wu</span> for encouraging me to
          enter the field in the first place.
        </li>
        <li>
          <span className="thankName">Jason Choi</span> for giving me the
          mindset to pursue what I want to do.
        </li>
        <li>
          <span className="thankName">Choonggao Lee</span> for being my main
          source for programming and life advice as well as my main inspiration.
        </li>
        <li>
          <span className="thankName">Alex Chu</span> for letting me vent and
          rant about any issues I end up facing throughout my career.
        </li>
        <li>
          <span className="thankName">Tien Tran</span> for being my hypeman and
          always showing an interest in the things I'm studying and doing.
        </li>
        <li>
          <span className="thankName">Alejandro Javier Yu</span> for being a modern hero
          and for always bringing good snax to hangouts
        </li>
        <li>
          <span className="thankName">Becky Pumpkin</span> for tearing me a whole new
          patoot during practice technical interviews just for fun
        </li>
        <li>
          <span className="thankName">Cpl. Lionheart</span> for reasons so obvious
          they go without saying
        </li>
        <li>
          <span className="thankName">My mother and sister</span> for supporting
          me no matter what I do.
        </li>
      </ul>
    </div>
  );
};

export default Thanks;
