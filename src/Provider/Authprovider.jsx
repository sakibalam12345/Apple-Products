import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    const signin = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signout = ()=>{
        return signOut(auth)

    }

    




    const userinfo = {
        user,
        loading

    }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;