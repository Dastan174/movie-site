import "./Hero.scss";

const Hero = () => {
  return (
    <section>
      <div id="hero">
        <div className="hero">
          <img
            src="https://image.tmdb.org/t/p/original/5rxEnsgriw8z065q51lrvPKYmCL.jpg"
            alt=""
          />
          <div className="hero-text">
            <h1>Welcome to movie site</h1>
            <h4>
              Millions of movies, TV shows and people to discover. Explore now.
            </h4>
            <div className="input-btn">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
