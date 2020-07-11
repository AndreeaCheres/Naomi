import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-key";

export const onSignIn = () => {
    console.log('onSignIn start');
    return AsyncStorage.setItem(USER_KEY, "true");
}

export const onSignOut = () => {
    console.log('onSignOut start');
    return AsyncStorage.removeItem(USER_KEY);
}

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                console.log('isSignedIn ' + res);
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};