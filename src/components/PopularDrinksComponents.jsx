import axios from 'axios';
import React from 'react';
import ProductListComponent from './ProductListComponent';

const PopularDrinksComponents = () => {
  const [drinks, setDrinks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getPopularDrinks = async () => {
    setIsLoading(true);
    try {
      const myArr = await Promise.all(
        Array.from({ length: 8 }).map(async () => {
          const {
            data: { drinks: products },
          } = await axios.get(`${import.meta.env.VITE_BASE_URL}/random.php`);
          return products;
        })
      );

      setDrinks((prevDrinks) => [...prevDrinks, ...myArr.flat()]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getPopularDrinks();
  }, []);

  return <ProductListComponent products={drinks} title="Popular Drinks" isLoading={isLoading} isEmpty={true}/>;
}

export default PopularDrinksComponents;
