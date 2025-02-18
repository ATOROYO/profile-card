import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="card">
        <Intro />
        {/* {skilss goes here} */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="Atoo PS1 Crop.jpg" alt="Atoo" />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
