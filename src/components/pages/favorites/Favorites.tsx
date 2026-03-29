import "./Favorites.scss";
import FavoriteCard from "../../ui/favorites/FavoriteCard";
import RecomMovies from "../recommendMovies/RecomMovies";
const Favorites = () => {
  return (
    <>
      <section id="favorites">
        <div className="container">
          <div className="favorites">
            <h1>
              <em>Favorites</em>
            </h1>
            <div className="list">
              <FavoriteCard />
              <FavoriteCard />
              <FavoriteCard />
              <FavoriteCard />
              <FavoriteCard />
              <FavoriteCard />
              <FavoriteCard />
              <FavoriteCard />
            </div>
            <button className="clear">Очистить избранные</button>
          </div>
        </div>
      </section>
      <RecomMovies />
    </>
  );
};

export default Favorites;
