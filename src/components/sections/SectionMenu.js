import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SectionMenu.css";
import { ReactComponent as About } from "../../assets/img/person-circle.svg";
import { ReactComponent as Project } from "../../assets/img/cpu-fill.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SectionMenu = () => {
  return (
    <Router>
      <Card body className="sectmenu">
        <Link to="/aboutme">
          <Button variant="outline-secondary">
            <About className="secticon" />
            <p>about me</p>
          </Button>
        </Link>
        <Link to="/projects">
          <Button variant="outline-secondary">
            <Project className="secticon" />
            <p>projects</p>
          </Button>
        </Link>

        <Switch>
          <Route path="aboutme">
            <p>hello</p>
          </Route>
          <Route path="projects">
            <p>bye</p>
          </Route>
        </Switch>
      </Card>
    </Router>
  );
};

export default SectionMenu;
