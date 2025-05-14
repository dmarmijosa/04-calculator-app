import { Slot } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View>
      <Text>header</Text>
      <Slot />
      <Text>Footer</Text>
    </View>
  );
};

export default RootLayout;
