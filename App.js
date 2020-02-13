import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/screens/HomeScreen";
import ComponentsScreen from "./src/screens/screens/ComponentsScreen";
import ListScreen from "./src/screens/screens/ListScreen";
import ImageScreen from "./src/screens/screens/ImageScreen";
import CounterScreen from "./src/screens/screens/CounterScreen";
import ColorScreen from "./src/screens/screens/ColorScreen";
import SquareScreen from "./src/screens/screens/SquareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
