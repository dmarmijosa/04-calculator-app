import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1">50 X 5000000000000000000</ThemeText>
      <ThemeText variant="h2">250</ThemeText>
    </View>
  );
};

export default CalculatorApp;
