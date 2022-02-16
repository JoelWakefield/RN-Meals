import { View, StyleSheet } from "react-native";

const TileWrapper = ({ style, children }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
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

export default TileWrapper;
