import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRoutes from "../src/routes/routes";
import TestimonialsContextProvider from "./contexts/testimonialsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestimonialsContextProvider>
      <MyRoutes />
    </TestimonialsContextProvider>
  </React.StrictMode>
);
