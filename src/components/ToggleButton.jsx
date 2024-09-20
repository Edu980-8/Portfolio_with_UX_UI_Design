
import  { useState } from 'react';
import './ToggleButton.css';
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div
      className={`toggle-switch ${isOn ? "on" : "off"}`}
      onClick={toggleSwitch}
    >
      <div className="toggle-knob"></div>
      {!isOn ? <img src="../../src/assets/sun.png" alt="" /> : <img className="moon" src="../../src/assets/moon.png" alt="" />}
    </div>
  );
};

export default ToggleButton;
