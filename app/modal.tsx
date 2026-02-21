import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { TaskContext } from "../context/TaskContext";
import { globalStyles } from "../styles/globalStyles";

export default function Modal() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const taskContext = useContext(TaskContext);

  if (!taskContext || !id) return null;

  const { deleteTask } = taskContext;

  return (
    <View style={globalStyles.modalOverlay}>
      <View style={globalStyles.modalBox}>
        <Text style={globalStyles.subtitle}>
          Are you sure you want to delete this task?
        </Text>

        <View style={globalStyles.buttonRow}>
          <Pressable
            style={[
              globalStyles.button,
              globalStyles.buttonDelete,
              globalStyles.modalButton,
            ]}
            onPress={() => {
              deleteTask(id);
              router.back();
            }}
          >
            <Text style={globalStyles.buttonText}>Yes</Text>
          </Pressable>

          <Pressable
            style={[
              globalStyles.button,
              globalStyles.buttonEdit,
              globalStyles.modalButton,
            ]}
            onPress={() => router.back()}
          >
            <Text style={globalStyles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
