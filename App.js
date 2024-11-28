import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import ImageOption from "./src/components/ImageOption";
import Question from "./assets/data/oneQuestionWithOption";

export default function App() {
  const [Selected, setSelected] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Question.question}</Text>

      <View style={styles.optionsContainer}>
        {Question.options.map((option) => (
          <ImageOption
            image={option.image}
            title={option.text}
            key={option.id}
            isSelected={Selected?.id === option.id}
            onPress={()=>setSelected(option)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 40,
  },
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
