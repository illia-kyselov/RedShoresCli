import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import CancelSVG from '../assets/profile/CancelSVG';

const RewardModal = ({ onClose }) => {
    return (
        <Modal transparent animationType="fade" visible={true}>
            <Pressable style={styles.modalOverlay} onPress={onClose}>
                <View style={styles.modalContainer}>
                    <Pressable style={styles.cancelButton} onPress={onClose}>
                        <CancelSVG />
                    </Pressable>
                    <Text style={styles.title}>Reward unavailable</Text>
                    <Text style={styles.text}>
                        Finish the required number of tasks to unlock it
                    </Text>
                </View>
            </Pressable>
        </Modal>
    );
};

export default RewardModal;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: '#00000080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 247,
        height: 128,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        paddingBottom: 26,
        paddingRight: 22,
        paddingLeft: 28,
        position: 'relative',
        justifyContent: 'center',
    },
    cancelButton: {
        position: 'absolute',
        top: -36,
        right: -36,
        padding: 8,
        zIndex: 1,
    },
    title: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 20,
        color: '#151515',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#151515',
        textAlign: 'center',
    },
});
