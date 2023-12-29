import { getApp, initializeApp } from 'firebase/app';
import init from './init'
import { child, get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    appId: 'AIzaSyD49dBskpFc1slU2n00gxaPSzsMt6xE5Uc',
    apiKey: 'soro-dashboard.firebaseapp.com',
    authDomain: 'soro-dashboard',
    projectId: 'soro-dashboard.appspot.com',
    storageBucket: '1:167327093021:web:79d8d00aeb165aae3751f4',
    databaseURL: 'https://soro-dashboard-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getUserCharacters = (userId: string) => {
    const charactersRef = ref(db, `characters/${userId}`);

    return get(charactersRef)
        .then((snapshot) => snapshot.val())
        .catch((error) => {
            console.error('Error fetching characters:', error);
            throw error;  // Propaga el error para que pueda ser manejado fuera de esta función
        });
};

export const getUserCharacter = (userId: string, charname: string) => {
    const charactersRef = ref(db, `characters/${userId}/${charname}`);

    return get(charactersRef)
        .then((snapshot) => snapshot.val())
        .catch((error) => {
            console.error('Error fetching characters:', error);
            throw error;  // Propaga el error para que pueda ser manejado fuera de esta función
        });
};

export const updateCharacterAvatar = (userId: any, character: string, avatarsrc: string) => {
    const charactersRef = ref(db, `characters/${userId}/${character}`);
    get(charactersRef)
        .then((snapshot) => {
            let data = snapshot.val()
            data.imagesrc = avatarsrc
            set(charactersRef, data);
        })
        .catch((error) => {
            console.error('Error fetching characters:', error);
            throw error;  // Propaga el error para que pueda ser manejado fuera de esta función
        });

};