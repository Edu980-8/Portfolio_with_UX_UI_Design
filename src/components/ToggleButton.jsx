import { useTheme } from '../ThemeContext';
import './ToggleButton.css';

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`toggle-switch ${isDarkMode ? "on" : "off"}`}
      onClick={toggleTheme}
    >
      <div className="toggle-knob"></div>
      {!isDarkMode ? <img src="../../src/assets/sun.png" alt="Modo claro" /> : <img className="moon" src="../../src/assets/moon.png" alt="Modo oscuro" />}
    </div>
  );
};

export default ToggleButton;
