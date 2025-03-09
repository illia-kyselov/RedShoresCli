import { createSelector } from '@reduxjs/toolkit';

export const selectDailyStats = createSelector(
    (state) => state.stats.totalTasksByDate,
    (state) => state.stats.tasksCompletedByDate,
    (totalTasks, tasksCompleted) => {
        const dailyStats = {};
        Object.keys(totalTasks).forEach(date => {
            const total = totalTasks[date];
            const completed = tasksCompleted[date] || 0;
            dailyStats[date] = {
                total,
                completed,
                percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
            };
        });
        return dailyStats;
    }
);
