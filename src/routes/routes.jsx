import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import AddProducts from "../pages/AddProducts";
import AllProducts from "../pages/AllProducts";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:8000/shoes`),
      },
      {
        path: "/shoe/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/shoes/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      // {
      //   path: "all-products/edit/:id",
      //   element: <EditProducts />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/shoes/${params.id}`),
      // },
    ],
  },
]);
