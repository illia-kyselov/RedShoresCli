import { useMemo } from 'react';

export default function useDatesRange() {
    return useMemo(() => {
        const today = new Date();
        const currentDay = today.getDate();
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        const arr = [];
        for (let i = currentDay; i <= daysInMonth; i++) {
            const date = new Date(today.getFullYear(), today.getMonth(), i);
            const dayAbbrev = date
                .toLocaleString('en-US', { weekday: 'short' })
                .toLowerCase()
                .slice(0, 3);

            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

            arr.push({
                dayNumber: i,
                dayAbbrev,
                isToday: i === currentDay,
                date: formattedDate,
            });
        }
        return arr;
    }, []);
}
