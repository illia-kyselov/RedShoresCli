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
import Slider from '@react-native-community/slider';

import PlaySVG from '../assets/home/PlaySVG';
import PauseSVG from '../assets/home/PauseSVG';

export default function MoodDetailScreen() {
    const route = useRoute();
    const { item } = route.params;

    const [timeLeft, setTimeLeft] = useState(300);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft((prev) => {
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
        setIsRunning((prev) => !prev);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <LinearGradient
            colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
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
                </ScrollView>
            </SafeAreaView>

            <View style={styles.playerContainer}>
                <View style={styles.inlineControls}>
                    <TouchableOpacity
                        onPress={toggleTimer}
                        style={styles.playPauseButton}
                    >
                        {isRunning ? <PauseSVG /> : <PlaySVG />}
                    </TouchableOpacity>

                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        value={(300 - timeLeft) / 300}
                        minimumTrackTintColor="#FFB600"
                        maximumTrackTintColor="#FAF0D1"
                        thumbTintColor="#FFFFFF"
                        disabled={true}
                    />

                    <Text style={styles.timeText}>{formatTime(timeLeft)}</Text>
                </View>
            </View>
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
    contentContainer: {
        paddingBottom: 100,
    },
    itemImage: {
        height: 208,
        width: '100%',
        borderRadius: 25,
        marginBottom: 16,
    },
    fallbackImage: {
        backgroundColor: '#8F1A0A',
    },
    itemName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    itemDescription: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
    },
    playerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#02BBBE',
        paddingHorizontal: 16,
        paddingVertical: 10,
        height: 50,
    },
    inlineControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playPauseButton: {
        marginRight: 10,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slider: {
        flex: 1,
        marginRight: 10,
    },
    timeText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Helvetica Neue',
    },
});
