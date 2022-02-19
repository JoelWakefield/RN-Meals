import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-meals";
import HeaderButton from "../components/HeaderButton";

const getMeal = (navigation) => {
  const mealId = navigation.getParam("id");
  return MEALS.find((m) => m.id === mealId);
};

const MealDetailScreen = ({ navigation }) => {
  const meal = getMeal(navigation);

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
  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("item favorited")}
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
  ingredientsContainer: {},
  stepsContainer: {},
});
export default MealDetailScreen;
