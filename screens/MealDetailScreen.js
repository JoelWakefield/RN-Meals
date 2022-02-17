import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-meals";

const getMeal = (navigation) => {
  const mealId = navigation.getParam("id");
  return MEALS.find((m) => m.id === mealId);
};

const MealDetailScreen = ({ navigation }) => {
  const meal = getMeal(navigation);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const meal = getMeal(navigationData.navigation);

  return {
    headerTitle: meal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailScreen;
