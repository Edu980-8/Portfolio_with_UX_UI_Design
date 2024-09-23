import Contribution_Card from "../components/Contribution_Card";
import preview_Rick_Morty from "../assets/Rick_Morty.png";
import preview_PSO_McLaren from "../assets/PSO_McLaren.png";
import preview_Spotify from "../assets/spotify_api.png";

const contributionProjects = [
  {
    image: preview_Rick_Morty,
    project_name: "Rick y Morty Api ",
    description:
      "Aplicacion fullstack, frontend implementado mediante diseño Figma proveido por UX/UI, backend permite a traves de middlewares la conexion con el server implementado en Express.",
    techs: ["React", "Redis", "Tailwind", "Express", "Graphql"],
  },
  {
    image: preview_PSO_McLaren,
    project_name: "McLaren PSO",
    description:
      "Articulo escrito para la presentacion de un algoritmo PSO aplicado en la optimizacion de la estrategia de carrera de autos de la escuderia McLaren.",
    techs: ["Python", "Matlab"],
  },
  {
    image: preview_Spotify,
    project_name: "Spotify API",
    description:
      "Integración con la API de Spotify usando OAuth 2.0. El backend obtiene mercados, géneros y la playlist Top 50 de una región. Los datos se procesan con pandas y se generan archivos CSV según los géneros musicales encontrados.",
    techs: ["Python", "Excel"],
  },
];

const Contribution_List = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-10 px-4 sm:px-0">
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full max-w-[65.875rem] gap-4">
          <div className="bg-custom-gray h-[0.125rem] flex-1"></div>
          <h1 className="text-[2.5rem] mx-4">Contribuciones</h1>
          <div className="bg-custom-gray h-[0.125rem] flex-1"></div>
        </div>
      </div>

      {/* Ajustar el grid para pantallas pequeñas y medianas */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-1 w-full max-w-[65.875rem] gap-[2.25rem] mt-4 mb-10 justify-items-center sm:gap-[1.5rem] sm: mt-0 sm: gap-[3px] sm: mb-0">
        {contributionProjects.map((project, index) => (
          <Contribution_Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Contribution_List;
