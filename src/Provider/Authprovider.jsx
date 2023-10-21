import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const googleprovider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [user,setuser] = useState(null);
    const [loading,setloading] = useState(true);


    const googlesignin = ()=>{
        setloading(true)
        return signInWithPopup(auth,googleprovider)
    }

    const createuser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
    const unsubscribe =    onAuthStateChanged(auth,currentuser=>{
            console.log(currentuser);
            setuser(currentuser);
            setloading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
  
    const signin = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
        setloading(true)
        return signOut(auth)

    }

    const userinfo = {
        user,
        loading,
        googlesignin,
        createuser,
        signin,
        logout

    }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;