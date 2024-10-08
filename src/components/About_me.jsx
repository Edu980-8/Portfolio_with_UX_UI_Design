import Photo from "../assets/me.png";
import { useTheme } from "../ThemeContext";

const About_me = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id="about-me" className="mt-10 mb-10 flex justify-center pt-[5.8rem] sm:mt-1">
      <div className="flex flex-col items-center w-full max-w-[90%] md:max-w-[65.875rem]">
        {/* Título y línea divisoria */}
        <div className="flex flex-col md:flex-row text-left w-full gap-[1.5rem] mb-[3rem] items-center">
          <h2 className="text-[2.5rem] text-center md:text-left">Sobre Mi</h2>
          <div className="self-center w-full h-[0.125rem] my-4 bg-custom-gray hidden md:block md:w-[83%]"></div>
        </div>

        {/* Contenido principal: imagen y descripción */}
        <section className="border-[1px] rounded-[4px] border-[#272727] w-full max-w-[66.25rem] bg-custom-gray-about flex flex-col md:flex-row gap-[32px] p-[3rem] mb-[1.5rem]">
          {/* Imagen */}
          <div className="w-full md:w-[30rem] h-[22.563rem] mx-auto md:mx-0">
            <img
              src={Photo}
              className="w-full h-full rounded-[4px] object-cover"
              alt="Eduard Ortegón"
            />
          </div>

          {/* Descripción */}
          <div className="flex flex-col justify-center w-full md:w-[35rem] gap-[1.5rem] mt-6 md:mt-0">
            <h2 className="text-[1.5rem] font-semibold">
              Ingeniero Electrónico con conocimiento en datos e inteligencia artificial
            </h2>
            <p
              className={`text-[1rem] leading-relaxed ${
                !isDarkMode ? "text-custom-exp-gray" : "text-custom-gray"
              }`}
            >
              Mi nombre es Eduard Ortegón, soy desarrollador de software e
              ingeniero electrónico colombiano, con experiencia en el desarrollo
              de páginas web y la construcción de algoritmos para resolver
              problemas relacionados con datos e inteligencia artificial. Me
              apasiona la programación, y mi lenguaje favorito es Python.
              Actualmente, estoy realizando una maestría en inteligencia
              artificial en la Universidad de La Rioja (UNIR), lo que demuestra
              mi afinidad por el aprendizaje y mi deseo de seguir creciendo cada
              día.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About_me;
