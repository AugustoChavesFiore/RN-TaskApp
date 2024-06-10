

import React from 'react'
import { TaskContext } from './TaskContext'
import { TaskReducer } from '../reducer/task.reducer';
import { Task, TaskState } from '../types/task.types';
import jsonTask from '../tasks.json'


type TaskContextType = {
    children: React.ReactNode;
};

export const TaskConentextProvider = ({children}: TaskContextType) => {
    const initialState:TaskState = {
        tasks: jsonTask
    }

    const [tasks, dispatch] = React.useReducer(TaskReducer, initialState);

    const addTask = (task: Task) => {
        const newTask = {...task, id: Date.now() , completed: false, date: new Date().toLocaleDateString()};

        dispatch({type: 'ADD_TASK', payload: newTask});
        return true;
    };

    const removeTask = (task: Task) => {
        dispatch({type: 'REMOVE_TASK', payload: task.id!});
        return true;
    };

    const toggleTask = (task: Task) => {
        dispatch({type: 'TOGGLE_TASK', payload: task.id!});
        return true;
    };

    const upDateTask = (task: Task) => {
        dispatch({type: 'UPDATE_TASK', payload: task});
        return task;
    };

    const findTask = (taskID: number) => {
        const task = tasks.tasks.find(task => task.id === taskID);
        if (!task) {
           return null;
        }
        return task;
    };


  return (
    <TaskContext.Provider value={{
        tasks: tasks.tasks,
        addTask,
        removeTask,
        toggleTask,
        upDateTask,
        findTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}
