import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background, // This should match your Colors.background
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20, // Adjust padding as needed
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: 400,
    //fontFamily: "SpaceMono", // Ensure this font is loaded in your app
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: 300,
    //fontFamily: "SpaceMono", // Ensure this font is loaded in your app
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10, // Adjust spacing between rows
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10, // Adjust spacing between buttons
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: 300,
    fontFamily: "SpaceMono", // Ensure this font is loaded in your app
  },
});
