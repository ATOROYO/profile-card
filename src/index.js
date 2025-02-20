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
        some few skills and sme and below are some few of the skills I have and
        tha I know;
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
      <Skill skill="Node.js" emoji="😁" color="green" />
      <Skill skill="Git and GitHub" emoji="👨🏽‍💻" color="gray" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
