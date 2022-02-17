import { View, FlatList, StyleSheet } from "react-native";

import MealItemTile from "../components/MealItemTile";
import { CATEGORIES } from "../data/dummy-category";
import { MEALS } from "../data/dummy-meals";

const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItemTile
        item={itemData.item}
        onSelect={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              id: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={meals} renderItem={renderMealItem} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const category = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: category.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
