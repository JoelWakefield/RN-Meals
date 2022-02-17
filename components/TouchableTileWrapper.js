import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import TileWrapper from "./TileWrapper";

const TouchableTileWrapper = ({ style, children, onSelect }) => {
  let TouchComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.container, ...style.container }}>
      <TouchComponent style={{ flex: 1 }} onPress={onSelect}>
        <View style={{ flex: 1 }}>
          <TileWrapper style={{ ...styles.view, ...style.view }}>
            {children}
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
    height: 100,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 10,
    elevation: 5,
  },
});

export default TouchableTileWrapper;
