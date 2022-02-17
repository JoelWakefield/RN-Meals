import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const TouchableTileWrapper = ({ style, children, onSelect }) => {
  let TouchComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }

  return (
    <TouchComponent style={{ flex: 1 }} onPress={onSelect}>
      <View style={{ flex: 1 }} style={{ ...styles.container, ...style }}>
        {children}
      </View>
    </TouchComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 10,
    elevation: 2,
  },
});

export default TouchableTileWrapper;
