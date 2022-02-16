import { View, Text, StyleSheet } from "react-native";

import TileWrapper from "./TileWrapper";

const MealItemTile = ({ item }) => {
  return (
    <TileWrapper style={styles.container}>
      <Text>{item.title}</Text>
    </TileWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
  },
});
export default MealItemTile;
