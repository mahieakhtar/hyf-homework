import firebaseConfig from "./config";
import * as firebase from 'firebase/app';
import 'firebase/auth';

function Firebase () {

    const providers = {
        googleProvider: new firebase.auth.GoogleAuthProvider(),
    };
    
    return {
        init() {
            firebase.initializeApp(firebaseConfig);
        },
        getAuth() {
            return firebase.auth();
        },
       async signInEmailAndPassword() {
            try {
                await firebase.auth().signInWithEmailAndPassword();
            } catch (err) {
                console.log(err)
            }
        },
        async signInGoogle() {
            console.log('hi');
            try {
                await firebase.auth().signInWithPopup(providers.googleProvider);
            } catch (err) {
                console.log(err)
            }
        },
        async signOut() {
            await firebase.auth().signOut()
        }
    }
}

export default Firebase();




