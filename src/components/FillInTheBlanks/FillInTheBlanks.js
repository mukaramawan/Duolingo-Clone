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

      {Question.questPre && (
        <View style={styles.row}>
          <Text style={styles.text}>{Question.questPre}</Text>
          <View style={styles.blank}>
            {Selected && (
              <WordOptions text={Selected} onPress={() => setSelected(null)} />
            )}
          </View>
          <Text style={styles.text}>{Question.questPost}</Text>
        </View>
      )}

      {Question.question && (
        <View style={styles.row}>
          <Text style={styles.text}>{Question.question}</Text>
          <View style={styles.blank}>
            {Selected && (
              <WordOptions text={Selected} onPress={() => setSelected(null)} />
            )}
          </View>
        </View>
      )}

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
