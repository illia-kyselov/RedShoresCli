import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moods: [
        {
            title: 'Quiet Shore',
            description: 'Quiet Shore is a place for deep relaxation, surrounded by the gentle sounds of waves and a fresh sea breeze. Here, you can release tension, focus on your breathing, and let go of unnecessary thoughts. The sounds of nature, the soft sand underfoot, and the calming waves help you sink into a state of complete tranquility. An ideal choice for winding down in the evening after a busy day.',
            audio: require('../../assets/audio/calm_shore.mp3'),
            image: require('../../assets/images/calm_shore.png'),
        },
        {
            title: 'Productivity Point',
            description: 'Productivity Point is the perfect location for focused work or study. The wide horizon and soft murmur of the sea help you maintain concentration and stay productive. This location is designed to support a flow state, blocking out distractions and allowing for clear, efficient thinking. At this point, you’ll feel a surge of energy and mental clarity, making it easier to tackle even the most challenging tasks.',
            audio: require('../../assets/audio/focus_cliffs.mp3'),
            image: require('../../assets/images/focus_cliffs.png'),
        },
        {
            title: 'Sunset Beach',
            description: 'Sunset Beach is a restorative space for light meditation. The orange sunset on the horizon, warm sand, and soothing sound of waves create a unique atmosphere that promotes deep recovery. This location helps release the day\'s tension, replenishing energy and preparing you for new achievements. Here, it\'s easy to turn inward and restore inner balance, revitalizing both mind and body.',
            audio: require('../../assets/audio/sunset_beach.mp3'),
            image: require('../../assets/images/sunset_beach.png'),
        },
        {
            title: 'Lagoon of Serenity',
            description: 'The Lagoon of Serenity is a secluded spot for tranquility and inner harmony. With the gentle sound of calm waters and occasional seagull calls, it offers ideal conditions for meditation or a short pause during the day. The lagoon fills the soul with peace, allowing you to slow down and focus on inner feelings. This location is perfect for mindfulness practice or a quick recharge in the middle of the day.',
            audio: require('../../assets/audio/calm_lagoon.mp3'),
            image: require('../../assets/images/calm_lagoon.png'),
        },
        {
            title: 'Morning Surf',
            description: 'Morning Surf is an energizing location to start your day, filled with the sound of waves and a light breeze. This setting invigorates and prepares you for a productive, active day. The wind and fresh waves bring clarity and inspiration, making it a great choice for morning rituals like stretching, planning, or a gentle walk before work.',
            audio: require('../../assets/audio/morning_surf.mp3'),
            image: require('../../assets/images/morning_surf.png'),
        },
        {
            title: 'Crystal Cove',
            description: 'Crystal Cove is a serene and focused environment perfect for diving into your tasks with clarity and precision. The sound of gentle waves lapping against crystal-clear waters creates a mental space that feels open and refreshing. Here, distractions fade away as the tranquil environment promotes sustained focus and creativity. Ideal for deep work sessions or brainstorming, this cove encourages a natural flow of ideas and concentration.',
            audio: require('../../assets/audio/crystal_cove_focus.mp3'),
            image: require('../../assets/images/crystal_cove.png'),
        },
    ],
};

const moodSlice = createSlice({
    name: 'mood',
    initialState,
    reducers: {},
});

export default moodSlice.reducer;
