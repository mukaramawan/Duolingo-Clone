import { StyleSheet, Text, View, Image } from 'react-native'


export default function ImageOption() {
  return (
    <View style={styles.optionContainer}>
    <Image
      resizeMode="contain"
      source={{
        uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
      }}
      style={styles.optionImage}
    />
    <Text style={styles.optionText}>Glass</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRadius: 10,
        borderColor: "lightgrey",
    
        height: "48%",
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      },
      optionImage: {
        width: "100%",
        height: "100%",
        flex: 1,
      },
      optionText: {},
})