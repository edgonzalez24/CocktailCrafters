import ProductListComponent from '../components/ProductListComponent';
import { useSelector } from 'react-redux';
import BackArrowComponent from '../components/UI/BackArrowComponent';

const FavoritiesDrinks = () => {
  const favoriteDrinks = useSelector((state) => state.favorite.drinks);
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <BackArrowComponent to="/" />
      </div>
      <div className="">
        <ProductListComponent
          products={favoriteDrinks}
          title="Favorities Drinks"
        />
      </div>
    </main>
  );
}

export default FavoritiesDrinks;
