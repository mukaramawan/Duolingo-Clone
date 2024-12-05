import { StyleSheet, Text, View } from "react-native";
import React from "react";

function PrgressBar({ progress }) {
  return (
    <View style={styles.background}>
      <View style={[styles.foreground, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
}

export default PrgressBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    height: 20,
    flex: 1,
    borderRadius: 15,
  },
  foreground: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#fac800",
  },
  highlight: {
    backgroundColor: "#fad131",
    height: 5,
    width: "90%",
    marginTop: 5,
    borderRadius: 5,
    alignSelf: "center",
  },
});
