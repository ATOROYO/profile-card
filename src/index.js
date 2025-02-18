import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div>
      <Avatar />
      <div>
        <Intro />
        {/* {skilss goes here} */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <strictMode>
    <App />
  </strictMode>
);
