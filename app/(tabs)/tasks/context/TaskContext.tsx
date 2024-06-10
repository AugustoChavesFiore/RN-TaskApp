import { createContext, useContext } from "react";
import { Task } from "../types/task.types";

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => {};
    findTask: (taskID: number) => Task | null;
    removeTask: (task: Task) => {};
    upDateTask: (task: Task) => {};
    toggleTask: (task: Task) => {};
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskContextProvider');
    }
    return context;
}
