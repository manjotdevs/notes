import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import useTheme from "../hook/theme";
import Home from "../screens/home";

const HomeScreen: React.FC = () => {
  const { colors } = useTheme();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Notes" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
