import { View, Text, StyleSheet } from "react-native";

import TouchableTileWrapper from "./TouchableTileWrapper";

const CategoryGridTile = ({ title, color, onSelect }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableTileWrapper
        style={{
          container: styles.container,
          view: { ...styles.view, ...{ backgroundColor: color } },
        }}
        onSelect={onSelect}
      >
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </TouchableTileWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 125,
  },
  view: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTile;
