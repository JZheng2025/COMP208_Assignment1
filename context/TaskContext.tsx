import React, { createContext, useState } from "react";

export type Task = {
  id: string;
  name: string;
  dueDate: string;
};

type TaskContextType = {
  tasks: Task[];
  doneTasks: Task[];
  addOrUpdateTask: (task: Task) => void;
  markDone: (task: Task) => void;
  deleteTask: (id: string) => void;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const addOrUpdateTask = (task: Task) => {
    setTasks((prev) => {
      const exists = prev.find((t) => t.id === task.id);
      if (exists) return prev.map((t) => (t.id === task.id ? task : t));
      return [...prev, task];
    });
  };

  const markDone = (task: Task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    setDoneTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setDoneTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, doneTasks, addOrUpdateTask, markDone, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
