import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
import { useContext, useEffect } from "react";
import ProtectedRotes from "./components/ProtectedRotes";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRotes user={user}>
          <HomeLayout />
        </ProtectedRotes>
      ),
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
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
      path: "/signin",
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
