import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import BulkOrder from "./components/BulkOrder";
import Seller from "./components/Seller";
import OrderSummary from "./components/OrderSummary";
import Checkout from "./components/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "enquiry",
        element: <BulkOrder />,
      },
      {
        path: "seller",
        element: <Seller />,
      },
      {
        path: "cart",
        element: <OrderSummary />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
