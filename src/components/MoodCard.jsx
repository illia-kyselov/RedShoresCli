import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function MoodCard({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {item.image ? (
                <Image
                    source={item.image}
                    style={styles.cardImage}
                    resizeMode="cover"
                />
            ) : (
                <LinearGradient
                    colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
                    style={[styles.cardImage, styles.fallbackGradient]}
                />
            )}
            <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '48%',
        backgroundColor: '#951B0A',
        borderRadius: 20,
        padding: 5,
    },
    cardImage: {
        height: 86,
        width: '100%',
        borderRadius: 19,
        marginBottom: 10,
    },
    fallbackGradient: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        marginHorizontal: 16,
        marginBottom: 18,
    },
});
