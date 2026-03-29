import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="headerLogo">EcoMovie</div>

          <nav className="headerNav">
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/tv">TV Shows</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
