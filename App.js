import { StyleSheet, Text, View, Image } from "react-native";
import ImageOption from "./src/components/ImageOption";
import Question from "./assets/data/oneQuestionWithOption";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Question.question}</Text>

      <View style={styles.optionsContainer}>
        
        {Question.options.map((option) => (
          <ImageOption
            image={option.image}
            title={option.text}
            key={option.id}
          />
        ))}

        {/* <ImageOption
          image={Question.options[0].image}
          title={Question.options[0].text}
        />
        <ImageOption
          image={Question.options[1].image}
          title={Question.options[1].text}
        />
        <ImageOption
          image={Question.options[2].image}
          title={Question.options[2].text}
        />
        <ImageOption
          image={Question.options[3].image}
          title={Question.options[3].text}
        /> */}
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
