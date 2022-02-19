import { View, FlatList, StyleSheet } from "react-native";

import MealItemTile from "../components/MealItemTile";

const MealList = ({ data, navigation }) => {
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
