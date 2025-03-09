export const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    return `${hoursStr}:${minutesStr}`;
};
