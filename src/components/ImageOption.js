import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import PropTypes from "prop-types";

export default function ImageOption({image,title = "default",isSelected,onPress,}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        resizeMode="contain"
        source={{
          uri: image,
        }}
        style={styles.optionImage}
      />
      <Text style={[styles.optionText, isSelected ? styles.selectedText : {}]}>
        {title}
      </Text>
    </Pressable>
  );
}

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
};

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
  selectedContainer: {
    backgroundColor: "#ddf4fe",
    borderColor: "#81d5fe",
  },
  optionImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "bold",
  },
  selectedText: {
    color: "#40bef7",
  },
});
