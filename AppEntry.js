import { StyleSheet, View, Alert, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import ImageMulatipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Questions from "./assets/data/allQuestions";
import Header from "./src/components/Header";
import FillInTheBlanks from "./src/components/FillInTheBlanks";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(
    Questions[currentQuestionIndex]
  );

  const [Lives, setLives] = useState(5);

  const [hasLoaded, sethasLoaded] = useState(false);

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
    setCurrentQuestionIndex(0);
  }

  function onWrong() {
    if (Lives <= 1) {
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

  const saveData = async () => {
    await AsyncStorage.setItem("Lives", Lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const LoadedLives = await AsyncStorage.getItem("Lives");
    if (LoadedLives) {
      setLives(parseInt(LoadedLives));
    }
    const LoadedIndex = await AsyncStorage.getItem("currentQuestionIndex");
    if (LoadedIndex) {
      setCurrentQuestionIndex(parseInt(LoadedIndex));
    }
    sethasLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [currentQuestionIndex, Lives, hasLoaded]);

  if (!hasLoaded) {
        return (
          <View style={styles.container}>
          <ActivityIndicator
            style={{ marginTop: 10, marginBottom: 30}}
            size="large"
            color="#58cc02"
          />
          </View>
        );
  }

  return (
    <View style={styles.container}>
      <Header
        progress={currentQuestionIndex / Questions.length}
        lives={Lives}
      />

      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillInTheBlanks
          Question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
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
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 40,
  },
});
