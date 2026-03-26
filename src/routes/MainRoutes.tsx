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

// 1. Задача алынды
// 2. git pull origin master
// 3. задача кылынат
// 4. git switch -c ветка
// 5. git add .
// 6. git commit -m "task"
// 7. git push origin ветка
// 8. github, compare and pull request
