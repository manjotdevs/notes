import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

export default function SettingScreen() {
  return (
    <SafeAreaView>
      <View className="p-4">
        <Text>Home Screen</Text>
        <Button title="Go to Details" />
      </View>
    </SafeAreaView>
  );
}
