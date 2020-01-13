import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen.js";
import SectionScreen from "../screens/SectionScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
});

export default createAppContainer(AppNavigator);
