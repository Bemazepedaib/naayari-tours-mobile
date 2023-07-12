import AsyncStorage from '@react-native-async-storage/async-storage';

let token

export const signIn = (newToken) => {
    token = newToken;
    return AsyncStorage.setItem("tokenAppMovil", newToken);
};

export const getToken = async () => {
    if (token) {
        return Promise.resolve(token);
    }

    token = await AsyncStorage.getItem("tokenAppMovil");
    return token;
};

export const signOut = () => {
    token = undefined;
    return AsyncStorage.removeItem("tokenAppMovil");
};

