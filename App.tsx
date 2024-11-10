import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./navigations/homeScreen";
import SettingsScreen from "./navigations/settingsSreen";
import useTheme from "./hook/theme";

type TabParamList = {
  HomeScreen: undefined;
  SettingScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const App: React.FC = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: colors.secondaryTabBarColor,
            borderTopWidth: 0,
            elevation: 0,
            height: 90,
          },
          tabBarIcon: ({ color, focused }) => {
            let iconName:any;
            let iconSize = 30;

            if (route.name === "HomeScreen") {
              iconName = focused ? "home-sharp" : "home-outline"; // Use sharp when focused, outline when not
            } else if (route.name === "SettingScreen") {
              iconName = focused ? "settings-sharp" : "settings-outline";
            } else {
              iconName = "circle";
            }
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: colors.primaryActive,
          tabBarInactiveTintColor: colors.primaryInactive,
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SettingScreen" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
