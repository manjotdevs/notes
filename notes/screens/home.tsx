import { View, Text, Button } from "react-native";
import ThemeProvider from "../themes/themeProvider";

const Home: React.FC = () => {
  return (
    <View>
      <Text>hi</Text>
      <Button
        onPress={() => {
          console.log();
        }}
        title="Learn More"
      />
    </View>
  );
};

export default Home;
