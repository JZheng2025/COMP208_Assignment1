import { useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { TaskContext } from "../context/TaskContext";
import { globalStyles } from "../styles/globalStyles";

export default function Tasks() {
  const router = useRouter();
  const taskContext = useContext(TaskContext);

  if (!taskContext) return null;

  const { tasks, doneTasks, markDone } = taskContext;

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      <Text style={globalStyles.subtitle}>Active Tasks</Text>

      {tasks.map((task) => (
        <View key={task.id} style={globalStyles.taskCard}>
          <Text style={globalStyles.taskText}>
            {task.name} (Due: {task.dueDate})
          </Text>

          <View style={globalStyles.buttonRow}>
            <Pressable
              style={[
                globalStyles.button,
                globalStyles.buttonRowItem,
                globalStyles.buttonDone,
              ]}
              onPress={() => markDone(task)}
            >
              <Text style={globalStyles.buttonText}>Done</Text>
            </Pressable>

            <Pressable
              style={[
                globalStyles.button,
                globalStyles.buttonRowItem,
                globalStyles.buttonEdit,
              ]}
              onPress={() =>
                router.push({ pathname: "/taskForm", params: task })
              }
            >
              <Text style={globalStyles.buttonText}>Edit</Text>
            </Pressable>

            <Pressable
              style={[
                globalStyles.button,
                globalStyles.buttonRowItem,
                globalStyles.buttonDelete,
              ]}
              onPress={() =>
                router.push({ pathname: "/modal", params: { id: task.id } })
              }
            >
              <Text style={globalStyles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      ))}

      <Text style={globalStyles.subtitle}>Completed Tasks</Text>

      {doneTasks.map((task) => (
        <View key={task.id} style={globalStyles.completedCard}>
          <Text style={globalStyles.completedText}>
            ✔ {task.name} (Due: {task.dueDate})
          </Text>

          <Pressable
            style={globalStyles.buttonCompletedDelete}
            onPress={() =>
              router.push({ pathname: "/modal", params: { id: task.id } })
            }
          >
            <Text style={globalStyles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      ))}

      <View style={globalStyles.buttonCreateNewTask}>
        <Pressable
          style={globalStyles.button}
          onPress={() => router.push("/taskForm")}
        >
          <Text>Create A New Task</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
