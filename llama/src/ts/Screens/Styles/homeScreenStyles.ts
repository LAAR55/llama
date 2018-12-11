// tslint:disable:object-literal-sort-keys
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#030820",
    paddingBottom: 20,
    height: "100%",
  },
  contentContainer: {
    alignItems: "center",
  },
  trackContainer: {
    padding: 20,
    width: "90%",
    borderTopWidth: 4,
    borderTopColor: "#fff021",
    backgroundColor: "rgba(255,255,255,.1)",
  },
  platformSelectContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  searchInput: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 4,
  },
  ftntSkin: {
    marginTop: 20,
    width: "90%",
    height: 275,
  },
});
