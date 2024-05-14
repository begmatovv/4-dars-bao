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
import { loader as FeaturedLoader } from "./pages/Landing";
import { loader as SingleLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";

import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { ProtectedRotes } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { authReady, login } from "./features/user/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
function App() {
  const { user,authReadyState } = useSelector((state) => state.userState);

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
      element: user ? <Navigate to="/" /> : <Login />,
      errorElement: <Error />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      errorElement: <Error />,
      action: RegisterAction,
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReady());
    });
  }, []);
  return <>{ authReady && <RouterProvider router={routes} />}</>;
}
export default App;
