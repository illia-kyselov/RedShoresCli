import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import TimerScreen from '../screens/TimerScreen';
import CongratulationsScreen from '../screens/CongratulationsScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="AddTask" component={AddTaskScreen} />
            <Stack.Screen name="Timer" component={TimerScreen} />
            <Stack.Screen name="Congratulations" component={CongratulationsScreen} />
        </Stack.Navigator>
    );
}
