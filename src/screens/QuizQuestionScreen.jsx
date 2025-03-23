import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { setAnswer } from '../store/slices/quizSlice';

const images = {
    '1': require('../assets/quiz/question/1.jpeg'),
    '2': require('../assets/quiz/question/2.jpeg'),
    '3': require('../assets/quiz/question/3.jpeg'),
    '4': require('../assets/quiz/question/4.jpeg'),
    '5': require('../assets/quiz/question/5.jpeg'),
    '6': require('../assets/quiz/question/6.jpeg'),
    '7': require('../assets/quiz/question/7.jpeg'),
    '8': require('../assets/quiz/question/8.jpeg'),
    '9': require('../assets/quiz/question/9.jpeg'),
    '10': require('../assets/quiz/question/10.jpeg'),
};

export default function QuizQuestionScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { questionIndex } = route.params;
    const questions = useSelector(state => state.quiz.questions);
    const userAnswers = useSelector(state => state.quiz.userAnswers);

    if (!questions[questionIndex]) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ textAlign: 'center', marginTop: 50 }}>No question found</Text>
            </SafeAreaView>
        );
    }

    const totalQuestions = questions.length;
    const currentQuestion = questions[questionIndex];
    const handleAnswerPress = answerIndex => {
        const letters = ['A', 'B', 'C'];
        const letter = letters[answerIndex];
        dispatch(setAnswer({ questionId: currentQuestion.id, answerLetter: letter }));
        const nextIndex = questionIndex + 1;
        if (nextIndex < totalQuestions) {
            navigation.navigate('QuizQuestion', { questionIndex: nextIndex });
        } else {
            navigation.navigate('QuizResult');
        }
    };

    return (
        <LinearGradient
            colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
            locations={[0, 0.5, 0.8, 1]}
            style={styles.container}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.exitButton}
                    onPress={() => navigation.navigate('HomeMain')}
                >
                    <Image source={require('../assets/quiz/exit.png')} />
                </TouchableOpacity>
                <Image
                    source={images[currentQuestion.id]}
                    style={styles.questionImage}
                    resizeMode="cover"
                />
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.questionBlock}>
                        <View style={styles.topRow}>
                            <View style={styles.progressBarBackground}>
                                <View
                                    style={[
                                        styles.progressBarFill,
                                        { width: `${((questionIndex + 1) / totalQuestions) * 100}%` },
                                    ]}
                                />
                            </View>
                            <Text style={styles.counterText}>
                                {questionIndex + 1}/{totalQuestions}
                            </Text>
                        </View>
                        <Text style={styles.questionText}>{currentQuestion.question}</Text>
                    </View>
                    {currentQuestion.answers.map((answer, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.answerOption}
                            onPress={() => handleAnswerPress(index)}
                        >
                            <View style={styles.answerCircle}>
                                <Text style={styles.answerLetter}>{['A', 'B', 'C'][index]}</Text>
                            </View>
                            <Text style={styles.answerText}>{answer}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    exitButton: {
        position: 'absolute',
        top: 54,
        right: 20,
        zIndex: 10,
    },
    questionImage: {
        width: '100%',
        height: 351,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderRadius: 30,
    },
    scrollContent: {
        paddingTop: 312,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    questionBlock: {
        backgroundColor: '#951B0A',
        borderRadius: 30,
        paddingVertical: 34,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
        justifyContent: 'space-between',
    },
    progressBarBackground: {
        flex: 1,
        height: 12,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        marginRight: 20,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: 12,
        borderRadius: 16,
        backgroundColor: '#FFC300',
    },
    counterText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 14,
        color: '#FFFFFF',
    },
    questionText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 18,
        color: '#FFFFFF',
    },
    answerOption: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 57,
        borderRadius: 45,
        backgroundColor: '#951B0A',
        marginBottom: 5,
        paddingHorizontal: 14,
    },
    answerCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#383838',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    answerLetter: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 14,
        color: '#FFFFFF',
    },
    answerText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
        flexShrink: 1,
    },
});
