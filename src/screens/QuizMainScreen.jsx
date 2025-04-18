import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import ArrowBack from '../assets/home/ArrowBack.jsx';

export default function QuizMainScreen() {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={[ '#610A01', '#731704', '#7C1B0A', '#972719']}
            locations={[0, 0.08, 0.535, 0.74, 0.96, 1]}
            style={styles.container}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowBack />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Quiz</Text>
                </View>

                <View style={styles.content}>
                    <Image
                        source={require('../assets/quiz/quizMain.png')}
                        style={styles.quizMainImage}
                        resizeMode="contain"
                    />

                    <Text style={styles.description}>
                        Take the test to find out how productive you are and how you can improve your efficiency!
                    </Text>

                    <TouchableOpacity
                        style={styles.playButtonWrapper}
                        onPress={() => navigation.navigate('QuizQuestion', { questionIndex: 0 })}
                    >
                        <Image
                            source={require('../assets/quiz/play.png')}
                            style={styles.playButtonImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginLeft: 16,
        marginRight: 8,
    },
    headerTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 22,
        color: '#ffffff',
    },
    content: {
        marginTop: 60,
        alignItems: 'center',
        paddingHorizontal: 26,
    },
    description: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        color: '#ffffff',
    },
    playButtonWrapper: {
        marginTop: 40,
    },
    playButtonImage: {
        width: 80,
        height: 80,
    },
});
