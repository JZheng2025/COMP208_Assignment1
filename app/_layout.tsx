import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

export default function Layout() {
  return (
    <TaskProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Welcome" }} />
        <Stack.Screen name="tasks" options={{ title: "Tasks" }} />
        <Stack.Screen name="taskForm" options={{ title: "Task Form" }} />
      </Stack>
    </TaskProvider>
  );
}
