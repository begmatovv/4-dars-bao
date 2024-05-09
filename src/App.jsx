import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
  Error,
} from "./pages";
import { loader as FeaturedLoader } from "./pages/Landing";
import { loader as SingleLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: FeaturedLoader,
        },
        {
          path: "/products",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
          loader: SingleLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
export default App;
