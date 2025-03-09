import { createSlice } from '@reduxjs/toolkit';

export const initialTasks = [
    {
        id: 1,
        name: 'Task for today',
        from: '09:30',
        to: '11:30',
        focusTime: '0.1 min',
        breakTime: '10 min',
        date: '2025-03-09',
    },
    {
        id: 7,
        name: 'Task for today1',
        from: '09:30',
        to: '11:30',
        focusTime: '0.1 min',
        breakTime: '10 min',
        date: '2025-03-10',
    },
    {
        id: 2,
        name: 'Task for tomorrow',
        from: '12:00',
        to: '13:00',
        focusTime: '20 min',
        breakTime: '5 min',
        date: '2025-03-10',
    },
    {
        id: 3,
        name: 'Task for 11th March',
        from: '14:00',
        to: '15:00',
        focusTime: '15 min',
        breakTime: '10 min',
        date: '2025-03-11',
    },
    {
        id: 4,
        name: 'Future task',
        from: '16:00',
        to: '17:00',
        focusTime: '30 min',
        breakTime: '10 min',
        date: '2025-03-15',
    },
];

const initialState = {
    tasks: initialTasks,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
