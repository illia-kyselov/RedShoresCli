/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store/store';

import HomeSVG from './src/assets/navbar/HomeSVG';
import StatsSVG from './src/assets/navbar/StatsSVG';
import MoodSVG from './src/assets/navbar/MoodSVG';
import ProfileSVG from './src/assets/navbar/ProfileSVG';

import HomeStack from './src/navigation/HomeStack';
import StatsScreen from './src/screens/StatsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MoodStack from './src/navigation/MoodStack';

const Tab = createBottomTabNavigator();

function getTabBarVisibility(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeMain';
    if (['Timer', 'Congratulations', 'UsefulArticles', 'ArticleDetails', 'QuizResult', 'QuizQuestion', 'Quiz'].includes(routeName)) {
        return { display: 'none' };
    }
    return {};
}

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ color, size }) => {
                                switch (route.name) {
                                    case 'Home':
                                        return <HomeSVG fill={color} width={size} height={size} />;
                                    case 'Stats':
                                        return <StatsSVG fill={color} width={size} height={size} />;
                                    case 'Mood':
                                        return <MoodSVG fill={color} width={size} height={size} />;
                                    case 'Profile':
                                        return <ProfileSVG fill={color} width={size} height={size} />;
                                    default:
                                        return null;
                                }
                            },
                            tabBarLabelStyle: {
                                fontFamily: 'Helvetica Neue',
                                fontWeight: '500',
                                fontSize: 12,
                            },
                            tabBarActiveTintColor: '#FFFFFF',
                            tabBarInactiveTintColor: '#999999',
                            tabBarStyle: {
                                backgroundColor: '#8F1A0A',
                                height: 106,
                                shadowColor: '#00000012',
                                shadowOffset: { width: 0, height: -2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 50,
                                elevation: 10,
                                paddingTop: 20,
                                borderTopWidth: 0,
                                borderTopColor: 'transparent',
                            },
                            headerShown: false,
                        })}
                    >
                        <Tab.Screen
                            name="Home"
                            component={HomeStack}
                            options={({ route }) => ({
                                tabBarStyle: {
                                    ...getTabBarVisibility(route),
                                    backgroundColor: '#8F1A0A',
                                    height: 106,
                                    shadowColor: '#00000012',
                                    shadowOffset: { width: 0, height: -2 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 50,
                                    elevation: 10,
                                    paddingTop: 20,
                                    borderTopWidth: 0,
                                    borderTopColor: 'transparent',
                                },
                            })}
                        />
                        <Tab.Screen name="Stats" component={StatsScreen} />
                        <Tab.Screen name="Mood" component={MoodStack} />
                        <Tab.Screen name="Profile" component={ProfileScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
