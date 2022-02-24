import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-meals";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector(
    (state) => state.mealsReducer.favoriteMeals
  );

  return <MealList data={favoriteMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Favorites",
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
  };
};

export default FavoritesScreen;
