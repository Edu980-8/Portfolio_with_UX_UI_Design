import Techs from "../components/Techs";
import { FaGithub, FaLink } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Projects = ({
  image,
  project_name,
  description,
  techs,
  code_link,
  preview_link,
  index,
}) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="w-full flex gap-[3rem] items-center ">
      <img
        className="w-[27.125rem] h-[18rem] rounded-[0.25rem] object-scale-fill"
        src={image}
        alt="Project image"
      />
      <div className="w-[calc(100%-27.125rem)] flex flex-col  justify-left gap-[1.5rem]">
        <p className="text-[1.5rem]  text-semibold">{project_name}</p>
        <div className="flex flex-row gap-[0.5rem] ">
          {techs.map((tech, index) => (
            <Techs key={index} techName={tech}></Techs>
          ))}
        </div>
        <p className="text-[1.125rem] text-custom-exp-gray">{description}</p>

        <div className="flex flex-row gap-[1rem]">
          <button
            className={`w-[119px] h-[40px] border p-[1.5rem] px-[0.5rem] rounded-[2.25rem] flex items-center justify-center hover:bg-custom-gray hover:bg-opacity-80 hover:text-white ${
              !isDarkMode ? "border-white" : "border-black"
            }`}
            onClick={() => window.open(code_link, "_blank")}
          >
            <FaGithub className="mr-2" /> Code
          </button>

          <button
            className={`w-[119px] h-[40px] border p-[1.5rem] px-[0.5rem] rounded-[2.25rem] flex items-center justify-center hover:bg-custom-gray hover:bg-opacity-80 hover:text-white ${
              !isDarkMode ? " border border-white" : "border border-black"
            }`}
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