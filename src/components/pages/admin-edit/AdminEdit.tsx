import { useForm } from "react-hook-form";
import "./AdminEdit.scss";
import { toast, ToastContainer } from "react-toastify";

interface IDataMovie {
  title: string;
  year: number;
  description: string;
  image: string;
}

const AdminEdit = () => {
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
    <section id="admin-edit">
      <div className="container">
        <div className="admin">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqFUUC4oDHmVx6Tz7-6oTEs4qwJ6onXWFJg&s"
            alt=""
          />
          <form onSubmit={handleSubmit(handleData, onError)} className="title">
            <h1>Admin edit</h1>

            <input
              {...register("title", {
                required: "Введите название",
                minLength: { value: 2, message: "Минимум 2 символа" },
              })}
              type="text"
              placeholder="Title..."
            />

            <input
              {...register("year", {
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Year..."
            />
            <input
              {...register("description")}
              type="text"
              placeholder="Description..."
            />
            <input
              {...register("image", {
                required: "Вставьте ссылку на картинку",
              })}
              type="text"
              placeholder="Image..."
            />

            <button type="submit">create</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default AdminEdit;