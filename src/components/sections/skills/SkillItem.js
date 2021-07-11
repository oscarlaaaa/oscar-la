import React from "react";
import { Card } from 'react-bootstrap';
import './SkillItem.css';

const SkillItem = ({ skill }) => {
  return (
    <Card style={{width: "125px", height: "auto", display: "inline-block", margin: "10px", textAlign: "center", fontSize: "15pt"}}>
      <img src={skill.icon} alt={skill.name} className="skillicon"/>
      {skill.name}
    </Card>
  );
};

export default SkillItem;
