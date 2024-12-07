import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const WordOption = ({ text, onPress, isSelected }) => {
  return (
    <Pressable
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgrey" : "white" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, { color: isSelected ? "lightgrey" : "black" }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default WordOption;

const styles = StyleSheet.create({
  root: {
    borderColor: "lightgrey",
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 5,

    padding: 10,
    margin: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: "bold",
    font: 12,
    alignSelf: "flex-start",
  },
});
