import type { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Menu from "../components/pages/Menu";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    // dynamic route
    path: "/menu/:id",
    element: <Menu />,
  },
];

export default routes;
