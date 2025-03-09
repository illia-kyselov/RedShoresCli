import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import UserAvatar from '../components/UserAvatar';
import DateItem from '../components/DateItem';
import TaskCard from '../components/TaskCard';
import AddTaskButton from '../components/AddTaskButton';
import useDatesRange from '../hooks/useDatesRange';

export default function HomeScreen() {
    const user = useSelector((state) => state.user);
    const tasks = useSelector((state) => state.tasks.tasks);
    const displayName = user.name || '';
    const dates = useDatesRange();
    const navigation = useNavigation();

    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (dates.length > 0 && !selectedDate) {
            const today = dates.find((d) => d.isToday);
            setSelectedDate(today ? today.date : dates[0].date);
        }
    }, [dates, selectedDate]);

    const filteredTasks = tasks.filter((task) => task.date === selectedDate);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content}>
                    <UserAvatar photo={user.photo} />
                    <Text style={styles.userName}>{displayName}</Text>
                    <Text style={styles.title}>Today`s plans</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.datesScroll}
                    >
                        {dates.map((item, index) => (
                            <DateItem
                                key={index}
                                item={item}
                                active={item.date === selectedDate}
                                onPress={() => setSelectedDate(item.date)}
                            />
                        ))}
                    </ScrollView>

                    <View style={styles.scheduledRow}>
                        <Text style={styles.scheduledText}>Scheduled</Text>
                        <AddTaskButton
                            tasks={tasks}
                            onPress={() =>
                                navigation.navigate('AddTask', { selectedDate })
                            }
                        />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        {filteredTasks.map((task) => (
                            <TaskCard key={task.id} task={task} userPhoto={user.photo} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8B0000',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    content: {
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    userName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    title: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    datesScroll: {
        marginBottom: 20,
    },
    scheduledRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scheduledText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
