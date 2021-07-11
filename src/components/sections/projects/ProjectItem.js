import React, { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "./ProjectItem.css";
import { Modal } from "react-bootstrap";
import { ReactComponent as Github } from "../../../assets/img/github.svg";
import { ReactComponent as Globe } from "../../../assets/img/globe.svg";

const projectFeatures = (feets) => {
  return feets.map((feat) => {
    return <li style={{ fontSize: "1.2rem" }}>{feat}</li>;
  });
};

const teamLinks = (team) => {
  return team.map((member) => {
    return (
      <li>
        <a href={member.link}>{member.name}</a>
      </li>
    );
  });
};

const ProjectItem = ({ project }) => {
  const [modalImg, setModalImg] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [showModal, setShowModal] = useState(false);

  const projectPic = (project) => {
    return project.images.map((img) => {
      return (
        <div className="projimg">
          <img
            onClick={() => {
              setShowModal(true);
              setModalImg(img);
              setModalTitle(project.title);
            }}
            src={img}
            alt="project screenshot"
          />
        </div>
      );
    });
  };

  return (
    <div className="projectitem">
      <h1 className="projecttitle">
        {project.title}{" "}
        {project.github && (
          <a href={project.github}>
            <Github className="projectlink" />
          </a>
        )}
        {project.link && (
          <a href={project.link}>
            <Globe className="projectlink" />
          </a>
        )}
      </h1>

      <p className="projectslogan">
        <i>{project.slogan}</i>
      </p>
      {project.videourl === null ? (
        <img className="video mainimg" src={project.mainimg} />
      ) : (
        <YoutubeEmbed className="video" embedId={project.videourl} />
      )}
      {project.images === null ? (
        <p></p>
      ) : (
        <div className="projectimgs">{projectPic(project)}</div>
      )}
      <Modal
        show={showModal}
        size="xl"
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-styling-title">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display: "flex", justifyContent: "center"}}>
          <img src={modalImg} alt="hello" style={{ width: "auto", height: "auto", maxHeight: "75vh", marginLeft: "auto", marginRight: "auto" }} />
          </div>
        </Modal.Body>
      </Modal>
      <div className="projectinfo">
        <p style={{ marginBottom: "0" }}>
          <span>Type:</span> {project.type}
        </p>
        <p style={{ marginBottom: "0" }}>
          <span>Timeframe:</span> {project.timeframe}
        </p>
        <p style={{ marginBottom: "0" }}>
          <span>Tech:</span> {project.technologies}
        </p>
        <p style={{ fontSize: "1.2rem", margin: "20px" }}>
            {project.description}
        </p>
        <p style={{ marginBottom: "0" }}>
          <span>Features:</span>
          <ul>{projectFeatures(project.features)}</ul>
        </p>
        <p style={{ marginBottom: "0" }}>
          <span>Team Members:</span>
          <ul>{teamLinks(project.team)}</ul>
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
