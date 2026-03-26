import "./AdminCard.scss";
import { useForm } from "react-hook-form";

import { toast, ToastContainer } from "react-toastify";

interface IDataMovie {
  title: string;
  year: number;
  description: string;
  image: string;
}

const AdminCard = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IDataMovie>();

  const handleData = (data: IDataMovie) => {
    console.log(data);
    reset();
  };

  const onError = (errors: any) => {
    if (errors.title?.message) {
      toast.error(errors.title.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "pink",
      });
      if (errors.image.message) {
        toast.error(errors.image.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "pink",
        });
      }
    }
  };
  return (
    <div className="adminCard">
      <img
        src="https://image.tmdb.org/t/p/original/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg"
        alt=""
      />
      <div className="info">
        <h3>zootopia 2</h3>
        <h5>22.03.2022</h5>
      </div>
      <div className="btns">
        <button>delete</button>
        <button>edit</button>
        <button>details-page</button>
      </div>
    </div>
  );
};

export default AdminCard;
//  <div className="btns">
//         <button>delete</button>
//         <button>edit</button>
//         <button>details-page</button>
//       </div>