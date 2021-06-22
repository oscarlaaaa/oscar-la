import "./App.css";
import LinkMenu from "./components/links/LinkMenu";
import SectionMenu from "./components/sections/SectionMenu";
import Intro from "./components/sections/Intro";
import me from "./assets/img/me.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Alert variant="info">This page is under construction!</Alert>
      <Intro />
      <LinkMenu />
      <img
        style={{ height: "200px", width: "auto" }}
        src={me}
      ></img>
      <SectionMenu />
    </div>
  );
};

export default App;
