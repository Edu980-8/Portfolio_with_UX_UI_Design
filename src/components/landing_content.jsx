import { useState, useEffect } from "react";
import "./landing_content.css"; // Asegúrate de importar el CSS

const LandingContent = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    setIsAnimationActive(true);
  }, []);

  return (
    <div className="landing-content flex flex-col items-center justify-center h-[calc(100vh-5.5rem)] w-full text-center bg-black bg-cover bg-center">
      <section className="landing-section w-full max-w-[90%] md:max-w-[65.875rem] min-h-[36.464rem] rounded-[1.5rem] flex flex-col items-center justify-center border-[0.125rem] border-custom-gray-dark bg-[radial-gradient(circle,transparent_20%,#0a0a0a_90%),radial-gradient(#1e1e1e_12%_13%,transparent_14%)] bg-[100%_100%,14px_14px]">
        <div className="tag_container w-[11.5rem] h-[2.06rem] bg-[#1e1e1e] text-white border border-white rounded-[2.25rem] mb-4">
          <p className="m-0 p-[0.313rem]">Disponible para trabajar</p>
        </div>

        <h1 className="landing-h1 font-bold text-[2.5rem] md:text-[4rem] tracking-widest mb-4">
          Hola, soy Eduard Ortegón
        </h1>

        <h2 className="landing-h2 text-[#a6a6a6] text-[1.2rem] md:text-[1.5rem] w-full md:w-[48.75rem] mx-auto mb-4 px-4 md:px-0">
          <span>
            <span
              className={`${
                isAnimationActive
                  ? "span-animation landing-span-animation text-white"
                  : ""
              }`}
            >
              Desarrollador de software,
            </span>{" "}
            soporte técnico e Ingeniero Electrónico de Bogotá, Colombia.
          </span>
        </h2>

        <h2 className="landing-h2 text-[#a6a6a6] text-[1.2rem] md:text-[1.5rem] w-full md:w-[48.75rem] mx-auto mb-4 px-4 md:px-0">
          Estudiante de Maestría en Inteligencia Artificial, especialista en Python.
        </h2>

        <div className="landing-button-container flex flex-col md:flex-row justify-center mt-4 gap-4">
          <button
            className="landing-button bg-white text-black hover:bg-custom-gray hover:bg-opacity-80 hover:text-white w-[11.125rem] h-[3rem] rounded-[2.25rem] border border-white font-medium text-[1rem]"
            id="first-button"
            onClick={() => window.open("https://wa.me/573105620803", "_blank")}
          >
            Contáctame
          </button>

          <button
            className="landing-button w-[11.125rem] h-[3rem] rounded-[2.25rem] border border-white flex items-center justify-center gap-2 text-white bg-transparent"
            id="second-button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/eduardortegon/", "_blank")
            }
          >
            <img
              src="../../src/assets/linkedin.png"
              alt=""
              className="w-4 h-4"
            />
            <p>LinkedIn</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingContent;
