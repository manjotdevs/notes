import { View, Text, Button, StyleSheet } from "react-native";
import useTheme from "../hook/theme";

const Home: React.FC = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, {backgroundColor: colors.secondary},{color: colors.text}]}>hi</Text>
      <Button
        onPress={() => {
          console.log();
        }}
        title="Learn More"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    height: 20,
    width: 20,
    padding: 20,
    borderRadius: 10,

  }
});

export default Home;
