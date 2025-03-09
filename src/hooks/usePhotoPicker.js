import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function usePhotoPicker() {
    const pickPhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Error', 'Permission to access gallery was denied');
            return null;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const pickedUri = result.assets?.[0]?.uri;
            if (pickedUri) {
                return pickedUri;
            }
        }

        return null;
    };

    return { pickPhoto };
}
