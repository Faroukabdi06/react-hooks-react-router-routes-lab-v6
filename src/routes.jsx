import { createBrowserRouter } from "react-router-dom";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/Actors",
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/Directors",
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
    errorElement: <ErrorPage />
  }
];

export default routes;
