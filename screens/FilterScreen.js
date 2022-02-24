import { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import FilterSwitch from "../components/FilterSwitch";
import { setFilters } from "../store/actions/meals";

const FilterScreen = ({ navigation }) => {
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegitarian, setVegitarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree: glutenFree,
      isLactoseFree: lactoseFree,
      isVegan: vegan,
      isVegitarian: vegitarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [glutenFree, lactoseFree, vegan, vegitarian, dispatch]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <FilterSwitch
        label="Gluten-Free"
        state={glutenFree}
        onChange={(state) => setGlutenFree(state)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={lactoseFree}
        onChange={(state) => setLactoseFree(state)}
      />
      <FilterSwitch
        label="Vegan"
        state={vegan}
        onChange={(state) => setVegan(state)}
      />
      <FilterSwitch
        label="Vegitarian"
        state={vegitarian}
        onChange={(state) => setVegitarian(state)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Menus",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
