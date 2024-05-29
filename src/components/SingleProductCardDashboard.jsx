/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsInfoSquare } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, images } = shoe;

  const handleDelete = async () => {
    confirm(`Are you want to delete this product???`);
    await fetch(`http://localhost:8000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        onDelete(id);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={images} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">$ {price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-info text-white">
            <Link to={`/shoe/${id}`}>
              <BsInfoSquare />
            </Link>
          </button>
          <button className="btn bg-success text-white">
            <Link to={`edit/${id}`}>
              <FiEdit />
            </Link>
          </button>
          <button onClick={handleDelete} className="btn bg-error text-white">
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
