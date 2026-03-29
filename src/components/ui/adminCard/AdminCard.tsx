import "./AdminCard.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const AdminCard = () => {
  return (
    <div className="adminCard">
      <img
        src="https://image.tmdb.org/t/p/original/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg"
        alt=""
      />
      <div className="info">
        <h1>zootopia 2</h1>
        <h3>22.03.2022</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          nesciunt eaque sequi! Exercitationem, ea eligendi! Modi id accusamus
          voluptates, ipsam laborum eveniet esse, recusandae aspernatur
          similique, tempore nam. Recusandae tempore voluptas nesciunt quis
          esse, autem accusamus mollitia ea dolore vero reprehenderit neque?
          Beatae quis laudantium nobis! Sint tempore enim recusandae!
        </p>
        <div className="btns">
          <button>
            <RiDeleteBin6Line /> delete
          </button>
          <button>
            <FiEdit /> edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
