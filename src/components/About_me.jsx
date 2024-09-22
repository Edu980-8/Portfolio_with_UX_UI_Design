import Photo from "../assets/me.png";
import { useTheme } from "../ThemeContext";
const About_me = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id="about-me" className="mt-10 mb-10 flex justify-center pt-[5.8rem] ">
      <div className="flex flex-col items-center w-full max-w-[90%] md:max-w-[65.875rem]">
        <div className="flex flex-col md:flex-row text-left w-full gap-[1.5rem] mb-[3rem]">
          <h2 className="text-[2.5rem]">Sobre Mi</h2>
          <div className="self-center  w-[83%] h-[0.125rem] my-4 bg-custom-gray"></div>
        </div>

        <section className=" border-[1px] rounded-[4px] border-[#272727] w-[66.25rem]  h-[28.563rem] bg-custom-gray-about flex flex-row gap-[32px] p-[3rem] mb-[1.5rem]">
          <div className="w-[22.875rem] h-[22.563rem] my-auto mx-auto">
            <img
              src={Photo}
              className="w-full h-full rounded-[4px] object-cover mx-auto"
              alt="Eduard Ortegón"
            />
          </div>
          <div className="flex flex-col self-center w-[566px] h-[308px] gap-[1.5rem] ">
            <h2 className=" text-[1.5rem] font-semibold">
              Ingeniero Electrónico con conocimiento en datos e inteligencia
              artificial
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
