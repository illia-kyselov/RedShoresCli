import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { removeTask } from '../store/slices/tasksSlice';
import { incrementDaily, incrementWeekly } from '../store/slices/achievementsSlice';
import { addCompletedTask } from '../store/slices/statsSlice';

const CongratulationsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const route = useRoute();
    const { task } = route.params || {};

    useEffect(() => {
        dispatch(removeTask(task.id));
        dispatch(incrementDaily());
        dispatch(incrementWeekly());

        if (task && task.date) {
            const formattedDate = new Date(task.date).toISOString().slice(0, 10);
            dispatch(addCompletedTask(formattedDate));
        }
    }, [dispatch, task]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backgroundContainer}>
                {Array.from({ length: 18 }).map((_, i) => (
                    <Text
                        key={i}
                        style={styles.backgroundText}
                        numberOfLines={1}
                        ellipsizeMode="clip"
                    >
                        You're good!You're good!
                    </Text>
                ))}
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HomeMain')}
            >
                <Text style={styles.buttonText}>Go to main</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CongratulationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8F1A0A',
    },
    backgroundContainer: {
        alignItems: 'center',
    },
    backgroundText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 40,
        color: '#FFFFFF80',
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 106,
        alignSelf: 'center',
        width: 200,
        height: 80,
        paddingTop: 10,
        paddingRight: 12,
        paddingBottom: 10,
        paddingLeft: 12,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B02E1C',
    },
    buttonText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 25,
        color: '#FFFFFF',
    },
});
