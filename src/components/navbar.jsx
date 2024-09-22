import ToggleButton from "./ToggleButton.jsx";
import { useTheme } from "../ThemeContext.jsx";

const Navbar = () => {


  const { isDarkMode } = useTheme();
  const cadena = !isDarkMode ? "bg-black" : "bg-white";
  return (
    <nav className={`navbar pt-5 ${cadena} sticky top-0 z-10 flex justify-center h-[5.5rem] w-full gap-6`}>
      <ul className="flex items-center justify-center h-[3.5rem] w-[39rem] rounded-[2.25rem] border border-[#5A5A5A] gap-4 mr-4 p-0">
        <li className="list-none m-0 p-0 transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#" className="block">Inicio</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="list-none m-0 p-0 transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#experience" className="block">Experiencia</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="list-none m-0 p-0 transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#projects" className="block">Proyectos</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="list-none m-0 p-0 transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#about-me" className="block">Sobre mí</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="flag-container flex items-center gap-2">
          <img className="flag w-[1.2rem] h-[1.2rem]" src="../../src/assets/colombia.png" alt="" />
          <p>Español</p>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <ToggleButton />
      </ul>
    </nav>
  );
};

export default Navbar;
