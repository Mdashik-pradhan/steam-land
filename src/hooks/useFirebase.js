import {useEffect, useState} from 'react';
import {
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    getIdToken
} from "firebase/auth";
import initializeFirebase from '../pages/Login/Firebase/firebase.init';


   
initializeFirebase();

const useFirebase = () => {
    const [ user, setUser ] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();

    const registerUser = (email, password,  name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);

        // save user to the database
        saveUser(email, name, 'POST');

        // Send to firebase after creation.
       updateProfile(auth.currentUser, {
           displayName: name
       }).then(() => {

       }).catch((error) => {

       });
       history.replace('/')
    })
    .catch((error) => {
        setAuthError(error.message);
    }).finally(() => setIsLoading(false));
    }

    // login

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
            // ...
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
       const googleProvider = new GoogleAuthProvider();
       const auth = getAuth();
       signInWithPopup(auth, googleProvider)
           .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
           }).catch((error) => {
               setAuthError(error.message);
           });
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://hidden-sea-41707.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
    
        })
    }
    
    // observer user state
    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                getIdToken(user)
                .then(idTooken => {
                    setToken(idTooken)
                })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    useEffect(() => {
        fetch(`https://hidden-sea-41707.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin));
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            // sign-out successful.
            
        })
        .catch(error => {

        })
        .finally(() => setIsLoading(false));
    }


    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;