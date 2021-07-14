import React, { useState, useEffect } from "react";
import SkillItem from "./SkillItem";
import Proficiencies from "../../../assets/data/SkillInfo";
import { Button, Card } from "react-bootstrap";
import "./Skills.css";

const displaySkills = (section) => {
  return section.map((skill) => {
    return <SkillItem skill={skill} />;
  });
};

const Skills = () => {
  const [sort, setSort] = useState("all");
  const [veryComfy, setVeryComfy] = useState([]);
  const [comfy, setComfy] = useState([]);
  const [learning, setLearning] = useState([]);

  useEffect(() => {
    let vc = [],
      c = [],
      l = [];
    Proficiencies.forEach((skill) => {
      console.log(skill);
      if (skill.type === sort || sort === "all") {
        switch (skill.comfort) {
          case 1:
            l.push(skill);
            break;
          case 2:
            c.push(skill);
            break;
          case 3:
            vc.push(skill);
            break;
          default:
            console.log("xd");
            break;
        }
      }
    });
    setVeryComfy(vc);
    setComfy(c);
    setLearning(l);
  }, [sort]);

  return (
    <div style={{
        padding: "3%",
      }}>
      <div>
        <h1>Languages, Frameworks, and Systems I've Used.</h1>
        <p>
          Here is a list of various technologies I've used throughout my
          developer career, grouped by my comfort level with them.
        </p>
        <p style={{ display: "inline-block", marginRight: "10px" }}>
          Sort By:{" "}
        </p>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("all")}
        >
          All
        </Button>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("language")}
        >
          Languages
        </Button>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("framework/engine")}
        >
          Frameworks
        </Button>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("server/db")}
        >
          Servers and Databases
        </Button>
      </div>
      <div id="skilldisplay">
        <Card className="skillsect" id="veryComfy">
          <h2>Comfortable</h2>
          <p>
            These are what I am most comfortable working with, either due to
            proficiency or experience.
          </p>
          <div >{displaySkills(veryComfy)}</div>
        </Card>
        <Card className="skillsect" id="comfy">
          <h2>Decent</h2>
          <p>
            These are ones I have worked with a decent amount, but not enough to
            be comfortable without multiple tabs of documentation open.
          </p>
          <div >{displaySkills(comfy)}</div>
        </Card>
        <Card className="skillsect" id="learning">
          <h2>Learning</h2>
          <p>
            These are skills I am in the process of learning, and am not
            comfortable enough to use or showcase readily.
          </p>
          <div >{displaySkills(learning)}</div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
