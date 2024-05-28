import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex justify-center items-center flex-wrap gap-5 pb-8 ">
        {products.map((p) => (
          <SingleProduct key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
