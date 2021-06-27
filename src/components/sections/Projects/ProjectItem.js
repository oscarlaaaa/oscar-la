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
        <p>
          <span>Type:</span> {project.type}
        </p>
        <p>
          <span>Timeframe:</span> {project.timeframe}
        </p>
        <p>
          <span>Tech:</span> {project.technologies}
        </p>
        <p>
          <span>Team Members:</span> {project.team}
        </p>
        <p>
          <span>Features:</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
