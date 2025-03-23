import { createSlice } from '@reduxjs/toolkit';

const questionsData = [
    {
        id: 1,
        question: 'How often do you make a to-do list for the day?',
        answers: ['Every day', 'Several times a week', 'Rarely or never'],
    },
    {
        id: 2,
        question: 'How do you react to unexpected tasks and schedule changes?',
        answers: [
            'I am an easy-to-adapt person and quickly rearrange my plans',
            'I lose focus a little, but I get things done',
            'I often panic or waste time rethinking',
        ],
    },
    {
        id: 3,
        question: 'Do you feel productive during the day?',
        answers: [
            'Yes, I always complete tasks on time',
            'Sometimes, but there are days when I don’t have time to do everything',
            'No, I often put things off and don’t have time to do everything',
        ],
    },
    {
        id: 4,
        question: 'How do you deal with procrastination?',
        answers: [
            'I combat it by creating clear deadlines and small tasks',
            'Sometimes I put things off, but eventually I get everything done',
            'I often put things off and have trouble getting started',
        ],
    },
    {
        id: 5,
        question: 'How do you rate the quality of your sleep?',
        answers: [
            'I sleep 7-9 hours and feel rested',
            'I sleep, but I often don’t get enough sleep or wake up during the night',
            'I often don’t get enough sleep or sleep less than 6 hours',
        ],
    },
    {
        id: 6,
        question: 'How often do you take time to rest and recharge?',
        answers: [
            'Regularly, I set aside time for rest and hobbies',
            'Sometimes, but work often takes up all my time',
            'I rarely rest, I am constantly busy',
        ],
    },
    {
        id: 7,
        question: 'Are you used to tracking the time spent on tasks?',
        answers: [
            'Yes, I use time management or time tracking apps',
            'Sometimes, but not always',
            'No, I don’t track time, it all depends on the situation',
        ],
    },
    {
        id: 8,
        question: 'How do you prioritize tasks?',
        answers: [
            'I always prioritize and start with them',
            'I try, but sometimes I start with easy or unimportant tasks',
            'I don’t always understand which tasks are more important, and I do them one by one',
        ],
    },
    {
        id: 9,
        question: 'How often do you feel stressed due to lack of time?',
        answers: [
            'Rarely, I am in control',
            'Sometimes, when there are too many tasks',
            'Often, I feel like I don’t have time to do everything',
        ],
    },
    {
        id: 10,
        question: 'How stable and predictable is your daily routine?',
        answers: [
            'My day is structured and I know in advance what I will do',
            'It is sometimes stable, but often changes happen',
            'My day is highly dependent on circumstances, and I often improvise',
        ],
    },
];

const initialState = {
    questions: questionsData,
    userAnswers: {},
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswer(state, action) {
            const { questionId, answerLetter } = action.payload;
            state.userAnswers[questionId] = answerLetter;
        },
        resetQuiz(state) {
            state.userAnswers = {};
        },
    },
});

export const { setAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
