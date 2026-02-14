import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { TaskContext } from "../context/TaskContext";
import { globalStyles } from "../styles/globalStyles";

export default function TaskForm() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const taskContext = useContext(TaskContext);

  const [name, setName] = useState(params.name?.toString() || "");
  const [dueDate, setDueDate] = useState(params.dueDate?.toString() || "");

  if (!taskContext) return null;

  const { addOrUpdateTask } = taskContext;

  const saveTask = () => {
    if (!name.trim() || !dueDate.trim()) {
      Alert.alert(
        "Missing Information",
        "Please enter both a task name and a due date.",
      );
      return;
    }

    addOrUpdateTask({
      id: params.id?.toString() ?? Date.now().toString(),
      name,
      dueDate,
    });

    router.back();
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Task name (Required)"
        value={name}
        onChangeText={setName}
        style={globalStyles.input}
      />

      <TextInput
        placeholder="Due date (YYYY-MM-DD) (Required)"
        value={dueDate}
        onChangeText={setDueDate}
        style={globalStyles.input}
      />

      <Pressable style={globalStyles.button} onPress={saveTask}>
        <Text>Save Task</Text>
      </Pressable>
    </View>
  );
}
