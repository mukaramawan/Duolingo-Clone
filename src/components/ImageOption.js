import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types"; 

export default function ImageOption({image, title}) {
  return (
    <View style={styles.optionContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: image,
        }}
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{title}</Text>
    </View>
  );
}

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

ImageOption.defaultProps = {
  title: "Default",
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
