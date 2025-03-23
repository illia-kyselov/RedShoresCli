import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ArrowBack from '../assets/home/ArrowBack.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UsefulArticlesScreen() {
    const navigation = useNavigation();
    const articles = useSelector((state) => state.usefulArticles.articles);

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
                    <Text style={styles.headerTitle}>Useful articles</Text>
                </View>

                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.cardsContainer}>
                        {articles.map((item) => (
                            <View style={styles.card} key={item.id}>
                                <Image
                                    source={item.image}
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.cardTitle} numberOfLines={2}>
                                    {item.title}
                                </Text>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity
                                    style={styles.readMoreButton}
                                    onPress={() =>
                                        navigation.navigate('ArticleDetails', { article: item })
                                    }
                                >
                                    <Text style={styles.readMoreText}>Read more</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    header: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    backButton: {
        marginRight: 8,
    },
    headerTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 20,
        color: '#FFFFFF',
    },
    scrollContent: {
        paddingTop: 40,
        paddingBottom: 20,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },
    card: {
        width: 170,
        height: 221,
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#951B0A',
        margin: 5,
    },
    cardImage: {
        width: 160,
        height: 83,
        borderRadius: 19,
        marginBottom: 6,
        alignSelf: 'center',
    },
    cardTitle: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 14,
    },
    readMoreButton: {
        width: 140,
        height: 33,
        borderRadius: 20,
        backgroundColor: '#FFB600',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    readMoreText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 14,
        color: '#151515',
    },
});
