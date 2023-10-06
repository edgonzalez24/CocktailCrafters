import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailDrink = () => {
  const [drink, setDrink] = React.useState({});
  const { id } = useParams();

    React.useEffect(() => {
      const getDrink = async () => {
        try {
          const { data: { drinks }} = await axios.get(`${import.meta.env.VITE_BASE_URL}/lookup.php?i=${id}`);
          setDrink(drinks[0]);
        } catch (error) {
          console.error(error);
        }
      };

      return () => getDrink();
    }, [id]);
  return (
    <main className="min-h-screen container mx-auto">
      <h1>{drink.strDrink}</h1>
    </main>
  );
}

export default DetailDrink;
