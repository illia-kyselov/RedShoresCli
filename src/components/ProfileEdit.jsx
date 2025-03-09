import React from 'react';
import { View, Text, TextInput, Image, Pressable, StyleSheet } from 'react-native';
import PlusSVG from '../assets/profile/PlusSVG';

const ProfileEdit = ({
    name,
    setName,
    email,
    setEmail,
    photo,
    onPickPhoto,
    onSave,
    isChanged,
}) => {
    const isValid = name.trim() !== '' && email.trim() !== '';

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.photoEditWrapper}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.userPhotoEdit} />
                ) : (
                    <View style={[styles.userPhotoEdit, { backgroundColor: '#8F1A0A' }]} />
                )}

                <Pressable style={styles.plusIconContainer} onPress={onPickPhoto}>
                    <PlusSVG />
                </Pressable>
            </View>

            <View style={styles.inputBlock}>
                <Text style={styles.inputLabel}>Your name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={styles.inputLabel}>Your email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor="#ccc"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <Pressable
                style={[styles.saveButton, { opacity: (isChanged && isValid) ? 1 : 0.2 }]}
                onPress={onSave}
                disabled={!(isChanged && isValid)}
            >
                <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
        </View>
    );
};

export default ProfileEdit;

const styles = StyleSheet.create({
    photoEditWrapper: {
        width: 140,
        height: 140,
        borderRadius: 70,
        overflow: 'hidden',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 40,
        position: 'relative',
    },
    userPhotoEdit: {
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover',
    },
    plusIconContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBlock: {
        marginHorizontal: 25,
        marginBottom: 20,
    },
    inputLabel: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#E4E4E4',
        borderRadius: 14,
        backgroundColor: '#951B0A',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 10,
        color: '#FFFFFF',
    },
    saveButton: {
        height: 42,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 999,
        backgroundColor: '#B02E1C',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    saveButtonText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
