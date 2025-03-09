import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoodScreen from '../screens/MoodScreen';
import MoodDetailScreen from '../screens/MoodDetailScreen';

const Stack = createStackNavigator();

export default function MoodStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MoodHome" component={MoodScreen} />
            <Stack.Screen name="MoodDetail" component={MoodDetailScreen} />
        </Stack.Navigator>
    );
}
