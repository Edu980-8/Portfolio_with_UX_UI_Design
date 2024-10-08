import { useState } from "react";
import { useTheme } from "../ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const works = [
    {
      name: "Desarrollador de Software (contratista AT&T)",
      date: "Ago. 2023 - Abr. 2024",
      general_description:
        "Desarrollador de Pagina Web y creador de bots en Power Platform.",
      activities: [
        "Creé soluciones automatizadas utilizando Power Automate, tanto en su versión en la nube como en escritorio. Mi contribución se orientó en la mejora y el mantenimiento de bots, así como la implementacion de flujos en la nube.",
        "Desarrollé automatizaciones RPA basadas en Power Automate Cloud y Desktop, junto con model driven apps, quick view forms, SharePoints y Power Apps, integrando eficientemente las necesidades del producto con el negocio tecnológico.",
        "Utilizando tecnologías como React, JavaScript, HTML y CSS, ademas de Azure para el despliegue, contribuí en la creacion de la pagina web de la marca. Para hacer mas eficientes los esfuerzos de implementacion se trabajo bajo metodologia Scrum.",
        "Resolví tickets de usuarios en tiempo real enfocados en problemas de Power Platform y Power Automate para AT&T, brindando soporte técnico inmediato a través de mis habilidades de comunicación y conocimientos técnicos."
      ],
      company: "5IG Solutions",
    },
    {
      name: "Agente de Servicio al Cliente",
      date: "Ago. 2022 - Ago. 2023",
      general_description:
        "Agente enfocado en atención al cliente, que mejora la experiencia mediante comunicación efectiva y empatía.",
      activities: [
        "Proporcioné atención al cliente para Macy's y Bloomingdales, lo que mejoró significativamente mis habilidades comunicativas en inglés y me permitió resolver consultas de manera eficiente.",
        "Desarrollé habilidades de escucha activa y comunicación clara, asegurando que los clientes comprendieran completamente la información proporcionada y recibieran soluciones adecuadas.",
        "Manejé situaciones difíciles con empatía y paciencia, resolviendo problemas de manera profesional y contribuyendo a aumentar la satisfacción y lealtad del cliente.",
      ],
      company: "Concentrix",
    },
    {
      name: "Desarrollador de Software",
      date: "Feb. 2022 - Jul. 2022",
      general_description:
        "Desarrollador encargado del análisis geoespacial y procesamiento de datos para optimización de operaciones.",
      activities: [
        "Contribuí a la implementación de un algoritmo para relacionar usuarios con la geometría más cercana, utilizando librerías geoespaciales como Shapely y Geopandas de Python. El objetivo era optimizar la asignación de recursos eléctricos en función de la proximidad geográfica, mejorando la eficiencia en la distribución de servicios.",
        "Realicé análisis previo de los datos con KNIME para generar categorías específicas a analizar, lo que aumentó la precisión del análisis y facilitó la toma de decisiones.",
      ],
      company: "Enel Codensa",
    },
  ];

  const [selectedCompany, setSelectedCompany] = useState(works[0].company);

  const filteredWorks = selectedCompany
    ? works.filter((work) => work.company === selectedCompany)
    : works;

  const companies = Array.from(new Set(works.map((work) => work.company)));

  return (
    <div id="experience" className="mb-10 flex justify-center pt-[5.8rem]">
      <div className="flex flex-col items-center w-full max-w-[90%] md:max-w-[65.875rem]">
        <div className="flex flex-col md:flex-row text-left w-full gap-[1.5rem] mb-[3rem]">
          <h2 className="text-[2rem] md:text-[2.5rem]">Experiencia Laboral</h2>
          <div className="self-center w-[60%] h-[0.125rem] my-4 bg-custom-gray md:block hidden"></div>
        </div>

        <div className="flex flex-col md:flex-row h-auto w-full gap-4">
          {/* Lista de compañías */}
          <ul className="flex md:flex-col overflow-x-auto w-full md:w-[20rem] scrollbar-hide mb-6">
            {companies.map((company, index) => (
              <li
                key={index}
                onClick={() => setSelectedCompany(company)}
                className={`cursor-pointer h-[3.813rem] flex items-center px-4 text-[1.25rem] md:text-[1.5rem] md:border-l-[2px] sm:border-b-[2px] md:pb-2 scrollbar-hide ${
                  selectedCompany === company
                    ? "font-bold md:border-l-[5px] border-b-4" // Borde inferior más ancho cuando está seleccionado
                    : `${
                        isDarkMode ? "text-custom-gray" : "text-custom-gray"
                      } border-b-0` // Sin borde inferior si no está seleccionado
                } ${
                  isDarkMode ? "border-black" : "border-white"
                } md:border-b-0`}
              >
                {company}
              </li>
            ))}
          </ul>

          {/* Lista de trabajos filtrados */}
          <div className="w-full md:w-[46.563rem]">
            <ul className="list-none">
              {filteredWorks.map((work, index) => (
                <li key={index}>
                  <h3 className="font-semibold text-[1.25rem] md:text-[1.5rem] mb-4">
                    {work.name}
                  </h3>
                  <p className="mb-4">{work.general_description}</p>
                  <p className="text-custom-exp-gray text-[1rem] mb-4">
                    {work.date}
                  </p>
                  <ul
                    className={`pl-5 list-disc text-[1rem] ${
                      isDarkMode ? "text-custom-gray" : "text-custom-exp-gray"
                    }`}
                  >
                    {work.activities.map((activity, index) => (
                      <li className="mb-4" key={index}>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
