import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardLayout = () => {
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-gray-300 min-h-screen p-12">
          <ul>
            <li className="bg-primary text-white px-4 py-2 rounded  text w-full">
              <Link to={""}>Dashboard</Link>
            </li>
            <li className="border border-black p-4 text w-full">
              <Link to={"all-products"}>All Products</Link>
            </li>
            <li className="border border-black p-4 text w-full">
              <Link to={"add-products"}>Add Product</Link>
            </li>
            <li className="border border-black p-4 text w-full">
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 p-20">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DashboardLayout;
