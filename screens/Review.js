import React from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as AuthSession from 'expo-auth-session';

const config = {
    clientId: '1079743757256-ptjqs7b2vk6rd0k69mroni2c2fhaed7h.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['https://www.googleapis.com/auth/drive.file'],
};

function Review({ navigation, route }) {

    const tripName = route.params.name

    const [imageUri, setImageUri] = React.useState(null);

    const getFolderIdByName = async (accessToken, folderName) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/drive/v3/files?q=name='${encodeURIComponent(folderName)}'+and+mimeType='application/vnd.google-apps.folder'&fields=files(id)`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                const { files } = data;
                if (files.length > 0) {
                    return files[0].id;
                } else {
                    console.log(`Folder '${folderName}' not found.`);
                    return null;
                }
            } else {
                console.log('Failed to retrieve folder ID:', response.status);
                return null;
            }
        } catch (error) {
            console.log('Error retrieving folder ID:', error);
            return null;
        }
    };

    const authenticateWithGoogle = async () => {
        const { type, params } = await AuthSession.startAsync({ authUrl: getAuthUrl() });
        if (type === 'success') {
            // Handle the authentication response
            const accessToken = params.access_token;
            // Use the access token for further API requests or other purposes
            uploadToGoogleDrive(accessToken);
        } else if (type === 'error') {
            // Handle error case
            console.log('Error:', params.errorCode, params.errorDescription);
        } else {
            // Handle cancel case
            console.log('Google authentication cancelled');
        }
    };

    const getAuthUrl = () => {
        const { clientId, redirectUri, scopes } = config;
        const queryParams = new URLSearchParams({
            response_type: 'token',
            client_id: clientId,
            redirect_uri: redirectUri,
            scope: scopes.join(' '),
        });
        return `https://accounts.google.com/o/oauth2/v2/auth?${queryParams.toString()}`;
    };

    const uploadToGoogleDrive = async (accessToken) => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access media library denied');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const folderId = await getFolderIdByName(accessToken, tripName)
            if (!folderId) {
                return;
            }
            const formData = new FormData();
            formData.append('file', {
                uri: result.uri,
                type: 'image/jpeg',
                name: 'image.jpg',
            });

            formData.append('parents', JSON.stringify([folderId])); // Specify the folder ID

            const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Image uploaded successfully!');
            } else {
                console.log('Failed to upload image:', response.status);
            }
        }
    };


    return (
        <View style={styles.container}>
            <Text>Reseñas</Text>
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 300, height: 300 }} />}
            <Button
                title='Haz una reseña'
                onPress={() => { authenticateWithGoogle() }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Review
