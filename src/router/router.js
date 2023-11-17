import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ClubHome from '../pages/ClubHome';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    // errorElement: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/club',
        element: <ClubHome />,
      },
      {
        path: '/club/posts',
        element: <ClubHome />,
      },
      {
        path: '/club/schedule',
        element: <ClubHome />,
      },
      {
        path: '/club/album',
        element: <ClubHome />,
      },
    ],
  },
]);

export default router;
