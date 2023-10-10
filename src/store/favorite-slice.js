import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    drinks: localStorage.getItem('drinks') ? JSON.parse(localStorage.getItem('drinks')) : []
  },
  reducers: {
    addFavoriteDrink (state, action) {
      const { idDrink, strDrinkThumb, strDrink, strGlass, strCategory } = action.payload;
      state.drinks.push({
        idDrink,
        strDrinkThumb,
        strDrink,
        strGlass,
        strCategory
      })
      localStorage.setItem('drinks', JSON.stringify(state.drinks))
    },
    removeFavoriteDrink(state, action) {
      const drinkIndex = state.drinks.findIndex(drink => drink.idDrink === action.payload);
      if (drinkIndex !== -1) {
        state.drinks.splice(drinkIndex, 1);
      }
      localStorage.setItem('drinks', JSON.stringify(state.drinks))
    },
  }
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;