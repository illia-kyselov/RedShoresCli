import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import moodReducer from './slices/moodSlice';
import userReducer from './slices/userSlice';
import achievementsReducer from './slices/achievementsSlice';
import tasksReducer from './slices/tasksSlice';
import statsReducer from './slices/statsSlice';
import usefulArticlesReducer from './slices/usefulArticlesSlice';
import quizReducer from './slices/quizSlice';

const rootReducer = combineReducers({
    mood: moodReducer,
    user: userReducer,
    achievements: achievementsReducer,
    tasks: tasksReducer,
    stats: statsReducer,
    usefulArticles: usefulArticlesReducer,
    quiz: quizReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);