import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';

function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Duolingo Logo.png")}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.subheading}>Learn a language for free!</Text>

      <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 50,
  },
});

export default Welcome;
