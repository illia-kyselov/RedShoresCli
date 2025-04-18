import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FocusBlock({ label, value }) {
    return (
        <View style={styles.focusBlock}>
            <Text style={styles.focusLabel}>{label}</Text>
            <Text style={styles.focusValue}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    focusBlock: {
        height: 68,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 999,
        backgroundColor: '#951B0A',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    focusLabel: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 12,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    focusValue: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 22,
        color: '#FFFFFF',
    },
});
