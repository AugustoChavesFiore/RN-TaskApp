

export type Task = {
    id?: number;
    title: string;
    description: string;
    author: string;
    date: string;
    completed?: boolean;
};


export type TaskState = {
    tasks: Task[];
};

export type TaskAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'REMOVE_TASK'; payload: number }
    | { type: 'TOGGLE_TASK'; payload: number }
    | { type: 'UPDATE_TASK'; payload: Task }
    | { type: 'FIND_TASK'; payload: number };
