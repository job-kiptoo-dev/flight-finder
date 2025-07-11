import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { router } from "expo-router";
import style from "../../utils/LoginStyles"; // Adjust the import path as needed

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/screens/ResultsScreen");
    } catch (error: any) {
      Alert.alert("Signup Error", error.message);
    }
  };

  return (
    <View style={style.container} >
      <Text style={style.title}>Create Account</Text>

      <TextInput
        style={style.input}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        placeholderTextColor="#888"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Pressable
        onPress={handleSignup}
        style={style.button}>

        <Text style={style.buttonText} >Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={style.link} >Already have an account? Log in</Text>
      </Pressable>
    </View>
  );
}

