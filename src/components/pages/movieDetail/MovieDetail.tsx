import CarouselCard from "../../ui/carouselCard/CarouselCard";
import "./Moviedetail.scss";
const MovieDetail = () => {
  return (
    <>
      <section id="movieDetail">
        <div className="container">
          <div className="movieDetail">
            <div className="list">
              <img
                src="https://image.tmdb.org/t/p/original/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg"
                alt=""
              />
              <div className="text">
                <h1>zootopia 2</h1>
                <h3>22.03.2023</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  molestias dignissimos alias explicabo? Aut sed repellat
                  aspernatur nulla modi, dicta, ut rem sit amet, deleniti ullam?
                  Porro, id? Consequatur vero quasi eum mollitia laboriosam
                  numquam praesentium officiis voluptatibus odio itaque. Fugit
                  cupiditate totam accusantium molestias obcaecati eaque, a odit
                  quia cum quam. Repudiandae in illum beatae nostrum facilis
                  laudantium expedita consequuntur eaque! Corporis doloremque in
                  amet expedita tempore modi delectus sed ex consectetur
                  voluptatem? Autem alias expedita facere doloribus aperiam
                  illum, atque reiciendis soluta quidem, porro unde?
                  Exercitationem perspiciatis ex quas similique sequi nemo cum
                  sint, quae amet! Corrupti, a!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="carouselCard">
        <h2>Similar Movies</h2>
          <div className="Card">
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
          </div>
      </section>
    </>
  );
};

export default MovieDetail;
