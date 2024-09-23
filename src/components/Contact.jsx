import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full h-auto gap-[2rem] sm:fixed bottom-0 left-4 sm:left-2 sm:gap-4">
      {/* Contenedor de íconos */}
      <div className="flex flex-row sm:flex-col items-center gap-5 sm:gap-3">
        <a href="https://github.com/Edu980-8" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-[1.75rem] h-[1.75rem] hover:text-custom-exp-gray" />
        </a>
        <a href="https://www.linkedin.com/in/eduardortegon/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-[1.75rem] h-[1.75rem]  hover:text-custom-exp-gray" />
        </a>
        <a href="mailto:eduardortegon2398@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className="w-[1.75rem] h-[1.75rem]  hover:text-custom-exp-gray" />
        </a>
        <div className="hidden sm:block w-[1px] h-[7.938rem] bg-custom-gray"></div>
      </div>
      {/* La línea se oculta en móvil */}
      
    </div>
  );
};

export default Contact;
