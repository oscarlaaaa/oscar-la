import './App.css';
import LinkMenu from './components/links/LinkMenu';
import SectionMenu from './components/sections/SectionMenu';
import Intro from './components/sections/Intro';
import me from './assets/img/me.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Intro />
      <img style={{height: "200px", width: "auto", margin: "5%"}} src={me}></img>
      <LinkMenu />
      <SectionMenu />
    </div>
  );
}

export default App;
