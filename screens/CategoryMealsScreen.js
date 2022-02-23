import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-category";
import { MEALS } from "../data/dummy-meals";

const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList data={meals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: category.title,
  };
};

export default CategoryMealsScreen;
