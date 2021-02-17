import firebaseConfig from "./config";
import axios from 'axios';
import firebase from "firebase/app"
import "firebase/firestore"
const timestamp = firebase.firestore.Timestamp.now();

class Firebase {
    constructor(app) {
        if (!firebaseInstance) {
            app.initializeApp(firebaseConfig);

            // this.auth = app.auth();
            this.db = app.firestore();
            this.functions = app.functions();
            this.storage = app.storage();
        }
    }

    async postContact({ name, email, phone, content, selectedDate, message, people }) {
        return this.db.collection("reservation").add({
            name: name,
            email: email,
            phone: phone,
            content: content,
            selectedDate: selectedDate,
            message: message,
            people: people,
            check: false,
            published_at: timestamp

        })
    }

}

let firebaseInstance;

function getFirebaseInstance(app) {
    if (!firebaseInstance && app) {
        firebaseInstance = new Firebase(app);
        return firebaseInstance;
    } else if (firebaseInstance) {
        return firebaseInstance
    } else {
        return null;
    }
}

export default getFirebaseInstance;