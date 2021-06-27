import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SectionMenu.css";
import { ReactComponent as AboutIcon } from "../../assets/img/person-circle.svg";
import { ReactComponent as ProjectIcon } from "../../assets/img/cpu-fill.svg";
import { ReactComponent as CourseIcon } from "../../assets/img/journal-text.svg";
import { ReactComponent as ThankIcon } from "../../assets/img/people-fill.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectList from "./projects/ProjectList";
import CourseList from "./courses/CourseList";

const SectionMenu = () => {
  return (
    <Router>
      <Card body className="sectmenu">
        <Link to="/aboutme">
          <Button style={{margin: "1%"}}  variant="outline-info">
            <AboutIcon className="secticon" />
            <p>about me</p>
          </Button>
        </Link>
        <Link to="/projects">
          <Button style={{margin: "1%"}} variant="outline-info">
            <ProjectIcon className="secticon" />
            <p>projects</p>
          </Button>
        </Link>
        <Link to="/courses">
          <Button style={{margin: "1%"}} variant="outline-info">
            <CourseIcon className="secticon" />
            <p>courses</p>
          </Button>
        </Link>
        <Link to="/thanks">
          <Button style={{margin: "1%"}} variant="outline-info">
            <ThankIcon className="secticon" />
            <p>special thanks</p>
          </Button>
        </Link>
        <Switch>
          <Route path="/aboutme">
            <p>me</p>
          </Route>
          <Route path="/projects">
            <ProjectList />
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
          <Route path="/thanks">
            <p>thank</p>
          </Route>
        </Switch>
      </Card>
    </Router>
  );
};

export default SectionMenu;
