import { useEffect, useState } from "react"
import getFirebaseInstance from "./firebase"
import loadFirebaseDependencies from "./loadFirebaseDependencies"

function useAuth() {
  // const [user, setUser] = useState(null)
  const [firebase, setFirebase] = useState(null)
  // const [loading, setLoading] = useState(true)

  // userのログイン状態をマウント時に判定するシステム。
  useEffect(() => {
    let unsubscribe

    loadFirebaseDependencies.then(app => {
      const firebaseInstance = getFirebaseInstance(app)
      setFirebase(firebaseInstance)
    })

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  return { firebase }
}

export default useAuth
