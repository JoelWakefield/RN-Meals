import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-meals";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = ({ navigation }) => {
  const meals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealList data={meals} navigation={navigation} />;
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
