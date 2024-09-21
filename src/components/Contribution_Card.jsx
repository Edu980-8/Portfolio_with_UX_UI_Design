import Techs from "../components/Techs";

const Contribution_Card = ({ image, project_name, description, techs }) => {
  console.log(techs);
  return (
    <div className="bg-[#4847474D] w-[20.583rem] h-[28.188rem] mt-10 flex flex-col items-center justify-center border-[#272727] border-[0.1rem] rounded-[0.063rem] gap-[1rem]">
      <img
        className="w-[18.583rem] h-[10.688rem] rounded-[0.25rem] object-scale-fill"
        src={image}
        alt={project_name}
      />
      <h4 className="text-[1.25rem] text-white w-[18.583rem]">
        {project_name}
      </h4>
      <p className="w-[18.583rem] text-custom-gray text-[0.875rem]">
        {description}
      </p>
      <div className="flex flex-row gap-[0.5rem] w-[18.583rem] flex-wrap">
        {techs.map((tech, index) => (
          <Techs key={index} techName={tech}></Techs>
        ))}
      </div>
    </div>
  );
};

export default Contribution_Card;
