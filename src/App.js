import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import SearchPage, { loader as searchLoader } from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import AuthPage, { action as authPageAction } from "./pages/AuthPage";
import { tokenLoader } from "./components/utils/auth";
import { logoutAction } from "./pages/Logout";
import ErrorPage from "./pages/ErrorPage";
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
        path: ":id",
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
