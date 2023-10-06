import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductListComponent from './ProductListComponent';

const PopularDrinksComponents = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getPopularDrinks = async () => {
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
      }
    };

    return () => getPopularDrinks();
  }, []);

  return <ProductListComponent products={drinks} />;
}

export default PopularDrinksComponents;
