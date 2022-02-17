import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

import TileWrapper from "./TileWrapper";

const CategoryGridTile = ({ title, color, onSelect }) => {
  let TouchComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchComponent style={{ flex: 1 }} onPress={onSelect}>
        <View style={{ flex: 1 }}>
          <TileWrapper
            style={{ ...styles.view, ...{ backgroundColor: color } }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </TileWrapper>
        </View>
      </TouchComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 125,
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTile;
