import "./landing_content.css";

const landing_content = () => {
  return (
    <div className="landing-content">
      <section className="landing-section">
        <div className="tag_container">
          <p>Disponible para trabajar</p>
        </div>

        <h1 className="landing-h1">Hola, soy Eduard Ortegón </h1>
        <h2 className="landing-h2">
          <span>
            Desarrollador de software, soporte técnico e Ingeniero Electrónico{" "}
          </span>{" "}
          de Bogotá, Colombia.
        </h2>
        <h2 className="landing-h2">
          Estudiante de Maestria en Inteligencia Artificial, especialista en Python.
        </h2>
        <div className="landing-button-container">
          <button className="landing-button" id="first-button">
            Contáctame
          </button>
          <button className="landing-button" id="second-button">
            LinkedIn
          </button>
        </div>
      </section>
    </div>
  );
};

export default landing_content;
