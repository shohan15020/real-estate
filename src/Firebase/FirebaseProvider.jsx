import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase.config";

export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // social provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create a new user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    //logout
  const logout = () => {
    setUser(null);
    signOut(auth);
  };

    // observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              console.log("useEffect",user);
            }
        });

        return () => unSubscribe()
    },[])

    const AuthInfo = {createUser, signIn, googleLogin, githubLogin, user, logout}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;