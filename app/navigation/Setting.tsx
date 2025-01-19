import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

export default function SettingNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}