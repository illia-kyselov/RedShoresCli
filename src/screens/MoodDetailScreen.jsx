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
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

import PlaySVG from '../assets/home/PlaySVG';
import PauseSVG from '../assets/home/PauseSVG';

export default function MoodDetailScreen() {
    const route = useRoute();
    const { item } = route.params;

    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(1);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        Sound.setCategory('Playback');

        const soundObject = new Sound(item.audio, (error) => {
            if (error) {
                console.log('Error loading sound', error);
                return;
            }
            setSound(soundObject);
            setDuration(soundObject.getDuration());
        });

        return () => {
            if (soundObject) {
                soundObject.release();
            }
        };
    }, [item.audio]);

    useEffect(() => {
        let interval;
        if (isPlaying && sound) {
            interval = setInterval(() => {
                sound.getCurrentTime((seconds) => {
                    setPosition(seconds);
                });
            }, 500);
        }
        return () => {
            if (interval) {clearInterval(interval);}
        };
    }, [isPlaying, sound]);

    const handlePlayPause = () => {
        if (!sound) {return;}

        if (isPlaying) {
            sound.pause();
            setIsPlaying(false);
        } else {
            sound.play((success) => {
                if (success) {
                    setIsPlaying(false);
                    setPosition(0);
                } else {
                    console.log('Playback failed due to audio decoding errors');
                    setIsPlaying(false);
                }
            });
            setIsPlaying(true);
        }
    };

    const handleSliderValueChange = (value) => {
        if (sound) {
            const newPosition = value * duration;
            sound.setCurrentTime(newPosition);
            setPosition(newPosition);
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
                        {isPlaying ? <PauseSVG /> : <PlaySVG />}
                    </TouchableOpacity>

                    <View style={styles.sliderContainer}>
                        <Slider
                            style={{ flex: 1 }}
                            minimumValue={0}
                            maximumValue={1}
                            value={position / duration}
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
