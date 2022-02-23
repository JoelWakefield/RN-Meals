import { MEALS } from "../../data/dummy-meals";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const index = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      if (index >= 0) {
        const updatedFavorites = [...state.favoriteMeals];
        updatedFavorites.splice(index, 1);
        return { ...state, favoriteMeals: updatedFavorites };
      } else {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(
            state.meals.find((meal) => meal.id === action.mealId)
          ),
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
