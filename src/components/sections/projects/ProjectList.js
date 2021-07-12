import React, { useState, useEffect } from "react";
import ProjectInfo from "../../../assets/data/ProjectInfo";
import ProjectItem from "./ProjectItem";
import { Button } from "react-bootstrap";

const ProjectList = () => {
  const [list, setList] = useState(ProjectInfo);
  const [sort, setSort] = useState("all");

  useEffect(() => {
    let render = [];
    ProjectInfo.forEach((project) => {
      if (sort === "all") {
        render.push(project);
      } else {
        project.categories.forEach((cate) => {
          if (sort === "all" || cate === sort) {
            render.push(project);
          }
        });
      }
    });
    setList(render);
  }, [sort]);

  let key = 0;
  return (
    <div>
      <div>
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
          onClick={() => setSort("game")}
        >
          Game
        </Button>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("web")}
        >
          Web
        </Button>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("mobile")}
        >
          Mobile
        </Button>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("full-stack")}
        >
          Full-Stack
        </Button>
        <Button
          variant="outline-info"
          className="sortButt"
          onClick={() => setSort("enterprise")}
        >
          Enterprise
        </Button>
      </div>
      {list.map((project) => {
        return (
          <div key={key++}>
            <hr />
            <ProjectItem project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
