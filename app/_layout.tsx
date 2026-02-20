import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

export default function Layout() {
  return (
    <TaskProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Welcome" }} />
        <Stack.Screen name="tasks" options={{ title: "Tasks" }} />
        <Stack.Screen name="taskForm" options={{ title: "Task Form" }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Confirm" }}
        />
      </Stack>
    </TaskProvider>
  );
}
