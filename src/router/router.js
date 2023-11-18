import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import ClubHome from "../pages/ClubHome";
import RegisterClub from "../pages/RegisterClub";
import Clubs from "../pages/Clubs";
import Posts from "../pages/Posts";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    // errorElement: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/clubs/register",
        element: <RegisterClub />,
      },
      {
        path: "/club",
        element: <ClubHome />,
      },
      {
        path: "/club/posts",
        element: <ClubHome />,
      },
      {
        path: "/club/schedule",
        element: <ClubHome />,
      },
      {
        path: "/club/album",
        element: <ClubHome />,
      },
    ],
  },
]);

export default router;
