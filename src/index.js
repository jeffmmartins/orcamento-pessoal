import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from "./routes/Cadastro";
import Consulta from "./routes/Consulta";
import ErroPage from "./routes/ErroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage/>,
    children: [
      {
        path: "/",
        element: <Cadastro />,
      },
      {
        path: "/consulta",
        element: <Consulta />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
