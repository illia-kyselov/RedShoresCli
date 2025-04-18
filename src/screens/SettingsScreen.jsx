import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import ArrowBack from '../assets/home/ArrowBack.jsx';
import ArrowRightSVG from '../assets/settings/ArrowRightSVG.jsx';
import TermsSVG from '../assets/settings/TermsSVG.jsx';
import DevelopersSVG from '../assets/settings/DevelopersSVG.jsx';
import PrivacySVG from '../assets/settings/PrivacySVG.jsx';
import NotificationsSVG from '../assets/settings/NotificationsSVG.jsx';

const settingsItems = [
    {
        key: 'developers',
        label: 'Developer Website',
        Icon: DevelopersSVG,
        onPress: () => { },
    },
    {
        key: 'notifications',
        label: 'Notifications',
        Icon: NotificationsSVG,
        onPress: null,
    },
    {
        key: 'terms',
        label: 'Terms of Use',
        Icon: TermsSVG,
        onPress: () => { },
    },
    {
        key: 'privacy',
        label: 'Privacy Policy',
        Icon: PrivacySVG,
        onPress: () => { },
    },
];

export default function SettingsScreen() {
    const navigation = useNavigation();
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <LinearGradient
            colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
            locations={[0.535, 0.74, 0.96, 1]}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <ArrowBack />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Settings</Text>
                </View>

                <ScrollView contentContainerStyle={styles.listContainer}>
                    {settingsItems.map(({ key, label, Icon, onPress }) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.item}
                            activeOpacity={onPress ? 0.7 : 1}
                            onPress={onPress ?? undefined}
                        >
                            <View style={styles.itemContent}>
                                <Icon />
                                <Text style={styles.itemLabel}>{label}</Text>
                            </View>

                            {key === 'notifications' ? (
                                <Switch
                                    value={notificationsEnabled}
                                    onValueChange={setNotificationsEnabled}
                                    trackColor={{ true: '#FFB600', false: 'rgba(255, 182, 0, 0.5)' }}
                                    thumbColor="#FFFFFF"
                                    ios_backgroundColor="rgba(255, 182, 0, 0.5)"
                                />
                            ) : (
                                <ArrowRightSVG />
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    safeArea: { flex: 1, backgroundColor: 'transparent' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 16,
    },
    backButton: { marginRight: 8 },
    headerTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 22,
        color: '#FFFFFF',
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingTop: 36,
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#8F1A0A',
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemLabel: {
        marginLeft: 16,
        fontWeight: '700',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
