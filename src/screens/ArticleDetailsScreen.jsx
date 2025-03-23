import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import ArrowBack from '../assets/home/ArrowBack.jsx';

export default function ArticleDetailsScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { article } = route.params; 

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

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Image
                        source={article.image}
                        style={styles.articleImage}
                        resizeMode="cover"
                    />

                    <Text style={styles.articleTitle}>{article.title}</Text>

                    <Text style={styles.articleContent}>{article.content}</Text>
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
        paddingHorizontal: 16,
    },
    articleImage: {
        width: '100%',
        height: 208,
        borderRadius: 25,
        marginBottom: 16,
    },
    articleTitle: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    articleContent: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
    },
});
