import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBack from '../assets/home/ArrowBack';

export default function Header({ title, onBack }) {
    return (
        <View style={styles.headerRow}>
            <TouchableOpacity style={styles.headerBackButton} onPress={onBack}>
                <ArrowBack />
                <Text style={styles.headerBackText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 88,
        position: 'relative',
    },
    headerBackButton: {
        position: 'absolute',
        left: 22,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBackText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 5,
    },
    headerTitle: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
