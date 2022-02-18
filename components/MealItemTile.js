import { View, Text, ImageBackground, StyleSheet } from "react-native";

import TouchableTileWrapper from "./TouchableTileWrapper";

const MealItemTile = ({ item, onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableTileWrapper
        style={{ container: styles.tileContainer, view: styles.tileView }}
        onSelect={onSelect}
      >
        <ImageBackground source={{ uri: item.imageUrl }} style={styles.bgImage}>
          <View style={styles.contentWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View
              style={{ ...styles.attributeContainer, ...styles.textWrapper }}
            >
              <View>
                <Text style={styles.attribute}>{item.affordability}</Text>
              </View>
              <View>
                <Text style={styles.attribute}>{item.complexity}</Text>
              </View>
              <View>
                <Text style={styles.attribute}>{item.duration}m</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableTileWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  tileContainer: {
    flex: 1,
    height: 280,
    borderRadius: 20,
    overflow: "hidden",
  },
  tileView: {
    padding: 0,
  },
  textWrapper: {
    backgroundColor: "white",
    borderRadius: 5,
    opacity: 0.76,
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    margin: 4,
    padding: 6,
  },
  attributeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  attribute: {
    color: "black",
    fontSize: 16,
  },
});
export default MealItemTile;
