import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { router } from "expo-router";
import styles from "../../utils/LoginStyles"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/screens/ResultsScreen");
    } catch (error: any) {
      Alert.alert("Login Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Pressable
        onPress={handleLogin}
        style={styles.button}>
        <Text style={styles.buttonText} className="">Log In</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/screens/SignupScreen")}>
        <Text style={styles.link} >Don't have an account? Sign up</Text>
      </Pressable>
    </View>
  );
}

