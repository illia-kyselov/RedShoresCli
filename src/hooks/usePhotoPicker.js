import { Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export function usePhotoPicker() {
    const pickPhoto = async () => {
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
                    console.log('ImagePicker response:', response);

                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                        resolve(null);
                    } else if (response.errorCode) {
                        Alert.alert('Error', response.errorMessage || 'Something went wrong');
                        resolve(null);
                    } else if (response.assets && response.assets.length > 0) {
                        console.log('Selected image URI:', response.assets[0].uri);
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
