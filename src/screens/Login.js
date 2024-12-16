import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

import { supabase } from "../../lib/supabase";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigation = useNavigation();

  const onLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Log In!", "Please fill all the Fields!");
    } else {
      setLoading(true);
      const email = emailRef.current.trim();
      const password = passwordRef.current.trim();

      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert(error.message);
        setLoading(false);
      } else {
        setLoading(false);
        navigation.navigate("AppEntry");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginTxt}>Login here</Text>
      <Text style={styles.subloginTxt}>Welcome back, Let's Practice!</Text>

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

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 10, marginBottom: 30 }}
          size="large"
          color="#58cc02"
        />
      ) : (
        <Button title="Log In" onPress={onLogin} />
      )}

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Continue with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="google" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    padding: 20,
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
  forgotPassword: {
    textAlign: "left",
    color: "#57a600",
    marginBottom: 20,
  },
  createAccount: {
    textAlign: "center",
    color: "#58cc02",
    marginBottom: 20,
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

export default Login;
