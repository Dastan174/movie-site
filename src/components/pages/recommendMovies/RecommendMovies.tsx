import "./RecomMovies.scss";

import RecommendCard from "./../../ui/recommendCard/RecommendCard";
const RecomMovies = () => {
  return (
    <section id="recommendations">
      <div className="container">
        <div className="recommendations">
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
          <RecommendCard />
        </div>
      </div>
    </section>
  );
};

export default RecomMovies;
