import { useTheme } from "../ThemeContext";
import { FaLinkedin } from "react-icons/fa";

const Contact_Buttons = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="landing-button-container flex flex-col md:flex-row justify-center items-center w-full mt-4 gap-4">
      <button
        className={`${
          !isDarkMode
            ? "bg-white text-black hover:bg-custom-gray hover:bg-opacity-80 hover:text-white"
            : "bg-black text-white hover:bg-opacity-80 hover:text-white"
        } w-[11.125rem] h-[3rem] rounded-[2.25rem] border border-white font-medium text-[1rem]`}
        id="first-button"
        onClick={() => window.open("https://wa.me/573105620803", "_blank")}
      >
        Contáctame
      </button>

      <button
        className={`w-[11.125rem] h-[3rem] rounded-[2.25rem] flex items-center justify-center gap-2 ${
          !isDarkMode
            ? "bg-black text-white border border-white hover:bg-custom-gray hover:bg-opacity-80 hover:text-white"
            : "bg-white text-black border border-black hover:bg-custom-gray hover:bg-opacity-80 hover:text-white"
        }`}
        id="second-button"
        onClick={() =>
          window.open("https://www.linkedin.com/in/eduardortegon/", "_blank")
        }
      >
        <FaLinkedin className="w-5 h-5" />
        <p>LinkedIn</p>
      </button>
    </div>
  );
};

export default Contact_Buttons;
