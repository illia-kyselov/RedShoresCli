import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import UserAvatar from '../components/UserAvatar';
import DateItem from '../components/DateItem';
import TaskCard from '../components/TaskCard';
import AddTaskButton from '../components/AddTaskButton';
import useDatesRange from '../hooks/useDatesRange';

import BookSVG from '../assets/articles/BookSVG';
import QuizSVG from '../assets/articles/QuizSVG';

export default function HomeScreen() {
    const user = useSelector((state) => state.user);
    const tasks = useSelector((state) => state.tasks.tasks);
    const displayName = user.name || '';
    const dates = useDatesRange();
    const navigation = useNavigation();

    const [selectedDate, setSelectedDate] = useState(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setIsMenuOpen(true)}
            >
                <Image
                    source={require('../assets/articles/menu.png')}
                    style={styles.menuIcon}
                />
            </TouchableOpacity>

            <Modal
                visible={isMenuOpen}
                animationType="slide"
                transparent
                onRequestClose={() => setIsMenuOpen(false)}
            >
                <Pressable style={styles.overlay} onPress={() => setIsMenuOpen(false)} />

                <View style={styles.popupContainer}>
                    <View style={styles.swipeIndicator} />

                    <Text style={styles.popupTitle}>Menu</Text>

                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            setIsMenuOpen(false);
                            navigation.navigate('UsefulArticles');
                        }}
                    >
                        <BookSVG />
                        <Text style={styles.menuItemText}>Useful articles</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            setIsMenuOpen(false);
                            navigation.navigate('Quiz');
                        }}
                    >
                        <QuizSVG />
                        <Text style={styles.menuItemText}>Quiz</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
    menuButton: {
        position: 'absolute',
        bottom: 24,
        right: 16,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuIcon: {
        width: 66,
        height: 66,
        resizeMode: 'contain',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    popupContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 366.57,
        backgroundColor: '#730A0A',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

        paddingHorizontal: 22,
        paddingTop: 10,
    },
    swipeIndicator: {
        width: 48,
        height: 1.2,
        backgroundColor: '#FFFFFF',
        borderRadius: 99,
        alignSelf: 'center',
    },
    popupTitle: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 26,
        marginBottom: 36,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 36,
    },
    menuItemText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 10,
    },
});
