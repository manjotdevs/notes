import { useColorScheme } from 'react-native';
const useTheme = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark"

  return {
    colors: {
      primary: isDarkMode ? '#f15025' : '#0B192C',
      primaryActive: isDarkMode ? '#FF6500' : '#0B192C',
      primaryInactive: isDarkMode ? '#F5F7F8' : '#0B192C',
      secondary: isDarkMode ? '#343a40' : '#FFFFFF',
      secondaryTabBarColor: isDarkMode ? '#050505' : '#FFFFFF',
      tertiary: '#FF6500',
      text: isDarkMode ? '#FFFFFF' : '#0B192C',
      background: isDarkMode ? '#000000' : '#FAFAFA',
    },
  };
};

export default useTheme;

