import Contact_Buttons from "./Contact_Buttons";

const Banner = () => {
  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <div className="flex flex-col justify-center w-full max-w-[1068px] h-auto md:h-[383px] border border-custom-gray mb-10 rounded-[4px] p-6 md:p-8">
        <div className="flex flex-col w-full h-auto md:h-[289px] text-center justify-center gap-[16px] md:gap-[24px]">
          <div className="w-full">
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-medium leading-[2.5rem] md:leading-[3.75rem]">
              ¿Listo para dar vida a tus ideas?
            </h2>
            <h3 className="text-[1.25rem] md:text-[2rem] font-light leading-[2rem] md:leading-[3rem] mt-2">
              Puedo impulsar tu proyecto o hacer parte de tu equipo.
            </h3>
          </div>
          <Contact_Buttons />
        </div>
      </div>
    </div>
  );
};

export default Banner;
