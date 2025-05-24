import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React from "react";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
);
