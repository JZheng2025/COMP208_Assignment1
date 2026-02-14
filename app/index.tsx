import { useRouter } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Welcome() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={globalStyles.background}
      resizeMode="cover"
    >
      <View style={globalStyles.overlay}>
        <Text style={globalStyles.title}>Welcome to Task Manager!</Text>

        <Text style={globalStyles.paragraph}>
          Manage your tasks, mark them as completed, and stay organized.
        </Text>

        <Pressable
          style={globalStyles.button}
          onPress={() => router.push("/tasks")}
        >
          <Text>Go to Tasks</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
