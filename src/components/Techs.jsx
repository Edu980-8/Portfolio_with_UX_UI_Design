import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import {
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import {
  SiPostman,
  SiPowerapps,
  SiPowerautomate,
  SiMysql,
  SiLabview,
  SiExpress,
  SiGraphql, 
  SiSequelize 
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma, FaFileExcel } from "react-icons/fa";
import MatlabIcon from "../../src/assets/matlab.png";
import { DiRedis } from "react-icons/di";

const Technology = [
  { name: "React", img: <FaReact /> },
  { name: "JavaScript", img: <IoLogoJavascript /> },
  { name: "HTML", img: <FaHtml5 /> },
  { name: "CSS", img: <FaCss3Alt /> },
  { name: "Bootstrap", img: <FaBootstrap /> },
  { name: "Python", img: <IoLogoPython /> },
  { name: "Power Automate", img: <SiPowerautomate /> },
  { name: "Power Apps", img: <SiPowerapps /> },
  { name: "Postman", img: <SiPostman /> },
  { name: "Git", img: <FaGitAlt /> },
  { name: "GitHub", img: <FaGithub /> },
  { name: "Tailwind", img: <RiTailwindCssFill /> },
  { name: "Figma", img: <FaFigma /> },
  { name: "SQL", img: <SiMysql /> },
  { name: "Excel", img: <FaFileExcel /> },
  { name: "LabView", img: <SiLabview /> },
  { name: "Express", img: <SiExpress /> },
  { name: "Graphql", img: <SiGraphql /> },
  { name: "Redis", img: <DiRedis /> },
  { name: "Sequelize", img: <SiSequelize /> },
  {
    name: "Matlab",
    img: <img src={MatlabIcon} alt="Matlab" className="w-6 h-6" />,
  },
];

const techColors = {
  React: "bg-blue-600 bg-opacity-80",
  JavaScript: "bg-yellow-500 bg-opacity-80",
  HTML: "bg-orange-500 bg-opacity-80",
  CSS: "bg-blue-400 bg-opacity-80",
  Bootstrap: "bg-purple-600 bg-opacity-80",
  Python: "bg-[#ffd342] bg-opacity-80",
  "Power Automate": "bg-green-500 bg-opacity-80",
  "Power Apps": "bg-green-700 bg-opacity-80",
  Postman: "bg-red-500 bg-opacity-80",
  Git: "bg-gray-600 bg-opacity-80",
  GitHub: "bg-black bg-opacity-80",
  Tailwind: "bg-teal-500 bg-opacity-80",
  Figma: "bg-purple-500 bg-opacity-80",
  SQL: "bg-red-600 bg-opacity-80",
  Excel: "bg-green-500 bg-opacity-80",
  LabView: "bg-yellow-500 bg-opacity-80",
  Matlab: "bg-orange-600 bg-opacity-80",
  Express: "bg-blue-500 bg-opacity-80",
  Graphql: "bg-[#ee0097] bg-opacity-80",
  Redis: "bg-[#d82f27] bg-opacity-80",
  Sequelize: "bg-[#03aff0] bg-opacity-80",
};
const getTechIndex = (name) => {
  const techIndex = Technology.findIndex((tech) => tech.name === name);
  return techIndex !== -1 ? techIndex : null; // Devuelve el índice o null si no se encuentra
};

const Techs = ({ techName }) => {
  const techType = getTechIndex(techName); // Obtener el índice basado en el nombre
  const tech = techType !== null ? Technology[techType] : null;

  // Obtener el color correspondiente
  const bgColor = tech ? techColors[tech.name] : "bg-gray-700";

  return (
    <button
      className={`flex items-center space-x-2 py-[0.25rem] px-[0.75rem] ${bgColor} rounded-[2.25rem] cursor-default`}
      aria-label={`Technology: ${tech ? tech.name : "unknown"}`}
    >
      {tech ? tech.img : <span>⚠️</span>} {/* Icono por defecto */}
      {tech ? (
        <span className="text-white">{tech.name}</span>
      ) : (
        <span>Unknown Technology</span>
      )}
    </button>
  );
};

export default Techs;
