import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    gap: 14,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  button: {
    paddingVertical: 8,
    backgroundColor: "#A1CEDC",
    borderRadius: 10,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonRowItem: {
    flex: 1,
  },

  buttonDone: {
    backgroundColor: "#4CAF50",
  },

  buttonEdit: {
    backgroundColor: "#2196F3",
  },

  buttonDelete: {
    backgroundColor: "#F44336",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },

  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 30,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },

  taskCard: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#eee",
  },

  taskText: {
    marginBottom: 3,
  },

  completedCard: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#eee",
  },

  completedText: {
    marginBottom: 3,
  },

  buttonCompletedDelete: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: "#B0B0B0",
  },

  buttonCreateNewTask: {
    marginTop: 60,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
  },

  modalButton: {
    flex: 1,
  },
});
