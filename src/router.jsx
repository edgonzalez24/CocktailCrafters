import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Default from "./layout/Default";
import DetailDrink from "./pages/DetailDrink";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'drink',
        children: [
          {
            path: ':id',
            element: <DetailDrink />
          }
        ]
      },
    ],
  },
]);