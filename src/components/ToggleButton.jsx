import { useTheme } from '../ThemeContext';
import './ToggleButton.css';
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`toggle-switch ${isDarkMode ? "on" : "off"}`}
      onClick={toggleTheme}
    >
      <div className="toggle-knob"></div>
      {!isDarkMode ? <img src={Sun} alt="Modo claro" /> : <img className="moon" src={Moon} alt="Modo oscuro" />}
    </div>
  );
};

export default ToggleButton;
