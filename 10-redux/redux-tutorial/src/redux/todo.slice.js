import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
    'todo/getTasks',
    async () => {
        const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
        const data = await response.json() 
        return data;
    }
)

export const createTask = createAsyncThunk(
    'todo/createTask',
    async (newTask) => {
        const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json', {
            method: 'POST',
            body: JSON.stringify(newTask)
        })
        const data = await response.json() 
        return data;
    }
)

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
          // Add user to the state array
          state.tasks = action.payload;
        });

        builder.addCase(createTask.fulfilled, (state, action) => {
            // Add user to the state array
            state.tasks.push(action.payload);
        })
      },
})


const todoSelect = (state) => state.todo;

export const tasksSelector = createSelector(
    todoSelect,
    (todoState) => todoState.tasks 
);