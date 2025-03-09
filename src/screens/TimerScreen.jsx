import React, { useState, useEffect, useMemo } from 'react';
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import TimerCircle from '../components/TimerCircle';
import FocusBlock from '../components/FocusBlock';
import PlaySVG from '../assets/home/PlaySVG';
import PauseSVG from '../assets/home/PauseSVG';
import { calculateTotalTimeSeconds, convertTimeStringToSeconds, formatSeconds } from '../helpers/timeUtils';

export default function TaskTimerScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { task } = route.params || {};

    const initialSeconds = useMemo(() => calculateTotalTimeSeconds(task.from, task.to), [task]);
    const focusTimeInitial = useMemo(() => convertTimeStringToSeconds(task.focusTime), [task]);
    const breakTimeInitial = useMemo(() => convertTimeStringToSeconds(task.breakTime), [task]);

    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
    const [focusTimeLeft, setFocusTimeLeft] = useState(focusTimeInitial);
    const [breakTimeLeft, setBreakTimeLeft] = useState(breakTimeInitial);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    useEffect(() => {
        let interval = null;

        if (isPlaying) {
            interval = setInterval(() => {
                setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
                setFocusTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setTimeout(() => navigation.replace('Congratulations', { task }), 0);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            interval = setInterval(() => {
                setBreakTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setBreakTimeLeft(breakTimeInitial);
                        setIsPlaying(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isPlaying, breakTimeInitial, navigation]);

    const progress = useMemo(() => (initialSeconds === 0 ? 1 : (initialSeconds - secondsLeft) / initialSeconds), [initialSeconds, secondsLeft]);

    const timerValue = formatSeconds(secondsLeft);
    const focusValue = isPlaying ? formatSeconds(focusTimeLeft) : formatSeconds(breakTimeLeft);
    const focusLabel = isPlaying ? 'focus time' : 'break time';

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Task" onBack={() => navigation.goBack()} />
            <Text style={styles.taskName}>{task?.name}</Text>
            <TimerCircle timerValue={timerValue} progress={progress} />
            <View style={styles.bottomRow}>
                <FocusBlock label={focusLabel} value={focusValue} />
                <TouchableOpacity
                    style={[styles.playPauseButton, isPlaying ? styles.pauseButton : styles.playButton]}
                    onPress={handlePlayPause}
                >
                    {isPlaying ? <PauseSVG /> : <PlaySVG />}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8B0000',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 22,
    },
    taskName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    playPauseButton: {
        width: 92,
        height: 68,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        backgroundColor: '#FFB600',
    },
    pauseButton: {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#FFB600',
    },
});
