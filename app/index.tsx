import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <ThemeText variant="h1">50 X 5000000000000000000</ThemeText>
      <ThemeText variant="h2">250</ThemeText>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          label="+/-"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("del")}
        />
        <CalculatorButton label="÷" onPress={() => console.log("÷")} />
      </View>
    </View>
  );
};

export default CalculatorApp;
