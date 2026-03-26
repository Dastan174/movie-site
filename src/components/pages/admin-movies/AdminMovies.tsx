import AdminCard from "../../ui/adminCard/AdminCard";
import "./AdminMovies.scss";
const AdminMovies = () => {
  return (
    <section id="adminMovies" className="">
      <div className="container">
        <div className="adminMovies">
            <AdminCard/>
            <AdminCard/>
            <AdminCard/>
            <AdminCard/>
        </div>
      </div>
    </section>
  );
};

export default AdminMovies;
