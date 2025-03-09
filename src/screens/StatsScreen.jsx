import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ProgressColumn from '../components/ProgressColumn';
import { groupByWeek } from '../helpers/timeUtils';
import { selectDailyStats } from '../store/selectors';

export default function StatsScreen() {
    const dailyStats = useSelector(selectDailyStats);
    const weeks = groupByWeek(dailyStats);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.statsTitle}>Stats</Text>

                {weeks.map((week, index) => {
                    const hasData = week.data.some(item => item.percentage > 0);

                    return (
                        <View key={index} style={styles.weekBlock}>
                            <Text style={styles.weekRange}>{week.range}</Text>

                            {hasData ? (
                                <View style={styles.columnsContainer}>
                                    {week.data.map((item, i) => (
                                        <View key={i} style={styles.columnWrapper}>
                                            <ProgressColumn progress={item.percentage} />
                                            <Text style={styles.dayLabel}>{item.day}</Text>
                                        </View>
                                    ))}
                                </View>
                            ) : (
                                <Text style={styles.noData}>No data available</Text>
                            )}
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8B0000',
    },
    scrollContent: {
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    statsTitle: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 30,
    },
    weekBlock: {
        marginBottom: 30,
    },
    weekRange: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 12,
    },
    noData: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 16,
        color: '#999999',
        textAlign: 'start',
        marginTop: 10,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,
    },
    columnWrapper: {
        alignItems: 'center',
    },
    dayLabel: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 4,
    },
});
