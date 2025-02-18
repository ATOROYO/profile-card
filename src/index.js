import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* {skilss goes here} */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="Atoo PS1 Crop.jpg" alt="Atoo" className="avatar " />;
}

function Intro() {
  return (
    <div>
      <h1>David Atoroyo Sika</h1>
      <p>
        I'm a full stack developer I love coding things from scratch. I know
        some few skills and below are some few of the skills I have and tha I
        know
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list ">
      <skill className="skill">HTML</skill>
      <skill className="skill">JavaScript</skill>
      <skill className="skill">Node.Js</skill>
      <skill className="skill">React</skill>
      <skill className="skill">Git and GitHub</skill>
      <skill className="skill">Python</skill>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
