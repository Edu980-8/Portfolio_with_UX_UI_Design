import Navbar from "../src/components/navbar.jsx";
import Landing_content from "../src/components/landing_content.jsx";
import Experience from "../src/components/experience.jsx";
import Projects from "./components/Projects.jsx";
import preview_web_5ig from "./assets/5IG_page.jpeg";
import preview_portfolio from "./assets/Portfolio_React.png";
import preview_Tesis from "./assets/Tesis.png"

import "./index.css";

// Datos de proyectos
const projectsData = [
  {
    image: preview_web_5ig,
    project_name: "Página Web 5IG Solutions ",
    description: "Conoce a 5IG Solutions la mejor opcion en la creacion de servicios tecnologicos de primera calidad.  ",
    techs: ["React", "CSS", "Tailwind"],
    code_link: "https://github.com/Edu980-8/webpage_5ig",
    preview_link: "https://5igsolutions.com/",
  },
  {
    image: preview_portfolio,
    project_name: "Portafolio Web", 
    description: "Conoce un poco más acerca de mí, mis proyectos, habilidades, experiencia y contactame para trabajar juntos.",
    techs: ["React", "CSS", "Tailwind", "Figma"],
    code_link: "#",
    preview_link: "#",
  },
  {
    image: preview_Tesis,
    project_name: "Proyecto de Graduación Pregrado",
    description: "Conoce mas acerca de mis proyectos en el ámbito academico",
    techs: ["SQL","LabView", "Matlab", "Excel"],
    code_link: "#",
    preview_link: "#",
  }
];

function App() {
  return (
    <>
      <Navbar />
      <Landing_content />
      <Experience />
      <div className=" mt-10 mb-10 flex justify-center h-[calc(100vh-5.5rem)] ">
        <div className="flex flex-col items-center w-[65.875rem] gap-[3rem]">
          <div className="flex text-left w-full gap-[1.5rem] mb-[3rem]">
            <div className="self-center w-[100%] h-[0.125rem] bg-white my-4 bg-custom-gray"></div>
            <h2 className="text-white text-[2.5rem]">Proyectos</h2>
          </div>
          {projectsData.map((project, index) => (
            <Projects key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
