import { StyleSheet, Text, View, Image } from "react-native";

export default function ImageOption(props) {
  return (
    <View style={styles.optionContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: props.image,
        }}
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
    borderColor: "lightgrey",

    height: "48%",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  optionImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  optionText: {},
});
