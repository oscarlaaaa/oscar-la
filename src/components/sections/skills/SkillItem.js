import React from "react";
import { Card } from "react-bootstrap";
import "./SkillItem.css";

const SkillItem = ({ skill }) => {
  return (
    <Card className="skillcard" style={{ display: "inline-block" }}>
      <div className="skilliconbox">
        <img src={skill.icon} alt={skill.name} className="skillicon" />
      </div>
      {skill.name}
    </Card>
  );
};

export default SkillItem;
