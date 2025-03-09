import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import Achievements from './Achievements';

const ProfileView = ({ user, achievementsData, onEditPress }) => {
    return (
        <View style={{ flex: 1 }}>
            <Pressable style={styles.editTextContainer} onPress={onEditPress}>
                <Text style={styles.editText}>edit</Text>
            </Pressable>

            <View style={styles.photoWrapper}>
                {user.photo ? (
                    <Image source={{ uri: user.photo }} style={styles.userPhoto} />
                ) : (
                    <View style={[styles.userPhoto, { backgroundColor: '#8F1A0A' }]} />
                )}
            </View>

            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>

            <Achievements data={achievementsData} />
        </View>
    );
};

export default ProfileView;

const styles = StyleSheet.create({
    editTextContainer: {
        position: 'absolute',
        top: 20,
        right: 15,
        zIndex: 1,
    },
    editText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
    },
    photoWrapper: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 16,
    },
    userPhoto: {
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover',
    },
    userName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 10,
    },
    userEmail: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 30,
    },
});
