import { Route, Routes } from "react-router-dom";
import Favorites from "../components/pages/favorites/Favorites";
import Home from "../components/pages/home/Home";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "/favorites", element: <Favorites /> },
  ];
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route path={item.link} element={item.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
