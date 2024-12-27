import { StyleSheet, View } from "react-native";
import { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext, AuthProvider } from "./hooks/AuthContext";
import Welcome from "./src/screens/welcome";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppEntry from "./AppEntry";
import { supabase } from "./lib/supabase";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  const { setAuth } = useContext(AuthContext);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        setAuth(session.user);
      }
      setIsLoading(false); // Stop loading once session check is complete
    });

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          setAuth(session.user);
          setSession(session);
        } else {
          setAuth(null);
          setSession(null);
        }
      }
    );
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={{ marginTop: 10, marginBottom: 30 }}
          size="large"
          color="#57a600"
        />
      </View>
    );
  }

  const Home = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {session ? (
          //  <Stack.Screen name="AppEntry" component={AppEntry} />
          <Stack.Screen
            name="MainTabNavigator"
            component={Home}
           options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
