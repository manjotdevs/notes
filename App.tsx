import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeNavigation from "./app/navigation/Home";
import SettingNavigation from "./app/navigation/Setting";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "green",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            // Return the icon component
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Settings" component={SettingNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
