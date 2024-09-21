import Heart from "../assets/Heart.svg";
const Footer = () => {
  return (
    <footer className="bg-black w-full h-[5rem] flex justify-center items-center flex-col">
      <p className="text-white text-center text-[1rem]">
        © 2024 . Diseñado por UX Ana Rangel | Hecho con{" "}
        <span>
          <img src={Heart} alt="" className="inline w-[1rem] h-[1rem] align-middle" />
        </span>{" "}
        por la comunidad de Twitch.
      </p>
      <p className="text-white text-center text-[1rem]">
        © 2024. Implementado por Eduard Ortegón | Código OpenSource
      </p>
    </footer>
  );
};

export default Footer;
