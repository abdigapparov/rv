import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ShoppingCartPage from "./components/ShoppingCartPage.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";
import SignupPage from "./components/SignupPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>
  },
  {
        path : '/about',
    element: <AboutPage/>
  },
  {
    path : '/catalog',
    element : <ProductCatalog/>
  },
  {
    path : '/CartPage',
    element : <ShoppingCartPage/>
  },
  {
    path : './SignUp',
    element : <SignupPage/>
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>


     <RouterProvider router={router} />
  </StrictMode>
);