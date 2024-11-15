import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import HomeScreen from "./navigations/homeScreen";
import SettingsScreen from "./navigations/settingsSreen";
import useTheme from "./hook/theme";

type TabParamList = {
  HomeScreen: undefined;
  SettingScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

SplashScreen.preventAutoHideAsync(); 

const App: React.FC = () => {
  const { colors } = useTheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Rubik": require("./assets/fonts/Rubik-Regular.ttf"),
          "Rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
          "Rubik-semibold": require("./assets/fonts/Rubik-SemiBold.ttf"),
        });
        setFontsLoaded(true);
        await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
      } catch (e) {
        console.warn(e);
      }
    };

    loadFonts();
  }, []);

  // Prevent rendering until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

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
            let iconName: any;
            let iconSize = 30;

            if (route.name === "HomeScreen") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "SettingScreen") {
              iconName = focused ? "settings-sharp" : "settings-outline";
            } else {
              iconName = "circle";
            }
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.primaryText,
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SettingScreen" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
