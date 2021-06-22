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
      <a href="https://github.com/oscarlaaaa">
        <Github className="menuicon" />
      </a>
      <a href="https://www.linkedin.com/in/oscar-la-bc/">
        <Linkedin className="menuicon" />
      </a>
      <a href={resumefile}>
        <Resume className="menuicon" />
      </a>
      <a href="https://devpost.com/oscarla5747?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
        <Devpost className="menuicon" />
      </a>
    </div>
  );
};

export default SectionMenu;
