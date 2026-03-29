import { Route, Routes } from "react-router-dom";
import Admin from "../components/pages/admin/Admin";
import MovieDetail from "../components/pages/movieDetail/MovieDetail";
import AdminMovies from "../components/pages/admin-movies/AdminMovies";
import AdminEdit from "../components/pages/admin-edit/AdminEdit";
import Hero from "../components/pages/hero/Hero";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Hero /> },
    { link: "/admin", element: <Admin /> },
    { link: "/admin-movies", element: <AdminMovies /> },
    { link: "/admin-edit", element: <AdminEdit /> },
    { link: "/movieDetail/:id", element: <MovieDetail /> },
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
