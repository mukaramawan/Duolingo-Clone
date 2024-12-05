import { StyleSheet, Text, View, Image } from "react-native";
import PrgressBar from "./PrgressBar";
import heart from "../../assets/images/heart.png";

function Header({ progress, lives }) {
  return (
    <View style={styles.root}>
      <PrgressBar progress={progress} />
      <Image source={heart} style={styles.heart} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  heart: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
  lives: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
});
