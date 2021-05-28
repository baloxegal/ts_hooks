import { useState, createContext } from "react";
import { loadUser } from "../api/auth";

export interface User{
    userName : string;
}

export type UserContextType = {
    user : User;
    setUser: (user: User) => void;
}

export type TokenContextType = {
    token : any;
    setToken: (token: any) => void;
}

export const UserContext = createContext<UserContextType>({
    user : JSON.parse(localStorage.getItem("user") ?? "null"), setUser: () =>{}});

export const TokenContext = createContext<TokenContextType>({
        token : localStorage.getItem("token"), setToken: () =>{}});

export const AuthProvider = (props : any) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") ?? "null"));
    const [token, setToken] = useState(null);
    
    return(
        <UserContext.Provider value = {{user, setUser}}>
            <TokenContext.Provider value = {{token, setToken}}>{props.children}</TokenContext.Provider>
        </UserContext.Provider>
    )
}