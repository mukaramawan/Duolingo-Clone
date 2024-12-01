import { StyleSheet, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import Questions from "./assets/data/imageMulatipleChoiceQuestions";
import ImageMulatipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    Questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= Questions.length) {
      Alert.alert("You Won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(Questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  function onCorrect() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function onWrong() {
    Alert.alert("Wroong");
  }

  return (
    <View style={styles.container}>
      <ImageMulatipleChoiceQuestion
        Question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
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
});
