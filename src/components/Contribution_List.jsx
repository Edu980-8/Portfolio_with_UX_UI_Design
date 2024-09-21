import Contribution_Card from "../components/Contribution_Card";
import preview_Tesis from "../assets/Tesis.png";

const contributionProjects = [
  {
    image: preview_Tesis,
    project_name: "Página Web 5IG Solutions",
    description:
      "Conoce a 5IG Solutions la mejor opción en la creación de servicios tecnológicos de primera calidad. Utilizando herramientas de Low code - No Code, para el desarrollo de sus servicios.",
    techs: ["React", "CSS", "Tailwind"],
  },
  {
    image: preview_Tesis,
    project_name: "Página Web 5IG Solutions 2",
    description:
      "Conoce a 5IG Solutions 2, otra opción en la creación de servicios tecnológicos de primera calidad.",
    techs: ["React", "CSS", "Tailwind"],
  },
  {
    image: preview_Tesis,
    project_name: "Página Web 5IG Solutions",
    description:
      "Conoce a 5IG Solutions la mejor opción en la creación de servicios tecnológicos de primera calidad. Utilizando herramientas de Low code - No Code, para el desarrollo de sus servicios.",
    techs: ["React", "CSS", "Tailwind"],
  },
  {
    image: preview_Tesis,
    project_name: "Página Web 5IG Solutions 2",
    description:
      "Conoce a 5IG Solutions 2, otra opción en la creación de servicios tecnológicos de primera calidad.",
    techs: ["React", "CSS", "Tailwind"],
  },
  {
    image: preview_Tesis,
    project_name: "Página Web 5IG Solutions",
    description:
      "Conoce a 5IG Solutions la mejor opción en la creación de servicios tecnológicos de primera calidad. Utilizando herramientas de Low code - No Code, para el desarrollo de sus servicios.",
    techs: ["React", "CSS", "Tailwind"],
  },
  {
    image: preview_Tesis,
    project_name: "Página Web 5IG Solutions 2",
    description:
      "Conoce a 5IG Solutions 2, otra opción en la creación de servicios tecnológicos de primera calidad.",
    techs: ["React", "CSS", "Tailwind"],
  },
];

const Contribution_List = () => {
    return (
      <div className="flex justify-center flex-col items-center mt-10">
        <div className="w-[65.875rem] flex gap-[2rem] items-center justify-center">
          <div className="w-[40%] bg-custom-gray h-[0.125rem]"></div>
          <h1 className="text-white text-[2.5rem]">Contribuciones</h1>
          <div className="w-[40%] bg-custom-gray h-[0.125rem]"></div>
        </div>
  
        <div className="grid grid-cols-3 w-[65.875rem] gap-[2.25rem] mt-4">
          {contributionProjects.map((project, index) => (
            <Contribution_Card key={index} {...project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Contribution_List;
  
