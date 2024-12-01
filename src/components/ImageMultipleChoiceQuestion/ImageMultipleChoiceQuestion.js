import { View, Text } from "react-native";
import { useState } from "react";
import ImageOption from "../ImageOption";
import Button from "../Button";
import styles from "./styles";
import PropTypes from "prop-types";

function ImageMulatipleChoiceQuestion({ Question, onCorrect, onWrong }) {
  const [Selected, setSelected] = useState(null);

  function buttonPressed() {
    if (Selected.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  }

  return (
    <>
      <Text style={styles.title}>{Question.question}</Text>

      <View style={styles.optionsContainer}>
        {Question.options.map((option) => (
          <ImageOption
            image={option.image}
            title={option.text}
            key={option.id}
            isSelected={Selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button title="Check" onPress={buttonPressed} disabled={!Selected} />
    </>
  );
}

ImageMulatipleChoiceQuestion.propTypes = {
  Question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    option: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string,
        correct: PropTypes.bool,
      })
    ),
  }).isRequired,
};

export default ImageMulatipleChoiceQuestion;
