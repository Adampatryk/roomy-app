import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoomInputScreen, WelcomeScreen } from "../screens";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.ROUTE_WELCOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.ROUTE_WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={routes.ROUTE_ROOMS} component={RoomInputScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
