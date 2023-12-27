import { getApp } from 'firebase/app';
import firebaseConfig from 'configs/firebase'
import init from './init'
import { child, get, getDatabase, ref, set } from "firebase/database";


init()
const app = getApp()
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