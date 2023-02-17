import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) => {
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const Map = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <Text>Map</Text>
      </View>
    </SafeArea>
  );
};
const Settings = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <Text>settings</Text>
      </View>
    </SafeArea>
  );
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return { tabBarIcon: tabBarIcon(iconName) };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
      screenOptions={screenOptions}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
