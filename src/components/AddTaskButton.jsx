import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PlusSVG from '../assets/home/PlusSVG';

const AddTaskButton = ({ tasks, onPress }) => (
    <TouchableOpacity
        style={[
            styles.addTaskButton,
            { backgroundColor: tasks && tasks.length > 0 ? '#FFB600' : '#B02E1C' },
        ]}
        onPress={onPress}
    >
        <PlusSVG style={styles.plusIcon} />
        <Text style={styles.addTaskText}>Add task</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    addTaskButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        paddingHorizontal: 10,
        borderRadius: 999,
    },
    plusIcon: {
        marginRight: 4,
    },
    addTaskText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 13,
        color: '#FFFFFF',
    },
});

export default AddTaskButton;
