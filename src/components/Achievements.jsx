import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AchievementItem from './AchievementItem';

const Achievements = ({ data }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.achievementsContainer}>
                {data.map((item, index) => (
                    <AchievementItem key={index} item={item} />
                ))}
            </View>
        </ScrollView>
    );
};

export default Achievements;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: 34,
    },
    achievementsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 30,
    },
});
