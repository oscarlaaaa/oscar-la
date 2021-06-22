import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
  return (
    <div className="projectitem">
      <YoutubeEmbed className="video" embedId={project.videourl} />
      <div className="projectlist">
        <h1>{project.title}</h1>
        <p><i>{project.slogan}</i></p>
        <p><span>Type:</span> {project.type}</p>
        <p><span>Timeframe:</span> {project.timeframe}</p>
        <p><span>Tech:</span> {project.technologies}</p>
        <p><span>Team Members:</span> {project.team}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
