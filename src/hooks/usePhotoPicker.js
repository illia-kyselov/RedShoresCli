import { Alert } from 'react-native';
import { launchImageLibrary, requestMediaLibraryPermissions } from 'react-native-image-picker';

export function usePhotoPicker() {
    const pickPhoto = async () => {
        const { status } = await requestMediaLibraryPermissions();
        if (status !== 'granted') {
            Alert.alert('Error', 'Permission to access gallery was denied');
            return null;
        }

        return new Promise((resolve) => {
            launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 800,
                    maxWidth: 800,
                    quality: 1,
                },
                (response) => {
                    if (response.didCancel) {
                        resolve(null);
                    } else if (response.errorCode) {
                        Alert.alert('Error', response.errorMessage || 'Something went wrong');
                        resolve(null);
                    } else if (response.assets && response.assets.length > 0) {
                        resolve(response.assets[0].uri);
                    } else {
                        resolve(null);
                    }
                }
            );
        });
    };

    return { pickPhoto };
}
