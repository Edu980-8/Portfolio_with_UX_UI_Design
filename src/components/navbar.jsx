import { useState } from "react";
import ToggleButton from "./ToggleButton.jsx";
import { useTheme } from "../ThemeContext.jsx";
import ColombiaFlag from "../assets/colombia.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Iconos de hamburguesa y cerrar

const Navbar = () => {
  const { isDarkMode } = useTheme();
  const cadena = !isDarkMode ? "bg-black" : "bg-white";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar pt-5 ${cadena} sticky top-0 z-10 flex justify-center h-[5.5rem] w-full gap-6`}>
      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex items-center justify-center h-[3.5rem] w-[39rem] rounded-[2.25rem] border border-[#5A5A5A] gap-4 p-0">
        <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#">Inicio</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#experience">Experiencia</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#projects">Proyectos</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
          <a href="#about-me">Sobre mí</a>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <li className="flag-container flex items-center gap-2">
          <img className="flag w-[1.2rem] h-[1.2rem]" src={ColombiaFlag} alt="Colombia Flag" />
          <p>Español</p>
        </li>
        <div className="point h-1 w-1 rounded-full bg-[#5A5A5A]"></div>
        <ToggleButton />
      </ul>

      {/* Botón de hamburguesa para pantallas pequeñas */}
      <div className="md:hidden flex justify-between items-center w-full px-4  ">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <ul
          className={`flex flex-col items-center justify-center absolute top-[5.5rem] left-0 w-full z-50 gap-4 p-4 md:hidden ${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
            <a href="#" onClick={toggleMenu}>Inicio</a>
          </li>
          <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
            <a href="#experience" onClick={toggleMenu}>Experiencia</a>
          </li>
          <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
            <a href="#projects" onClick={toggleMenu}>Proyectos</a>
          </li>
          <li className="list-none transition ease-in-out duration-300 hover:text-[#6568E9] cursor-pointer">
            <a href="#about-me" onClick={toggleMenu}>Sobre mí</a>
          </li>
          <li className="flag-container flex items-center gap-2">
            <img className="flag w-[1.2rem] h-[1.2rem]" src={ColombiaFlag} alt="Colombia Flag" />
            <p>Español</p>
          </li>
          <ToggleButton />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
