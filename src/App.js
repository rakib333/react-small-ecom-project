import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./components/Loader/productsAndCartLoader";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import HomePage from "./pages/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      children: [
        {
          path: "/",
          loader: productsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: "/shop",
          loader: productsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        { path: "/inventory", element: <Inventory></Inventory> },
        { path: "/about", element: <About></About> },
        { path: "/login", element: <Login></Login> },
      ]
    }

    
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
