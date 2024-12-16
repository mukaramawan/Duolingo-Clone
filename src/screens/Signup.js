import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

import { supabase } from "../../lib/supabase";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import { useRef, useState } from "react";

function Signup() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmpasswordRef = useRef("");

  const onSignup = async () => {
    if (
      !nameRef.current ||
      !emailRef.current ||
      !passwordRef.current ||
      !confirmpasswordRef.current
    ) {
      Alert.alert("Sign Up!", "Please fill all the Fields!");
    } else {
      setLoading(true);

      const name = nameRef.current.trim();
      const email = emailRef.current.trim();
      const password = passwordRef.current.trim();

      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
            email: email,
            password: password,
          },
        },
      });

      if (error) {
        setLoading(false);
        Alert.alert(error.message);
      } else {
        console.log("Error: ", session);
        navigation.navigate("Login");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginTxt}>Create your Account</Text>
      <Text style={styles.subloginTxt}>
        WinTest | Prepare for your Exams with us!
      </Text>

      <Input
        placeholder="Name"
        onChangeText={(value) => {
          nameRef.current = value;
        }}
      />

      <Input
        placeholder="Email"
        onChangeText={(value) => {
          emailRef.current = value;
        }}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => {
          passwordRef.current = value;
        }}
      />

      <Input
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(value) => {
          confirmpasswordRef.current = value;
        }}
      />

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 10, marginBottom: 20 }}
          size="large"
          color="#39b44c"
        />
      ) : (
        <Button title="Sign Up" onPress={onSignup} />
      )}

      <View style={styles.signinContainer}>
        <Text style={{ color: "#666" }}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Or Continue with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="google" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  loginTxt: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#58cc02",
    textAlign: "center",
    marginBottom: 10,
  },
  subloginTxt: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  signinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  signinText: {
    fontWeight: "bold",
    color: "#58cc02",
    marginLeft: 5,
  },
  orText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconContainer: {
    height: 50,
    width: 50,
    padding: 8,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 25,
  },
});

export default Signup;
