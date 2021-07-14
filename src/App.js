import "./App.css";
import LinkMenu from "./components/links/LinkMenu";
import SectionMenu from "./components/sections/SectionMenu";
import Intro from "./components/sections/intro/Intro";
import me from "./assets/img/me.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import AnimatedPhoto from "./components/sections/intro/AnimatedPhoto";

const App = () => {
  return (
    <div className="App">
      <Alert variant="info">This page is under construction!</Alert>
      <div id="homepagesect">
        <div id="myphotos">
          {/* <AnimatedPhoto /> */}
          <img
            id="me"
            src={me}
            alt="the mastermind himself"
          ></img>
        </div>

        <div id="introlinks">
          <Intro />
          <LinkMenu />
        </div>
      </div>
      <SectionMenu />
    </div>
  );
};

export default App;
