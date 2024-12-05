import { StyleSheet, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import ImageMulatipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Questions from "./assets/data/allQuestions";
import Header from "./src/components/Header";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  const [currentQuestion, setCurrentQuestion] = useState(
    Questions[currentQuestionIndex]
  );

  const [Lives, setLives] = useState(5);

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

  function restart() {
    setLives(5);
    setCurrentQuestionIndex(1);
  }

  function onWrong() {
    if (Lives < 1) {
      Alert.alert("Game Over", "Try Again!", [
        {
          text: "Try Again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Wroong");
      setLives(Lives - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Header
        progress={currentQuestionIndex / Questions.length}
        lives={Lives}
      />

      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMulatipleChoiceQuestion
          Question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          Question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
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
