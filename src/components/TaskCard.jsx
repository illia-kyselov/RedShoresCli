import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PlaySVG from '../assets/home/PlaySVG';

const TaskCard = ({ task, userPhoto }) => {
    const navigation = useNavigation();

    const handlePlayPress = () => {
        navigation.navigate('Timer', { task });
    };

    return (
        <View style={styles.card}>
            <View style={styles.cardLeft}>
                {userPhoto ? (
                    <Image source={{ uri: userPhoto }} style={styles.cardUserIcon} />
                ) : (
                    <View style={styles.cardUserIconDefault} />
                )}
                <View style={styles.cardTimes}>
                    <View style={styles.timeRowCard}>
                        <View style={styles.timeBadgeA}>
                            <Text style={styles.timeBadgeTextA}>{task.from}</Text>
                        </View>
                        <Text style={styles.dash}>-</Text>
                        <View style={styles.timeBadgeB}>
                            <Text style={styles.timeBadgeTextB}>{task.to}</Text>
                        </View>
                    </View>
                    <Text style={styles.taskTitle}>{task.name}</Text>
                </View>
            </View>
            <View style={styles.cardRight}>
                <TouchableOpacity style={styles.playCircle} onPress={handlePlayPress}>
                    <PlaySVG />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 15,
        paddingLeft: 10,
        borderRadius: 25,
        backgroundColor: '#951B0A',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    cardUserIcon: {
        width: 25,
        height: 25,
        borderRadius: 999,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 2,
    },
    cardUserIconDefault: {
        width: 25,
        height: 25,
        borderRadius: 999,
        marginRight: 10,
        backgroundColor: '#D9D9D9',
    },
    cardTimes: {
        flex: 1,
    },
    timeRowCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
    },
    timeBadgeA: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 999,
        backgroundColor: '#FCF8E8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    timeBadgeTextA: {
        color: '#000000',
        fontFamily: 'Helvetica Neue',
        fontSize: 12,
        fontWeight: '400',
    },
    dash: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        marginRight: 5,
        color: '#FFFFFF',
    },
    timeBadgeB: {
        height: 24,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 999,
        backgroundColor: '#FCF8E8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeBadgeTextB: {
        color: '#000000',
        fontFamily: 'Helvetica Neue',
        fontSize: 12,
    },
    taskTitle: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
    },
    cardRight: {
        marginLeft: 10,
    },
    playCircle: {
        width: 35,
        height: 35,
        borderRadius: 999,
        backgroundColor: '#FFB600',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TaskCard;
