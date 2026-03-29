import { useState } from "react";
import "./FavoriteCard.scss";
import { MdDelete } from "react-icons/md";
const FavoriteCard = () => {
  const [showDelBtn, setShowDelBtn] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => setShowDelBtn(true)}
      className="favoriteCard"
      onMouseOut={() => setShowDelBtn(false)}
    >
      <img
        src="https://m.media-amazon.com/images/I/A1JJ1BwMHoL._AC_UF894,1000_QL80_.jpg"
        alt=""
      />
      <div className="info">
        <h2>A War</h2>
        <button style={{ display: showDelBtn ? "flex" : "none" }}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
