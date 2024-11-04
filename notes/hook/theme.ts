import { useColorScheme } from 'react-native';

const useTheme = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark"

  return {
    colors: {
      primary: isDarkMode ? '#FF6500' : '#0B192C',
      secondary: isDarkMode ? '#1E3E62' : '#FFFFFF',
      tertiary: '#FF6500',
      text: isDarkMode ? '#FFFFFF' : '#0B192C',
      background: isDarkMode ? '#0B192C' : '#FFFFFF',
    },
  };
};

export default useTheme;

