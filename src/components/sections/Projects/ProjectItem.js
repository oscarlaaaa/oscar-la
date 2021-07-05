import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
  return (
    <div className="projectitem">
      <h1 className="projecttitle">{project.title}</h1>
      <p className="projectslogan">
        <i>{project.slogan}</i>
      </p>
      <YoutubeEmbed className="video" embedId={project.videourl} />
      <div className="projectinfo">
        <p style={{marginBottom: "0"}}>
          <span>Type:</span> {project.type}
        </p>
        <p style={{marginBottom: "0"}}>
          <span>Timeframe:</span> {project.timeframe}
        </p>
        <p style={{marginBottom: "0"}}>
          <span>Tech:</span> {project.technologies}
        </p>
        <p style={{marginBottom: "0"}}>
          <span>Team Members:</span> {project.team}
        </p>
        <p style={{marginBottom: "0"}}>
          <span>Features:</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
