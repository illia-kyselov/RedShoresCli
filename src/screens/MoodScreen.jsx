import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import MoodCard from '../components/MoodCard';
import { useNavigation } from '@react-navigation/native';

export default function MoodScreen() {
    const moods = useSelector((state) => state.mood.moods);
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <MoodCard
            item={item}
            onPress={() => navigation.navigate('MoodDetail', { item })}
        />
    );

    return (
        <LinearGradient
            colors={['#610A01', '#731704', '#7C1B0A', '#972719']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.safeContainer}>
                <FlatList
                    data={moods}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => String(index)}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    safeContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});
