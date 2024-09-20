import Navbar from "../src/components/navbar.jsx";
import Landing_content from "../src/components/landing_content.jsx";
import Experience from "../src/components/experience.jsx";
import Projects_list from "../src/components/Projects_list.jsx";

import "./index.css";

// Datos de proyectos


function App() {
  return (
    <>
      <Navbar />
      <Landing_content />
      <Experience />
      <Projects_list />
      
    </>
  );
}

export default App;
