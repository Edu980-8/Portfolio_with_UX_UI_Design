import "./navbar.css";
import ToggleButton from "./ToggleButton.jsx";

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>Inicio</li>
        <div className="point"></div>
        <li>Experiencia</li>
        <div className="point"></div>
        <li>Proyectos</li>
        <div className="point"></div>
        <li>Sobre mí</li>
        <div className="point"></div>
        <li>🇨🇴 Español</li>
        <div className="point"></div>
        <ToggleButton />
      </ul>
    </nav>
  );
};

export default navbar;
