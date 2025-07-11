import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, Text, View } from "react-native";
import StackNavigator from "./Navigation/stackNavigation";
import { router, useRouter } from "expo-router";
import { useEffect } from "react";


export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/screens/LoginScreen'); // safer than pushing early
    }, 100); // give it a moment to mount the layout

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" />
    </View>
  );
}

