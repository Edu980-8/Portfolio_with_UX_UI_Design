import Navbar from "../src/components/navbar.jsx";
import Landing_content from "../src/components/landing_content.jsx";
import Experience from "../src/components/experience.jsx";
import Projects_list from "../src/components/Projects_list.jsx";
import Contribution_List from "../src/components/Contribution_List.jsx";
import About_me from "./components/About_me.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import { useTheme } from "./ThemeContext.jsx";

import "./index.css";

// Datos de proyectos


function App() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`App ${isDarkMode ?  'bg-white text-black' : 'bg-black text-white'}`}>
      <Navbar />
      <Landing_content />
      <Experience />
      <Projects_list />
      <Contribution_List />
      <About_me />
      <Banner />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
