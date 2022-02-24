import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealItemTile from "../components/MealItemTile";

const MealList = ({ data, navigation }) => {
  const favoriteMeals = useSelector(
    (state) => state.mealsReducer.favoriteMeals
  );

  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );

    return (
      <MealItemTile
        item={itemData.item}
        onSelect={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              id: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
