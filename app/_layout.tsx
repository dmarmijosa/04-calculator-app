import { Colors } from "@/constants/Colors";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";

const RootLayout = () => {
  const [loaded] = useFonts({
    spaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={{ backgroundColor: Colors.darkGray, flex: 1 }}>
      <Slot />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default RootLayout;
