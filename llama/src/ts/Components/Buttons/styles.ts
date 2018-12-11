// tslint:disable:object-literal-sort-keys
import {
  StyleSheet,
} from "react-native";

export const iconButtonStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 4,
  },
  transparentButtonStyle: {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  solidblueButtonStyle: {
    backgroundColor: "#194078",
  },
});
