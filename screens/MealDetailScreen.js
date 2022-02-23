import { useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const getMeal = (navigation) => {
  const mealId = navigation.getParam("id");
  const meals = useSelector((state) => state.meals.meals);
  return meals.find((m) => m.id === mealId);
};

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("id");
  const meal = getMeal(navigation);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

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
  const meal = getMeal(navigationData.navigation);
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: meal.title,
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
