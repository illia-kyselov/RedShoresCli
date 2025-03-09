export function calculateTotalTimeSeconds(from, to) {
    const [fromH, fromM] = from.split(':').map(Number);
    const [toH, toM] = to.split(':').map(Number);
    const fromSeconds = fromH * 3600 + fromM * 60;
    const toSeconds = toH * 3600 + toM * 60;
    return toSeconds - fromSeconds;
}

export function convertTimeStringToSeconds(value) {
    const minutes = parseInt(value, 10);
    return minutes * 60;
}

export function formatSeconds(sec) {
    const hh = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mm = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const ss = String(sec % 60).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}

export function getStartOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
    return d;
}

export function formatDayMonth(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}.${month}`;
}

function getWeekdayIndex(date) {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
}

function formatDateLocal(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function groupByWeek(dailyStats) {
    const weekGroups = {};
    const dayNames = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const today = new Date();
    const currentMonday = getStartOfWeek(today);

    if (Object.keys(dailyStats).length === 0) {
        const sunday = new Date(currentMonday);
        sunday.setDate(currentMonday.getDate() + 6);
        return [{
            range: `${formatDayMonth(currentMonday)} - ${formatDayMonth(sunday)} (${currentMonday.getFullYear()})`,
            data: dayNames.map(day => ({ day, percentage: 0 })),
            monday: currentMonday,
            isCurrentWeek: true,
        }];
    }

    Object.keys(dailyStats).forEach(dateStr => {
        const { percentage } = dailyStats[dateStr];
        const date = new Date(dateStr);
        const monday = getStartOfWeek(date);
        const mondayStr = formatDateLocal(monday);
        if (!weekGroups[mondayStr]) {
            weekGroups[mondayStr] = Array(7).fill(0);
        }
        const index = getWeekdayIndex(date);
        weekGroups[mondayStr][index] = percentage;
    });

    let weeksArray = Object.keys(weekGroups).map(mondayStr => {
        const [year, month, day] = mondayStr.split('-').map(Number);
        const monday = new Date(year, month - 1, day);
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        const range = `${formatDayMonth(monday)} - ${formatDayMonth(sunday)} (${monday.getFullYear()})`;
        const data = weekGroups[mondayStr].map((percentage, index) => ({
            day: dayNames[index],
            percentage,
        }));
        const isCurrentWeek = monday.getTime() === currentMonday.getTime();
        return { range, data, monday, isCurrentWeek };
    });

    weeksArray = weeksArray.filter(week => week.monday <= currentMonday);
    weeksArray.sort((a, b) => b.monday - a.monday);

    return weeksArray;
}
