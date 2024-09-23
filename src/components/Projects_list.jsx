import Projects from "./Projects.jsx";
import preview_web_5ig from "../assets/5IG_page.png";
import preview_Tesis from "../assets/Tesis.png";

const projectsData = [
  {
    image: preview_web_5ig,
    project_name: "Página Web 5IG Solutions",
    description: "Conoce a 5IG Solutions la mejor opción en la creación de servicios tecnológicos de primera calidad. Utilizando herramientas de Low code - No Code, para el desarrollo de sus servicios.",
    techs: ["React", "CSS", "Tailwind"],
    code_link: "https://github.com/Edu980-8/webpage_5ig",
    preview_link: "https://5igsolutions.com/",
  },
  {
    image: preview_Tesis,
    project_name: "Proyecto de Graduación Pregrado",
    description: "Conoce más acerca de mis proyectos en el ámbito académico, con la implementación y escritura de mi proyecto de graduación.",
    techs: ["SQL", "LabView", "Matlab", "Excel"],
    code_link: "#",
    preview_link: "https://repository.usta.edu.co/bitstream/handle/11634/46475/2022eduardortegon.pdf?sequence=6&isAllowed=y",
  }
];

const Projects_list = () => {
  return (
    <div id="projects" className="flex justify-center pt-[5.8rem]">
      <div className="flex flex-col items-center w-full max-w-[65.875rem] gap-[5.375rem]">
        <div className="flex flex-col md:flex-row text-left w-full gap-[1.5rem]">
          <div className="self-center w-full h-[0.125rem] my-4 bg-custom-gray md:block hidden"></div>
          <h2 className="text-[2.5rem] lg:px-4 pl-[25%]">Proyectos</h2>
        </div>
        {projectsData.map((project, index) => (
          <Projects key={index} {...project} />
        ))}
      </div>
    </div>
  );
};


export default Projects_list;
