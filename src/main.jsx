import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";

const basename =
  import.meta.env.NODE_ENV === "production"
    ? "/Portfolio_with_UX_UI_Design"
    : "";

console.log("Current basename:", basename); // Muestra el valor de basename en la consola

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
