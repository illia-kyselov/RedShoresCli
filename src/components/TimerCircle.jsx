import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CIRCLE_SIZE = 250;

export default function TimerCircle({ timerValue, progress, customColors }) {
    const strokeWidth = 6;
    const radius = (CIRCLE_SIZE - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - progress);

    const trackColor = customColors?.track || '#F1B0A7';
    const progressColor = customColors?.progress || '#FFB600';
    const timerTextColor = customColors
        ? (customColors.timerValue || '#FFB600')
        : '#FFFFFF';

    return (
        <View style={styles.timerCircleWrapper}>
            <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
                <Circle
                    cx={CIRCLE_SIZE / 2}
                    cy={CIRCLE_SIZE / 2}
                    r={radius}
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray="2,8"
                    strokeLinecap="round"
                />
                <Circle
                    cx={CIRCLE_SIZE / 2}
                    cy={CIRCLE_SIZE / 2}
                    r={radius}
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${CIRCLE_SIZE / 2}, ${CIRCLE_SIZE / 2}`}
                />
            </Svg>
            <Text style={[styles.timerValue, { color: timerTextColor }]}>{timerValue}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    timerCircleWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    timerValue: {
        position: 'absolute',
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 40,
        color: '#FFFFFF',
    },
});
