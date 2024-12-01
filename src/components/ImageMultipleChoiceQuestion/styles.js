import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default styles;
