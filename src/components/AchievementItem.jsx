import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';
import HorizontalWaveSVG from '../assets/profile/HorizontalWaveSVG';
import RewardModal from './RewardModal';

const AchievementItem = ({ item, userTotalTasks = 0 }) => {
    const [showPopup, setShowPopup] = useState(false);

    const isCompletedType = item.type === 'completed';

    let displayNumber;
    if (!isCompletedType) {
        displayNumber = `${item.current}/${item.goal}`;
    } else {
        displayNumber = `${item.goal}`;
    }

    const isLocked = isCompletedType ? item.current < item.goal : false;

    const handlePress = () => {
        if (isLocked) {
            setShowPopup(true);
        }
    };

    return (
        <>
            <Pressable style={styles.container} onPress={handlePress}>
                <View style={styles.achievementCircle}>
                    <View style={styles.fillContainer} />
                    <HorizontalWaveSVG style={styles.waveSVG} />

                    {isLocked && <View style={styles.lockedOverlay} />}
                </View>

                <Text style={styles.achievementNumber}>{displayNumber}</Text>
                <Text style={styles.achievementLabel}>{item.label}</Text>
            </Pressable>

            {showPopup && (
                <RewardModal onClose={() => setShowPopup(false)} />
            )}
        </>
    );
};

export default AchievementItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 15,
        alignSelf: 'center',
    },
    achievementCircle: {
        minWidth: 156,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F4F4F',
    },
    fillContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 48,
        backgroundColor: '#02BBBE',
    },
    waveSVG: {
        position: 'absolute',
        bottom: 42,
        left: 0,
        right: 0,
    },
    lockedOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#00000080',
    },
    achievementNumber: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 5,
    },
    achievementLabel: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#999999',
    },
});
