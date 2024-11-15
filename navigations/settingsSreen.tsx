import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/settings';

const SettingsScreen: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default SettingsScreen;
