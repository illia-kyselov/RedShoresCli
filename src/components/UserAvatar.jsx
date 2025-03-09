import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const AVATAR_SIZE = 60;

const UserAvatar = ({ photo, style, defaultStyle }) => {
    return photo ? (
        <Image source={{ uri: photo }} style={[styles.userPhoto, style]} />
    ) : (
        <View style={[styles.defaultAvatar, defaultStyle]} />
    );
};

const styles = StyleSheet.create({
    defaultAvatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        backgroundColor: '#D9D9D9',
        marginBottom: 10,
    },
    userPhoto: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        marginBottom: 10,
        resizeMode: 'cover',
    },
});

export default UserAvatar;
