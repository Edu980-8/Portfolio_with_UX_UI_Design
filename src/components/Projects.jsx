import Techs from "../components/Techs";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = ({
  image,
  project_name,
  description,
  techs,
  code_link,
  preview_link,
  index,
}) => {
  return (
    <div className="w-full flex gap-[3rem] items-center ">
      <img
        className="w-[27.125rem] h-[18rem] rounded-[0.25rem]"
        src={image}
        alt="Project image"
      />
      <div className="w-[calc(100%-27.125rem)] flex flex-col  justify-left gap-[1.5rem]">
        <p>{project_name}</p>
        <div className="flex flex-row gap-[0.5rem] ">
          {techs.map((tech, index) => (
            <Techs key={index} techName={tech}></Techs>
          ))}
        </div>
        <p>{description}</p>

        <div className="flex flex-row gap-[1rem]">
          <button
            className="w-[119px] h-[40px] border p-[1.5rem] px-[0.5rem] rounded-[2.25rem] flex items-center justify-center"
            onClick={() => window.open(code_link, "_blank")}
          >
            <FaGithub className="mr-2" /> Code
          </button>

          <button
            className="w-[119px] h-[40px] border p-[1.5rem] px-[0.5rem] rounded-[2.25rem] flex items-center justify-center"
            onClick={() => window.open(preview_link, "_blank")}
          >
            <FaLink className="mr-2" /> Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
