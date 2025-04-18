import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import ArrowBack from '../assets/home/ArrowBack';
import ArrowDownSVG from '../assets/home/ArrowDownSVG';
import { addTask } from '../store/slices/tasksSlice';

import { formatTime } from '../helpers/timeHelpers';
import TimePickerModal from '../components/TimePickerModal';
import PickerModal from '../components/PickerModal';

export default function AddTaskScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const { selectedDate } = route.params;
    const [taskName, setTaskName] = useState('');
    const [fromTime, setFromTime] = useState(new Date(0, 0, 0, 9, 30));
    const [toTime, setToTime] = useState(new Date(0, 0, 0, 11, 30));
    const [focusTime, setFocusTime] = useState('10 min');
    const [breakTime, setBreakTime] = useState('10 min');

    const [showFromPicker, setShowFromPicker] = useState(false);
    const [showToPicker, setShowToPicker] = useState(false);
    const [showFocusPicker, setShowFocusPicker] = useState(false);
    const [showBreakPicker, setShowBreakPicker] = useState(false);

    const minuteOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

    const isFormValid =
        taskName.trim() !== '' &&
        focusTime.trim() !== '' &&
        breakTime.trim() !== '' &&
        fromTime < toTime;

    const handleAddPress = () => {
        if (!isFormValid) {
            return;
        }
        const newTask = {
            id: Date.now(),
            name: taskName,
            from: formatTime(fromTime),
            to: formatTime(toTime),
            focusTime: typeof focusTime === 'number' ? `${focusTime} min` : focusTime,
            breakTime: typeof breakTime === 'number' ? `${breakTime} min` : breakTime,
            date: selectedDate,
        };
        dispatch(addTask(newTask));
        navigation.goBack();
    };

    const handleTimeChange = (event, selectedDate, setTime, closePicker) => {
        if (event.type === 'set' && selectedDate) {
            setTime(selectedDate);
        }
        closePicker(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowBack />
                        <Text style={styles.headerButtonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.headerButton, { opacity: isFormValid ? 1 : 0.5 }]}
                        onPress={handleAddPress}
                        disabled={!isFormValid}
                    >
                        <Text style={styles.headerButtonText}>Add Task</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Name of task</Text>
                    <TextInput
                        style={[styles.input, { color: '#FFFFFF' }]}
                        placeholder="Enter task name"
                        placeholderTextColor="#FFFFFF99"
                        value={taskName}
                        onChangeText={setTaskName}
                    />
                    <View style={styles.vSpace20} />
                    <View style={styles.timeRow}>
                        <View style={styles.timeBlock}>
                            <TouchableOpacity
                                style={[styles.input, styles.dropdownInput]}
                                onPress={() => setShowFromPicker(true)}
                            >
                                <View style={styles.rowBetween}>
                                    <Text style={styles.leftLabel}>From</Text>
                                    <Text style={styles.rightValue}>{formatTime(fromTime)}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.hSpace10} />
                        <View style={styles.timeBlock}>
                            <TouchableOpacity
                                style={[styles.input, styles.dropdownInput]}
                                onPress={() => setShowToPicker(true)}
                            >
                                <View style={styles.rowBetween}>
                                    <Text style={styles.leftLabel}>To</Text>
                                    <Text style={styles.rightValue}>{formatTime(toTime)}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.vSpace20} />
                    <TouchableOpacity
                        style={[styles.input, styles.dropdownInput]}
                        onPress={() => setShowFocusPicker(true)}
                    >
                        <View style={styles.rowBetween}>
                            <Text style={styles.leftLabel}>Focus time</Text>
                            <View style={styles.rightContainer}>
                                <Text style={styles.rightValue}>{focusTime}</Text>
                                <ArrowDownSVG />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.vSpace10} />
                    <TouchableOpacity
                        style={[styles.input, styles.dropdownInput]}
                        onPress={() => setShowBreakPicker(true)}
                    >
                        <View style={styles.rowBetween}>
                            <Text style={styles.leftLabel}>Break time</Text>
                            <View style={styles.rightContainer}>
                                <Text style={styles.rightValue}>{breakTime}</Text>
                                <ArrowDownSVG />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.vSpace10} />
                </View>
            </View>
            <TimePickerModal
                visible={showFromPicker}
                onClose={() => setShowFromPicker(false)}
                value={fromTime}
                onChange={(event, selectedDate) =>
                    handleTimeChange(event, selectedDate, setFromTime, setShowFromPicker)
                }
            />
            <TimePickerModal
                visible={showToPicker}
                onClose={() => setShowToPicker(false)}
                value={toTime}
                onChange={(event, selectedDate) =>
                    handleTimeChange(event, selectedDate, setToTime, setShowToPicker)
                }
            />
            <PickerModal
                visible={showFocusPicker}
                onClose={() => setShowFocusPicker(false)}
                selectedValue={focusTime}
                onValueChange={(itemValue) => setFocusTime(itemValue)}
                minuteOptions={minuteOptions}
            />
            <PickerModal
                visible={showBreakPicker}
                onClose={() => setShowBreakPicker(false)}
                selectedValue={breakTime}
                onValueChange={(itemValue) => setBreakTime(itemValue)}
                minuteOptions={minuteOptions}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#8B0000' },
    content: { paddingTop: 20, paddingHorizontal: 15 },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    headerButton: { flexDirection: 'row', alignItems: 'center' },
    headerButtonText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 5,
    },
    divider: { marginBottom: 32 },
    label: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#E4E4E4',
        paddingHorizontal: 10,
        borderRadius: 16,
        justifyContent: 'center',
        backgroundColor: '#951B0A',
    },
    dropdownInput: { backgroundColor: '#951B0A' },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    leftLabel: { fontFamily: 'Helvetica Neue', fontSize: 14, color: '#FFFFFF' },
    rightValue: { fontFamily: 'Helvetica Neue', fontSize: 14, color: '#FFFFFF' },
    rightContainer: { flexDirection: 'row', alignItems: 'center' },
    timeRow: { flexDirection: 'row', justifyContent: 'space-between' },
    timeBlock: { flex: 1 },
    hSpace10: { width: 10 },
    vSpace20: { height: 20 },
    vSpace10: { height: 10 },
});
