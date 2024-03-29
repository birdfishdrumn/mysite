import firebaseConfig from "./config"
import firebase from "firebase/app"
import { navigate } from "gatsby"

import "firebase/firestore"
const timestamp = firebase.firestore.Timestamp.now()

class Firebase {
  constructor(app) {
    if (!firebaseInstance) {
      app.initializeApp(firebaseConfig)

      // this.auth = app.auth();
      this.db = app.firestore()
      this.functions = app.functions()
      this.storage = app.storage()
    }
  }
  // useEffect(() => {
  //     if (location.pathname.split("/")[1] === "en") {
  //         setLanguage("English")
  //     }
  // }, [])

  async postContact({
    name,
    email,
    phone,
    content,
    selectedDate,
    message,
    people,
    time,
  }) {
    const ref = this.db.collection("reservation").doc()
    let id = ref.id
    return this.db
      .collection("reservation")
      .doc(id)
      .set({
        name: name,
        email: email,
        phone: phone,
        content: content,
        selectedDate: selectedDate,
        time: time,
        message: message,
        people: people,
        check: false,
        published_at: timestamp,
        id: id,
      })
      .then(() =>
        navigate("/complete", {
          state: {
            name,
            email,
            phone,
            content,
            selectedDate,
            time,
            message,
            people,
          },
        })
      )
  }

  async postForm({ name, email, subject, message }) {
    const ref = this.db.collection("contacts").doc()
    let id = ref.id
    return this.db
      .collection("contacts")
      .doc(id)
      .set({
        name: name,
        email: email,
        subject: subject,
        message: message,
        published_at: timestamp,
        id: id,
      })
      .then(() =>
        navigate("/complete", {
          state: { name, email, subject, message },
        })
      )
  }
}

let firebaseInstance

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app)
    return firebaseInstance
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null
  }
}

export default getFirebaseInstance
