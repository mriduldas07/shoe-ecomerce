import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({ data }) => {
  const { id, images, model, description, brand, inStock } = data || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <div
          className="tooltip tooltip-open absolute left-11 top-10 font-bold tooltip-primary"
          data-tip={brand}
        ></div>
        <img src={images} alt="Shoes" />
      </figure>
      <div className="card-body relative">
        <div
          className="tooltip tooltip-open absolute right-14 top-10 font-bold tooltip-accent"
          data-tip={inStock ? "In Stock" : "Not available"}
        ></div>
        <h1 className="card-title">{model}</h1>
        <p>{description.slice(0, 100) + `...`}</p>
        <div className="card-actions justify-end">
          <Link to={`/shoe/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
