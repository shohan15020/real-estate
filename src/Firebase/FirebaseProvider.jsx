import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./Firebase.config";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(10,user);
    const [loading, setLoading] = useState(true)

    // social provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create a new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user 
    // const updateUser = (name, image) => {

    //     updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: image
    //     })
    //     .then(() => {
    //         setUser(auth.currentUser);
    //         // Update navbar or any other component here
    //     })
    //     .catch(error => console.error("Error updating profile: ", error));

    // }
    const updateUser = (name, photoURL) => {
        return new Promise((resolve, reject) => {
            auth.currentUser
                .updateProfile({
                    displayName: name,
                    photoURL: photoURL,
                })
                .then(() => {
                    setUser(auth.currentUser);
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    

    // sign in user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //logout
    const logout = () => {
        setUser(null);
        signOut(auth);
        // setLoading(true)
    };

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false)
                setUser(user)

            }
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const AuthInfo = { createUser, signIn, googleLogin, githubLogin, user, logout, loading , updateUser}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;