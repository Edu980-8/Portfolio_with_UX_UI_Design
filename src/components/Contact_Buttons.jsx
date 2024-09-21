const Contact_Buttons = () => {
  return (
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
        <img src="../../src/assets/linkedin.png" alt="" className="w-4 h-4" />
        <p>LinkedIn</p>
      </button>
    </div>
  );
};

export default Contact_Buttons;
