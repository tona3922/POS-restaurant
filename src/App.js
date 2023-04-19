// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "error-page";
import LoginPage from "containers/LoginPage";
import Root from "containers/Root";
import SignupPage from "containers/SignupPage";
import { CartPage } from "containers/Cart";
import Menu from "containers/Menu/menu";

import { MenuDetail } from "components/MenuDetail/MenuDetail/MenuDetail";
import { CHEFBOX } from "./components/MenuDetail/tabs/storage/chefbox";
import { SALAD } from "./components/MenuDetail/tabs/storage/salad";
import { NOODLE } from "./components/MenuDetail/tabs/storage/udon";
import { SAKE } from "./components/MenuDetail/tabs/storage/sake";
import { SASHIMI } from "components/MenuDetail/tabs/storage/sashimi";
import { Standard } from "./components/MenuDetail/tabs/standard/standard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Delivery } from "components/Delivery/Delivery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/*",
        element: <Menu />,
      },
      {
        path: "detail/:id",
        element: <MenuDetail />,
      },
      {
        path: "delivery",
        element: <Delivery />,
      },
      {
        path: "detail/:id/salad",
        element: <Standard props={SALAD} title={"Salad"} />,
      },
      {
        path: "detail/:id/chefbox",
        element: <Standard props={CHEFBOX} title={"Chef's box"} />,
      },
      {
        path: "detail/:id/noodle",
        element: <Standard props={NOODLE} title={"Noodle"} />,
      },
      {
        path: "detail/:id/sake",
        element: <Standard props={SAKE} title={"Noodle"} />,
      },
      {
        path: "detail/:id/sashimi",
        element: <Standard props={SASHIMI} title={"Sashimi"} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
