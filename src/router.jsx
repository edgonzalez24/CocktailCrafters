import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Default from "./layout/Default";
import DetailDrink from "./pages/DetailDrink";
import FavoritiesDrinks from "./pages/FavoritiesDrinks";

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
            element: <DetailDrink />,
          },
        ],
      },
      {
        path: 'drinks',
        children: [
          {
            path: 'favorities',
            element: <FavoritiesDrinks />,
          },
        ],
      },
    ],
  },
]);