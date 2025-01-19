import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "./global.css";
import "./gesture-handler";
import HomeNavigation from "./app/navigation/Home";
import SettingNavigation from "./app/navigation/Setting";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              return focused ? <GoHome size={size} color={color} /> : <GoHomeFill size={size} color={color}/>;
            } else if (route.name === 'Settings') {
              return focused ? <IoSettingsOutline size={size} color={color} /> : <IoSettingsSharp size={size} color={color}/>;
            }
  
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          })}>
        <Tab.Screen name="HomeNavigation" component={HomeNavigation} />
        <Tab.Screen name="SettingNavigation" component={SettingNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
