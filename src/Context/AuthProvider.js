import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const [user, setUser]=useState(null)
    
    const createUser=(email, password)=>{
        
      return  createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser=(email, password)=>{
       
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const lougoutUser=()=>{
      return signOut(auth)
      .then(result=>{
        console.log(result);
      })
    }

    const googleLogin=(provider)=>{
     return signInWithPopup(auth,provider)
    }

    const facebookLogin=(provider)=>{
      return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser)
           
          })
          return ()=> unsubscribe()
       },[])
    const userValue={createUser, loginUser, user, lougoutUser, googleLogin, facebookLogin}
    return (
        <AuthContext.Provider value={userValue}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;