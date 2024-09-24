import { useState, useEffect } from "react";
import "./landing_content.css"; // Asegúrate de importar el CSS
import Contact_Buttons from "./Contact_Buttons";
import { useTheme } from "../ThemeContext";

const LandingContent = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setIsAnimationActive(true);
  }, []);

  return (
    <div className="lg:pt-[6.5rem] lg:pb-[6.5rem] flex justify-center   self-center  max-h-[calc(100vh - 5.5rem)] justify-center items-center  sm:mt-1">
      <div className="landing-content flex flex-col items-center  w-full text-center ">
        <section className="landing-section w-full max-w-[90%] md:max-w-[65.875rem] min-h-[34.464rem] rounded-[1.5rem] flex flex-col items-center justify-center border-[0.12rem] border-custom-gray-dark bg-[100%_100%,14px_14px] sm:pt-10 sm:pb-10">
          <div className="tag_container w-[11.5rem] lg:w-[13.5rem] h-[2.06rem] bg-[#1e1e1e] text-white border border-white rounded-[2.25rem] ">
            <p className="m-0 p-[0.313rem] w-full text-center">Disponible para trabajar</p>
          </div>

          <h1 className="landing-h1 font-bold text-[2.5rem] md:text-[4rem] tracking-widest mb-4">
            Hola, soy Eduard Ortegón
          </h1>

          <h2
            className={`${
              !isDarkMode ? "text-custom-exp-gray" : "text-dark-letter"
            } text-[1.2rem] md:text-[1.5rem] w-full md:w-[48.75rem] mx-auto mb-4 px-4 md:px-0`}
          >
            <span>
              <span
                className={`${
                  isAnimationActive
                    ? "span-animation landing-span-animation"
                    : ""
                } ${
                  !isDarkMode ? "text-white font-bold" : "text-black font-bold"
                }`}
              >
                Desarrollador de software,
              </span>{" "}
              soporte técnico e Ingeniero Electrónico de Bogotá, Colombia.
            </span>
          </h2>

          <h2
            className={`${
              !isDarkMode
                ? "text-custom-exp-gray text-[1.2rem] md:text-[1.5rem] w-full md:w-[48.75rem] mx-auto mb-4 px-4 md:px-0"
                : "text-dark-letter text-[1.2rem] md:text-[1.5rem] w-full md:w-[48.75rem] mx-auto mb-4 px-4 md:px-0"
            }`}
          >
            Estudiante de Maestría en Inteligencia Artificial, especialista en
            Python.
          </h2>

          <Contact_Buttons />
        </section>
      </div>
    </div>
  );
};

export default LandingContent;
