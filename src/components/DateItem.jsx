import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DateItem = ({ item, active, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View
            style={[
                styles.dateItem,
                { backgroundColor: active ? '#FFB600' : '#951B0A' },
            ]}
        >
            <Text style={styles.dayNumber}>{item.dayNumber}</Text>
            <Text style={styles.dayAbbrev}>{item.dayAbbrev}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    dateItem: {
        height: 63,
        width: 52,
        borderRadius: 15,
        padding: 10,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayNumber: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    dayAbbrev: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default DateItem;
