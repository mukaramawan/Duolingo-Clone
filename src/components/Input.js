import { StyleSheet, TextInput } from "react-native";
import React from "react";

function Input(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="#999"
      style={styles.input}
      {...props}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    color: "#333",
    fontSize: 15,
    borderColor: "#57a600",
  },
});
