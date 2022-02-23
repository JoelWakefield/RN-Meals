import { View, Text, Switch, StyleSheet, Platform } from "react-native";

import Colors from "../constants/Colors";

const FilterSwitch = ({ label, state, onChange }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        onValueChange={onChange}
        value={state}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterSwitch;
