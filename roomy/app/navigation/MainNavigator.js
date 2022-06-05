import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AllocationModeScreen,
  AllocationsScreen,
  BattleScreen,
  PeopleInputScreen,
  RoomInputScreen,
  WelcomeScreen,
} from "../screens";
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
      <Stack.Screen name={routes.ROUTE_PEOPLE} component={PeopleInputScreen} />
      <Stack.Screen
        name={routes.ROUTE_ALLOCATION_MODE}
        component={AllocationModeScreen}
      />
      <Stack.Screen
        name={routes.ROUTE_ALLOCATIONS}
        component={AllocationsScreen}
      />
      <Stack.Screen name={routes.ROUTE_BATTLE} component={BattleScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
