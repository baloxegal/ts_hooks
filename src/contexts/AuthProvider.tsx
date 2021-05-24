import { useState, createContext } from "react";

interface User{
    name : string;
}

export type AuthContextType = {
    user : User;
    setUser: (user: User) => void;
}

const user = {};

export const AuthContext = createContext(user);

export const AuthProvider = (props : any) => {
    const [user, setUser] = useState({name : "Vasea"});
    return(
        <AuthContext.Provider value = {[user, setUser]}>{props.children}</AuthContext.Provider>
    )
}