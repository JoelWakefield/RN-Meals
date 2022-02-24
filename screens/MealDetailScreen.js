import { useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = ({ navigation }) => {
  const meals = useSelector((state) => state.mealsReducer.meals);
  const mealId = navigation.getParam("id");
  const meal = meals.find((m) => m.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ mealTitle: meal.title });
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [meal, toggleFavoriteHandler]);

  return (
    <View style={styles.screen}>
      <View style={styles.ingredientsContainer}>
        {meal.ingredients.map((i) => (
          <Text key={i}>{i}</Text>
        ))}
      </View>
      <View style={styles.stepsContainer}>
        {meal.steps.map((i) => (
          <Text key={i}>{i}</Text>
        ))}
      </View>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={toggleFavorite} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ingredientsContainer: {},
  stepsContainer: {},
});
export default MealDetailScreen;
