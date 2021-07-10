import React from "react";
import "./Thanks.css";

const Thanks = () => {
  return (
    <div>
      <h2>
        Special thanks to these individuals who have been supporting me
        throughout my journey:
      </h2>
      <hr />
      <ul style={{textAlign: "left", margin: "5%", fontSize: "18pt"}}>
        <li>
          <span className="thankName">Vivian Wu</span> for encouraging me to enter the field in the
          first place.
        </li>
        <li>
          <span className="thankName">Jason Choi</span> for giving me the mindset to pursue what I
          want to do.
        </li>
        <li>
          <span className="thankName">Choonggao Lee</span> for being my main source for programming
          and life advice as well as my main inspiration.
        </li>
        <li>
          <span className="thankName">My mother and sister</span> for supporting me no matter what I
          do.
        </li>
      </ul>
    </div>
  );
};

export default Thanks;
