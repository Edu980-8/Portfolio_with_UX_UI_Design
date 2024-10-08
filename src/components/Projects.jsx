import Techs from "../components/Techs";
import { FaGithub, FaLink } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Ajusta el punto de quiebre si es necesario
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isOdd = index % 2 !== 0;

  return (
    <div className="w-full flex flex-col md:flex-row gap-[3rem] items-center px-4 sm:px-6">
      <img
        className={`w-[27.125rem] h-[18rem] rounded-[0.25rem] object-scale-fill ${isMobile ? 'order-1' : (isOdd ? 'order-2' : 'order-1')}`}
        src={image}
        alt="Project image"
      />
      <div className={`w-full md:w-[calc(100%-27.125rem)] flex flex-col gap-[1.5rem] ${isMobile ? 'order-2' : (isOdd ? 'order-1' : 'order-2')}`}>
        <p className="text-[1.5rem] font-semibold">{project_name}</p>
        <div className="flex flex-wrap gap-[0.5rem]">
          {techs.map((tech, techIndex) => (
            <Techs key={techIndex} techName={tech} />
          ))}
        </div>
        <p className="text-[1.125rem] text-custom-exp-gray">{description}</p>
        <div className="flex flex-row gap-[1rem]">
          <button
            className={`w-[119px] h-[40px] border p-[1.5rem] px-[0.5rem] rounded-[2.25rem] flex items-center justify-center hover:bg-custom-gray hover:bg-opacity-80 hover:text-white ${!isDarkMode ? 'border-white' : 'border-black'}`}
            onClick={() => window.open(code_link, "_blank")}
          >
            <FaGithub className="mr-2" /> Code
          </button>
          <button
            className={`w-[119px] h-[40px] border p-[1.5rem] px-[0.5rem] rounded-[2.25rem] flex items-center justify-center hover:bg-custom-gray hover:bg-opacity-80 hover:text-white ${!isDarkMode ? 'border-white' : 'border-black'}`}
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
