import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

import { usePhotoPicker } from '../hooks/usePhotoPicker';
import ProfileView from '../components/ProfileView';
import ProfileEdit from '../components/ProfileEdit';

const ProfileScreen = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const achievementsData = useSelector((state) => state.achievements);
    const [isEditing, setIsEditing] = useState(!user.name && !user.email);
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [photo, setPhoto] = useState(user.photo || null);

    const [isChanged, setIsChanged] = useState(false);

    const { pickPhoto } = usePhotoPicker();

    const hasUserData = !!user.name || !!user.email || !!user.photo;

    useEffect(() => {
        if (name !== user.name || email !== user.email || photo !== user.photo) {
            setIsChanged(true);
        } else {
            setIsChanged(false);
        }
    }, [name, email, photo, user]);

    const handleSave = () => {
        dispatch(setUser({ name, email, photo }));
        setIsEditing(false);
    };

    const handlePickPhoto = async () => {
        const uri = await pickPhoto();
        if (uri) {
            setPhoto(uri);
        }
    };

    if (!isEditing && hasUserData) {
        return (
            <LinearGradient
                colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
                style={{ flex: 1 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <SafeAreaView style={styles.container}>
                    <ProfileView
                        user={user}
                        achievementsData={achievementsData}
                        onEditPress={() => {
                            setIsEditing(true);
                            setName(user.name);
                            setEmail(user.email);
                            setPhoto(user.photo);
                        }}
                    />
                </SafeAreaView>
            </LinearGradient>
        );
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <LinearGradient
                colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
                style={{ flex: 1 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <SafeAreaView style={styles.container}>
                    <ProfileEdit
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        photo={photo}
                        onPickPhoto={handlePickPhoto}
                        onSave={handleSave}
                        isChanged={isChanged}
                    />
                </SafeAreaView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
