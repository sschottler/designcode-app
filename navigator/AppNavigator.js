import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen.js";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator.js";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(TabNavigator);
