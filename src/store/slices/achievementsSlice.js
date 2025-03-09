import { createSlice } from '@reduxjs/toolkit';

const defaultCurrent = 0;

const initialState = [
    { id: 'daily', type: 'daily', current: defaultCurrent, goal: 3, label: 'daily tasks' },
    { id: 'weekly', type: 'weekly', current: defaultCurrent, goal: 12, label: 'weekly tasks' },
    { id: 'c50', type: 'completed', current: defaultCurrent, goal: 50, label: 'tasks completed' },
    { id: 'c100', type: 'completed', current: defaultCurrent, goal: 100, label: 'tasks completed' },
    { id: 'c500', type: 'completed', current: defaultCurrent, goal: 500, label: 'tasks completed' },
    { id: 'c1000', type: 'completed', current: defaultCurrent, goal: 1000, label: 'tasks completed' },
];

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {
        incrementDaily(state) {
            const daily = state.find(item => item.type === 'daily');
            if (daily && daily.current < daily.goal) {
                daily.current += 1;
            }
        },
        incrementWeekly(state) {
            const weekly = state.find(item => item.type === 'weekly');
            if (weekly && weekly.current < weekly.goal) {
                weekly.current += 1;
            }
        },
    },
});

export const { incrementDaily, incrementWeekly } = achievementsSlice.actions;
export default achievementsSlice.reducer;
