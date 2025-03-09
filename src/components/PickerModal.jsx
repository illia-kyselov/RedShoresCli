import React from 'react';
import { Modal, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerModal = ({ visible, onClose, selectedValue, onValueChange, minuteOptions }) => {
    return (
        <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={onValueChange}
                                style={styles.picker}
                                itemStyle={{ color: '#fff' }}
                            >
                                {minuteOptions.map((val) => (
                                    <Picker.Item key={val} label={`${val} min`} value={`${val} min`} />
                                ))}
                            </Picker>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
        backgroundColor: '#951B0A',
        borderRadius: 14,
        padding: 10,
    },
    picker: {
        width: 200,
        color: '#fff',
    },
});

export default PickerModal;
