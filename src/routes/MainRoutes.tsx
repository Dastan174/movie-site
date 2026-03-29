import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Admin from "../components/pages/admin/Admin";
import MovieDetail from "../components/pages/movieDetail/MovieDetail";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home/> },
    { link: "/admin", element: <Admin/> },
    { link: "/movieDetail", element: <MovieDetail/> },
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
