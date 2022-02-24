import { useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("id");

  const availableMeals = useSelector((state) => state.mealsReducer.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.mealsReducer.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const meal = availableMeals.find((m) => m.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <View style={styles.screen}>
      <View style={styles.itemsContainer}>
        {meal.ingredients.map((i) => (
          <View style={styles.item}>
            <Text key={i}>{i}</Text>
          </View>
        ))}
      </View>
      <View style={styles.itemsContainer}>
        {meal.steps.map((i) => (
          <View style={styles.item}>
            <Text key={i}>{i}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
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
  itemsContainer: {
    padding: 10,
  },
  item: {
    borderWidth: 1,
  },
});
export default MealDetailScreen;
