import { Text, View } from "react-native";
import Button from "../Button";
import WordOptions from "./WordOption";
import { useState } from "react";

import styles from "./style";

function FillInTheBlanks({ Question, onCorrect, onWrong }) {
  const [Selected, setSelected] = useState(false);

  function buttonPressed() {
    if (Selected === Question.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  }

  return (
    <>
      <Text style={styles.title}>Complete the Sentence</Text>

      <View style={styles.row}>
        <Text style={styles.text}>{Question.question}</Text>
        <View style={styles.blank}>
          {Selected && (
            <WordOptions text={Selected} onPress={() => setSelected(null)} />
          )}
        </View>
      </View>

      <View style={styles.optionsContainer}>
        {Question.options.map((option) => (
          <WordOptions
            text={option}
            key={option}
            isSelected={Selected === option}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <Button title="Check" onPress={buttonPressed} disabled={!Selected} />
    </>
  );
}

export default FillInTheBlanks;
