import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function RelatedProductCard({ data }) {
  const { images, model, price, id } = data || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={images} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model}</h2>
        <p>$ {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/shoe/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
