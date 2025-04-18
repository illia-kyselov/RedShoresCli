import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import TimerCircle from '../components/TimerCircle';

import PlaySVG from '../assets/home/PlaySVG';
import PauseSVG from '../assets/home/PauseSVG';

export default function MoodDetailScreen() {
    const route = useRoute();
    const { item } = route.params;

    const totalTime = 300;
    const [timeLeft, setTimeLeft] = useState(totalTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalId);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(prev => !prev);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
        const secs = Math.floor(seconds % 60)
            .toString()
            .padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const progress = (totalTime - timeLeft) / totalTime;

    const customTimerStyles = {
        progress: '#FFB600',
        track: '#02BBBE',
    };

    return (
        <LinearGradient
            colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.screenContainer}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        style={styles.scrollContainer}
                    >
                        {item.image ? (
                            <Image
                                source={item.image}
                                style={styles.itemImage}
                                resizeMode="cover"
                            />
                        ) : (
                            <View style={[styles.itemImage, styles.fallbackImage]} />
                        )}
                        <Text style={styles.itemName}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>

                        <View style={styles.timerSection}>
                            <TimerCircle
                                timerValue={formatTime(timeLeft)}
                                progress={progress}
                                customColors={customTimerStyles}
                            />
                            <View style={styles.bottomRow}>
                                <TouchableOpacity
                                    onPress={toggleTimer}
                                    style={[
                                        styles.playPauseButton,
                                        isRunning ? styles.pauseButton : styles.playButton,
                                    ]}
                                >
                                    {isRunning ? <PauseSVG /> : <PlaySVG />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    safeContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 15,
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    itemImage: {
        height: 208,
        width: '100%',
        borderRadius: 25,
        marginBottom: 18,
    },
    fallbackImage: {
        backgroundColor: '#8F1A0A',
    },
    itemName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 18,
    },
    itemDescription: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
    },
    timerSection: {
        alignItems: 'center',
        paddingBottom: 20,
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
        backgroundColor: '#02BBBE',
    },
    pauseButton: {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#02BBBE',
    },
});
