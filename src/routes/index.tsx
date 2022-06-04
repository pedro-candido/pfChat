import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabRoutes = (): JSX.Element => {
  return (
    <Navigator>
      <Screen name="Home" component={() => <View></View>} />
    </Navigator>
  );
};
