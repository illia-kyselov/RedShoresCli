import { createSlice } from '@reduxjs/toolkit';
import { addTask } from './tasksSlice';
import { initialTasks } from './tasksSlice';

const initialTotalTasksByDate = initialTasks.reduce((acc, task) => {
    acc[task.date] = (acc[task.date] || 0) + 1;
    return acc;
}, {});

const initialState = {
    tasksCompletedByDate: {},
    totalTasksByDate: initialTotalTasksByDate,
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        addCompletedTask: (state, action) => {
            const date = action.payload;
            if (state.tasksCompletedByDate[date]) {
                state.tasksCompletedByDate[date] += 1;
            } else {
                state.tasksCompletedByDate[date] = 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addTask, (state, action) => {
            const date = action.payload.date;
            if (state.totalTasksByDate[date]) {
                state.totalTasksByDate[date] += 1;
            } else {
                state.totalTasksByDate[date] = 1;
            }
        });
    },
});

export const { addCompletedTask } = statsSlice.actions;
export default statsSlice.reducer;
