import Contact_Buttons from "./Contact_Buttons";
const Banner = () => {
  return (
    <div className="w-full  flex justify-center">
      <div className="flex flex-col justify-center  w-[1068px] h-[383px] border border-custom-gray mb-10 rounded-[4px] ">
        <div className="flex flex-col w-full h-[289px]  text-center  justify-center gap-[24px]  ">
          <div className="w-full h-[105px] ">
            <h2 className=" text-[2.5rem] font-medium leading-[3.75rem]">¿Listo para dar vida a tus ideas?</h2>
            <h3 className=" text-[2rem] font-light leading-[3rem]">Puedo impulsar tu proyecto o hacer parte de tu equipo.</h3>
          </div>
          <Contact_Buttons />
        </div>
      </div>
    </div>
  );
};

export default Banner;
