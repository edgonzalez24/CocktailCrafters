import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackArrowComponent from '../components/UI/BackArrowComponent';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteActions } from '../store/favorite-slice';
import { isDrinkFavorite } from '../helpers';

const DetailDrink = () => {
  const [drink, setDrink] = React.useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const favoriteDrinks = useSelector((state) => state.favorite.drinks);

  const getDrink = async (id) => {
    try {
      const {
        data: { drinks },
      } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/lookup.php?i=${id}`
      );
      const currentDrink = drinks[0];
      setDrink(currentDrink);
    } catch (error) {
      console.error(error);
    }
  };

    React.useEffect(() => {
      getDrink(id);
    }, [id]);

    const isFavorite = isDrinkFavorite(favoriteDrinks, drink.idDrink);

    const addFavoriteHandler = () => {
      const { idDrink, strDrinkThumb, strDrink, strGlass, strCategory } = drink;
      if(!isFavorite) {
        dispatch(
          favoriteActions.addFavoriteDrink({
            idDrink,
            strDrinkThumb,
            strDrink,
            strGlass,
            strCategory,
          })
        );
      } else {
        dispatch(favoriteActions.removeFavoriteDrink(idDrink));
      }
    }
  return (
    <main className="text-gray-700 body-font overflow-hidden bg-white py-10">
      <section className="min-h-screen container mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={drink.strDrinkThumb}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <BackArrowComponent to="/" />
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {drink.strCategory}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {drink.strDrink}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a
                  className={`inline-flex cursor-pointer transition duration-500 ease-in-out ${isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                  onClick={addFavoriteHandler}
                >
                  { isFavorite ? 'Favorite' : 'Add to Favorities'} &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              dolorum facilis sit ducimus consectetur. Blanditiis ab, fugit quam
              asperiores eligendi sequi! Similique, ex. Aspernatur, fugit qui ad
              provident eligendi amet!
            </p>
            <hr className="mt-6 pb-3 h-1 border-gray-200 mb-3"></hr>
            <p className="text-sm title-font text-gray-500 tracking-widest">
              {drink.strAlcoholic}
            </p>
            <p className="title-font font-medium text-2xl text-gray-900">
              {drink.strGlass}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DetailDrink;
