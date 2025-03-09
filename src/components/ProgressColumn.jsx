import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WaveSVG from '../assets/stats/WaveSVG';

export default function ProgressColumn({ progress }) {
    const fillHeight = Math.round((150 * progress) / 100);

    return (
        <View style={styles.columnBackground}>
            <View style={[styles.fill, { height: fillHeight }]} />

            {progress > 0 && (
                <View style={[styles.waveContainer, { bottom: fillHeight - 5 }]}>
                    <WaveSVG />
                </View>
            )}

            <View style={styles.percentContainer}>
                <Text style={styles.percentNumber}>{progress}</Text>
                <Text style={styles.percentSymbol}>%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    columnBackground: {
        width: 44,
        height: 166,
        borderRadius: 999,
        backgroundColor: '#2F4F4F',
        position: 'relative',
        overflow: 'hidden',
    },
    fill: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#02BBBE',
    },
    waveContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
    percentContainer: {
        position: 'absolute',
        bottom: 22,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    percentNumber: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    percentSymbol: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 14,
        color: '#FFFFFF',
    },
});
