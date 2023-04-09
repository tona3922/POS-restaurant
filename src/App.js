// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import LoginPage from "./containers/LoginPage";
import Root from "./containers/Root";
import SignupPage from "./containers/SignupPage"
import Menu from "containers/Menu/menu";

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
        path: "menu",
        element: <Menu />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
