import { Route, Routes } from "react-router-dom";
import Hero from "../components/pages/hero/Hero";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Hero /> },
    { link: "/", element: "" },
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
