import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import useTheme from "../hook/theme";

const Home: React.FC = ({navigation}:any) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView style={styles.mainScreen}>
        <View>
          <Text style={[styles.titleText, { color: colors.primaryText }]}>
            Notes
          </Text>
          <Button
        title="Go to Details"
        onPress={() => navigation.navigate('SettingScreen')}
      />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontFamily: "Rubik-bold",
    fontSize: 32,
  },
  mainScreen: {
    padding: 12,
  },
});

export default Home;
