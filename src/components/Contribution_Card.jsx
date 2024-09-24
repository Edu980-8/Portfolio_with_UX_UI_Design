import Techs from "../components/Techs";
import { useTheme } from "../ThemeContext";

const Contribution_Card = ({ image, project_name, description, techs }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="rounded-[4px] bg-[#4847474D] w-full max-w-[20.583rem] h-[28.188rem] mt-5 flex flex-col items-center border-[#272727] border-[0.1rem] rounded-[0.063rem] gap-[1rem]   sm: h-auto sm: pb-4 ">
      <img
        className="w-full h-[10.688rem] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[0] rounded-bl-[0] object-cover"
        src={image}
        alt={project_name}
      />
      <h4 className="text-[1.25rem] w-full px-4">{project_name}</h4>
      <p
        className={`w-full text-[0.875rem] px-4 ${
          !isDarkMode ? "text-custom-exp-gray" : "text-custom-gray"
        }`}
      >
        {description}
      </p>

      <div className="flex flex-row gap-[0.5rem] w-full flex-wrap px-4">
        {techs.map((tech, index) => (
          <Techs key={index} techName={tech} />
        ))}
      </div>
    </div>
  );
};

export default Contribution_Card;
