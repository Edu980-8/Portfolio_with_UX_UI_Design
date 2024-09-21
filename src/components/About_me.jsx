import Photo from "../assets/me.png";
const About_me = () => {
  return (
    <div className="mt-10 mb-10 flex justify-center">
      <div className="flex flex-col items-center w-full max-w-[90%] md:max-w-[65.875rem]">
        <div className="flex flex-col md:flex-row text-left w-full gap-[1.5rem] mb-[3rem]">
          <h2 className="text-white text-[2rem] md:text-[2.5rem]">Sobre Mi</h2>
          <div className="self-center  w-[83%] h-[0.125rem] my-4 bg-custom-gray"></div>
        </div>

        <section className="grid grid-cols-2  gap-1 ">
          <div className=" w-[22.875rem] h-[22.563rem] my-auto mx-auto">
            <img src={Photo} className="rounded-[4px]" alt="" />
          </div>
          <div className="w-[35.375rem] h-[19.25rem] flex flex-col gap-[1.5rem]">
            <h2 className="text-white text-[2rem] leading-[2.875rem] ">Ingeniero Electrónico con conocimiento de datos e inteligencia artificial</h2>
            <p className="text-custom-exp-gray text-[1rem]">
              Mi nombre es Eduard Ortegón, desarrollador de software e ingeniero Electrónico colombiano, con  experiencia en el desarrollo de paginas web y construccion de algoritmos capaces de resolver problemas relacionados con data e inteligencia artificial. Me apasiona la programación y mi lenguaje favorito es Python. Actualmente, me encuentro realizando una maestria en inteligencia artificial en la universidad de la Rioja (UNIR), lo que demuesra mi afinidad por el aprendizaje y mis ganas de seguir aprendiendo todos los dias.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About_me;
