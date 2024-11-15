import { useColorScheme } from 'react-native';
const useTheme = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark"

  return {
    colors: {
      primary: isDarkMode ? '#FF6500' : '#0B192C',
      primaryText: isDarkMode ? '#fdfdfd' : '#0B192C',
      secondary: isDarkMode ? '#0a0a0a' : '#FFFFFF',
      secondaryTabBarColor: isDarkMode ? '#0E0D0D' : '#FFFFFF',
      tertiary: '#FF6500',
      text: isDarkMode ? '#FFFFFF' : '#0B192C',
      background: isDarkMode ? '#0a0a0a' : '#FAFAFA',
    },
  };
};

export default useTheme;

