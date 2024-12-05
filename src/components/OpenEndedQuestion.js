import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import mascot from "../../assets/images/mascot.png";
import Button from "../components/Button";
import { useState } from "react";

function OpenEndedQuestion({ Question, onCorrect, onWrong }) {
  const [input, setInput] = useState("");

  function buttonPressed() {
    if (input.toLowerCase().trim() === Question.answer.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  }

  return (
    <>
      <Text style={styles.Title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image style={styles.mascot} source={mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{Question.text}</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Type in English"
        textAlignVertical="top"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Check" onPress={buttonPressed} disabled={!input} />
    </>
  );
}

export default OpenEndedQuestion;

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",

    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#ebebeb",
    alignSelf: "stretch",
    flex: 1,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",

    fontSize: 16,
    padding: 10,
  },
});
