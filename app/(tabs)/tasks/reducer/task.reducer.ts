import {  TaskState, TaskAction } from "../types/task.types";


export const TaskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
            }
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        default:
            return state
    }
};

