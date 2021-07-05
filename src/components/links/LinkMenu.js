import React from "react";
import "./LinkMenu.css";

import { ReactComponent as Github } from "../../assets/img/github.svg";
import { ReactComponent as Linkedin } from "../../assets/img/linkedin.svg";
import { ReactComponent as Resume } from "../../assets/img/resume.svg";
import { ReactComponent as Devpost } from "../../assets/img/trophy-fill.svg";

import resumefile from "../../assets/Oscar_La_Resume3.pdf";

const SectionMenu = () => {
  return (
    <div className="menu">
      <a className="menubutton" href="https://github.com/oscarlaaaa" title="Github">
        <Github className="menuicon" />
        <p style={{textDecoration: "none"}} className="icontitle" >Github</p>
      </a>
      <a className="menubutton" href="https://www.linkedin.com/in/oscar-la-bc/" title="Linkedin">
        <Linkedin className="menuicon" />
        <p style={{textDecoration: "none"}} className="icontitle" >Linkedin</p>
      </a>
      <a className="menubutton" href="https://drive.google.com/file/d/1ppsJMrUkFfVhpcWPBmhR-0a_jbhxNrCJ/view?usp=sharing" title="Resume">
        <Resume className="menuicon" />
        <p style={{textDecoration: "none"}} className="icontitle" >Resume</p>
      </a>
      <a className="menubutton" href="https://devpost.com/oscarla5747?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" title="Devpost">
        <Devpost className="menuicon" />
        <p style={{textDecoration: "none"}} className="icontitle" >Devpost</p>
      </a>
    </div>
  );
};

export default SectionMenu;
