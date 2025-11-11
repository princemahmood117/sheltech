import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
// import About from "../../Pages/About/About";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout wrapper
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : '/login',
        element: <Login></Login>
      },
      {
        path : '/sign-up',
        element: <SignUp></SignUp>
      },
    ],
  },
]);

export default router;
