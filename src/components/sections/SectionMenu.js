import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SectionMenu.css";
import { ReactComponent as AboutIcon } from "../../assets/img/person-circle.svg";
import { ReactComponent as SkillIcon } from "../../assets/img/bar-chart-line-fill.svg";
import { ReactComponent as ProjectIcon } from "../../assets/img/cpu-fill.svg";
import { ReactComponent as CourseIcon } from "../../assets/img/journal-text.svg";
import { ReactComponent as ThankIcon } from "../../assets/img/people-fill.svg";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import ProjectList from "./projects/ProjectList";
import CourseList from "./courses/CourseList";
import Thanks from "./thanks/Thanks";
import AboutMe from "./aboutme/AboutMe";
import Skills from "./skills/Skills";
import { useTransition, animated, config } from "@react-spring/web";
import { Link as ScrollLink } from "react-scroll";

const SectionMenu = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, display: "none", height: 0, width: 0 },
    enter: { opacity: 1, display: "block", height: "auto", width: "auto" },
    leave: { opacity: 0, display: "none", height: 0 },
    config: config.molasses,
  });

  return (
    <Card body className="sectmenu" id="contentSect">
      <ScrollLink to="contentSect" spy={true} smooth={true} offset={-25} duration={200}>
        <Link to="/aboutme">
          <Button
            className="sectbutt"
            style={{ margin: "1%" }}
            variant="outline-info"
          >
            <AboutIcon className="secticon" />
            <p>about me</p>
          </Button>
        </Link>
      </ScrollLink>

      <ScrollLink to="contentSect" spy={true} smooth={true} offset={-25} duration={200}>
        <Link to="/skills">
          <Button
            className="sectbutt"
            style={{ margin: "1%" }}
            variant="outline-info"
          >
            <SkillIcon className="secticon" />
            <p>skills</p>
          </Button>
        </Link>
      </ScrollLink>
      <ScrollLink to="contentSect" spy={true} smooth={true} offset={-25} duration={200}>
        <Link to="/projects">
          <Button
            className="sectbutt"
            style={{ margin: "1%" }}
            variant="outline-info"
          >
            <ProjectIcon className="secticon" />
            <p>projects</p>
          </Button>
        </Link>
      </ScrollLink>

      <ScrollLink to="contentSect" spy={true} smooth={true} offset={-25} duration={200}>
        <Link to="/courses">
          <Button
            className="sectbutt"
            style={{ margin: "1%" }}
            variant="outline-info"
          >
            <CourseIcon className="secticon" />
            <p>courses</p>
          </Button>
        </Link>
      </ScrollLink>
      <ScrollLink to="contentSect" spy={true} smooth={true} offset={-25} duration={200}>
        <Link to="/thanks">
          <Button
            className="sectbutt"
            style={{ margin: "1%" }}
            variant="outline-info"
          >
            <ThankIcon className="secticon" />
            <p>special thanks</p>
          </Button>
        </Link>
      </ScrollLink>
      {transitions((props, item) => (
        <animated.div style={props} >
          <Switch location={item}>
            <Route path="/aboutme">
              <AboutMe />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <ProjectList />
            </Route>
            <Route path="/courses">
              <CourseList />
            </Route>
            <Route path="/thanks">
              <Thanks />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </Card>
  );
};

export default SectionMenu;
