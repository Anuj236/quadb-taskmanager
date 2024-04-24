import { createSlice } from '@reduxjs/toolkit';

const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve the tasks from local storage
const initialState = {
  tasks: savedTasks.map((task) => ({
    ...task,
    status: task.status || 'todo',
  })),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        status: 'todo', // Set Initial status to 'todo'
      };
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      );
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask, updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;