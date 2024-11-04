import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

const HomeScreen: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeScreen;
