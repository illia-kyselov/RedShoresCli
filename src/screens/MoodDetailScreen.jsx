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
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

export default function MoodDetailScreen() {
    const route = useRoute();
    const { item } = route.params;

    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [playbackStatus, setPlaybackStatus] = useState(null);

    useEffect(() => {
        let soundObject;

        const loadSound = async () => {
            try {
                soundObject = new Audio.Sound();
                await soundObject.loadAsync(item.audio);
                soundObject.setOnPlaybackStatusUpdate((status) => {
                    setPlaybackStatus(status);
                });
                await soundObject.playAsync();
                setSound(soundObject);
                setIsPlaying(true);
            } catch (error) {
                console.log('Error with audio', error);
            }
        };

        loadSound();

        return () => {
            if (soundObject) {
                soundObject.unloadAsync();
            }
        };
    }, [item.audio]);

    const handlePlayPause = async () => {
        if (!sound) {return;}
        if (isPlaying) {
            await sound.pauseAsync();
            setIsPlaying(false);
        } else {
            await sound.playAsync();
            setIsPlaying(true);
        }
    };

    const handleSliderValueChange = async (value) => {
        if (sound && playbackStatus && playbackStatus.durationMillis) {
            const position = Math.floor(value * playbackStatus.durationMillis);
            await sound.setPositionAsync(position);
        }
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
                <View style={styles.playerControls}>
                    <TouchableOpacity onPress={handlePlayPause} style={styles.playPauseButton}>
                        <Ionicons
                            name={isPlaying ? 'pause' : 'play'}
                            size={28}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>

                    <View style={styles.sliderContainer}>
                        <Slider
                            style={{ flex: 1 }}
                            minimumValue={0}
                            maximumValue={1}
                            value={
                                playbackStatus && playbackStatus.positionMillis && playbackStatus.durationMillis
                                    ? playbackStatus.positionMillis / playbackStatus.durationMillis
                                    : 0
                            }
                            minimumTrackTintColor="#FFB600"
                            maximumTrackTintColor="#FAF0D1"
                            thumbTintColor="#FFFFFF"
                            onSlidingComplete={handleSliderValueChange}
                        />
                    </View>
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
    },
    playerControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playPauseButton: {
        marginRight: 10,
    },
    sliderContainer: {
        flex: 1,
    },
});
