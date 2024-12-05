import { StyleSheet, Text, View } from "react-native";
import PrgressBar from "./PrgressBar";

function Header({ progress }) {
  return (
    <View style={styles.root}>
      <PrgressBar progress={progress} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
});
