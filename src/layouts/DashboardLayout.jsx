import { Link, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardLayout = () => {
  const { pathname } = useLocation();
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
        <div className="col-span-2 bg-gray-100 min-h-screen p-12 text-lg">
          <ul>
            <li
              className={`${
                pathname === "/dashboard"
                  ? "bg-primary text-white"
                  : "text-black"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={""}>Dashboard</Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/all-products"
                  ? "bg-primary text-white"
                  : "text-black"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"all-products"}>All Products</Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/add-products"
                  ? "bg-primary text-white"
                  : "text-black"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"add-products"}>Add Product</Link>
            </li>
            <li
              className={`${
                pathname === "/home" ? "bg-primary text-white" : "text-black"
              }  px-4 py-2 rounded text w-full`}
            >
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
