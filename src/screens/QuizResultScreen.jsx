import React, { useMemo } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { resetQuiz } from '../store/slices/quizSlice';
import imageA from '../assets/quiz/result/A.jpeg';
import imageB from '../assets/quiz/result/B.jpeg';
import imageC from '../assets/quiz/result/C.jpeg';
import ArrowBack from '../assets/home/ArrowBack.jsx';

export default function QuizResultScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userAnswers = useSelector(state => state.quiz.userAnswers);

    const counts = useMemo(() => {
        const result = { A: 0, B: 0, C: 0 };
        Object.values(userAnswers).forEach(answer => {
            if (answer === 'A') {result.A += 1;}
            if (answer === 'B') {result.B += 1;}
            if (answer === 'C') {result.C += 1;}
        });
        return result;
    }, [userAnswers]);

    const resultLetter = useMemo(() => {
        return Object.keys(counts).reduce((prev, curr) =>
            counts[prev] > counts[curr] ? prev : curr
        );
    }, [counts]);

    let resultText = '';
    let resultImage = imageA;

    if (resultLetter === 'A') {
        resultText =
            'More a: You are great at managing your time and habits! You have a clear plan and know how to control your productivity.';
        resultImage = imageA;
    } else if (resultLetter === 'B') {
        resultText =
            'More b: You are on the right track, but sometimes you need to improve your time management and be more consistent.';
        resultImage = imageB;
    } else {
        resultText =
            'More answers c: You need to work harder on time management and develop healthy habits to work efficiently.';
        resultImage = imageC;
    }

    const handleTryAgain = () => {
        dispatch(resetQuiz());
        navigation.navigate('QuizQuestion', { questionIndex: 0 });
    };

    return (
        <LinearGradient
            colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
            locations={[0, 0.08, 0.535, 0.74, 0.96, 1]}
            style={styles.container}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeMain')}>
                        <ArrowBack />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Back</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.resultsTitle}>Results:</Text>

                    <View style={styles.resultBlock}>
                        <Image source={resultImage} style={styles.resultImage} resizeMode="cover" />
                        <Text style={styles.resultText}>{resultText}</Text>
                    </View>

                    <TouchableOpacity style={styles.tryAgainButton} onPress={handleTryAgain}>
                        <Text style={styles.tryAgainButtonText}>Try again</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        height: 82,
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
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    resultsTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 26,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 82,
        marginBottom: 32,
    },
    resultBlock: {
        height: 318,
        borderRadius: 20,
        backgroundColor: '#951B0A',
        padding: 16,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 32,
    },
    resultImage: {
        width: '100%',
        height: 211,
        borderRadius: 18,
        marginBottom: 24,
    },
    resultText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    tryAgainButton: {
        height: 59,
        borderRadius: 100,
        backgroundColor: '#FFB600',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    tryAgainButtonText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 16,
        color: '#151515',
    },
});
