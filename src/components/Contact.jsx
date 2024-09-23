import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1.75rem] h-auto gap-[1rem] fixed bottom-0 left-4 ">
      <a href="https://github.com/Edu980-8" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-[1.75rem] h-[1.75rem] hover:w-[1.875rem] hover:text-custom-exp-gray " />
      </a>
      <a href="https://www.linkedin.com/in/eduardortegon/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-[1.75rem] h-[1.75rem] hover:w-[1.875rem] hover:text-custom-exp-gray" />
      </a>
      <a href="mailto:eduardortegon2398@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdEmail className="w-[1.75rem] h-[1.75rem] hover:w-[1.875rem] hover:text-custom-exp-gray" />
      </a>
      <div className="w-[1px] h-[7.938rem] bg-custom-gray md:h-[0.125rem] "></div>
    </div>
  );
};

export default Contact;
