import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import SearchPage, { loader as searchLoader } from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import AuthPage, { action as authPageAction } from "./pages/AuthPage";
import { tokenLoader } from "./components/utils/auth";
import { logoutAction } from "./pages/Logout";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage, { loader as detailsLoader } from "./pages/DetailsPage";
import OrdersHistory, {
  loader as orderLoader,
  action as orderAction,
} from "./pages/OrderHistory";
import AboutUsPage from "./pages/AboutUsPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    id: "layout",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "auth",
        element: <AuthPage />,
        action: authPageAction,
      },
      {
        path: "manga/:id",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
      {
        path: "orders",
        element: <OrdersHistory />,
        loader: orderLoader,
        action: orderAction,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
