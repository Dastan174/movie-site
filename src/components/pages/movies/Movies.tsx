import CarouselCard from "../../ui/CarouselCard";
import "./Movies.scss";

const Movies = () => {
  return (
    <section>
      <div id="movies">
        <div className="container">
          <div className="movies">
            <div className="title">
              <h2>Trending</h2>
              <div className="btns">
                <button className="day">Day</button>
                <button className="week">Week</button>
              </div>
            </div>
            <div className="cards">
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
              <CarouselCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
