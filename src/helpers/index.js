export const isDrinkFavorite = (favoriteDrinks, drinkId) => {
  return favoriteDrinks.some(drink => drink.idDrink === drinkId);
};