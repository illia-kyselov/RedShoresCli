import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import TimerScreen from '../screens/TimerScreen';
import CongratulationsScreen from '../screens/CongratulationsScreen';
import UsefulArticlesScreen from '../screens/UsefulArticlesScreen';
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import QuizMainScreen from '../screens/QuizMainScreen';
import QuizQuestionScreen from '../screens/QuizQuestionScreen';
import QuizResultScreen from '../screens/QuizResultScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="AddTask" component={AddTaskScreen} />
            <Stack.Screen name="Timer" component={TimerScreen} />
            <Stack.Screen name="Congratulations" component={CongratulationsScreen} />
            <Stack.Screen name="UsefulArticles" component={UsefulArticlesScreen} />
            <Stack.Screen name="ArticleDetails" component={ArticleDetailsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Quiz" component={QuizMainScreen} />
            <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
            <Stack.Screen name="QuizResult" component={QuizResultScreen} />
        </Stack.Navigator>
    );
}
