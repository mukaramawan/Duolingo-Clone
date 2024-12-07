import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  blank: {
    width: 100,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
  },
});

export default styles;
