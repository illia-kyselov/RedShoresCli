import React from 'react';
import { View, StyleSheet } from 'react-native';
import AchievementItem from './AchievementItem';

const Achievements = ({ data }) => {
    return (
        <View style={styles.achievementsContainer}>
            {data.map((item, index) => (
                <AchievementItem key={index} item={item} />
            ))}
        </View>
    );
};

export default Achievements;

const styles = StyleSheet.create({
    achievementsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 34,
        marginBottom: 30,
    },
});
